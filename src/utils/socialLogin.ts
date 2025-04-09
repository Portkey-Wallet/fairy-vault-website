import { PORTKEY_VERSION } from 'constants/auth';
import { stringify } from 'query-string';
import { NetworkType } from 'types/network';
import { ISocialLogin, OperationTypeEnum, TCustomNetworkType } from './model';
import { devicesEnv } from '@portkey/utils';

export enum SocialAPIs {
  VERIFY_GOOGLE_TOKEN = '/api/app/account/verifyGoogleToken',
  VERIFY_APPLE_TOKEN = '/api/app/account/verifyAppleToken',
  VERIFY_TELEGRAM_TOKEN = '/api/app/account/verifyTelegramToken',
}

export interface VerifySocialGuardianParams {
  accessToken: string;
  verifierId: string;
  chainId: string;
  targetChainId?: string;
  operationType: OperationTypeEnum;
  operationDetails: string;
}

export interface CheckVerifyCodeResultDTO {
  verificationDoc: string;
  signature: string;
}

export type AppleUserInfo = {
  isExpired: boolean;
  userId: string;
  email: string;
  expirationTime: Date;
  isPrivate: boolean;
};

interface TelegramUserInfo {
  isExpired: boolean;
  userId: string;
  id: string;
  expirationTime: number;
  firstName: string;
  lastName?: string;
  picture?: string;
  email?: undefined;
  isPrivate: boolean;
}

export const OPEN_LOGIN_WEB_PAGE = 'https://openlogin.portkey.finance';
export const OPEN_LOGIN_WEB_PAGE_TEST = 'https://openlogin-test.portkey.finance';

export const isNotSocialGuardian = (guardianType: string): boolean =>
  guardianType !== 'Google' && guardianType !== 'Apple' && guardianType !== 'Telegram';

export const socialLoginAuth = ({
  openLoginUrl,
  onlineType = 'onLine',
  type,
  clientId,
  redirectURI,
  network,
  serviceUrl,
}: {
  openLoginUrl: string;
  onlineType?: TCustomNetworkType;
  type: ISocialLogin;
  clientId?: string;
  redirectURI?: string;
  network?: NetworkType;
  serviceUrl?: string;
}): Promise<{
  token: string;
  provider: ISocialLogin;
}> =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async (resolve, reject) => {
    let timer: any = null;
    const serviceURI = dealURLLastChar(serviceUrl);

    // if (type === 'Telegram' && !serviceURI) serviceURI = getServiceUrl();

    const app = await devicesEnv.getPortkeyShellApp();

    if (app) {
      return app.invokeClientMethod(
        {
          type: 'login',
          params: {
            type,
            ctw: onlineType,
            serviceURI,
          },
        },
        (args: any): any => {
          if (args.status === 1) {
            const token = args.data?.token;
            if (!token) {
              reject('auth error');
            } else {
              resolve({
                token,
                provider: type,
              });
            }
          } else {
            reject(args.msg || 'auth error');
          }
        },
      );
    }

    const onMessage = (event: MessageEvent) => {
      const type = event.data.type;
      if (type === 'PortkeySocialLoginOnSuccess' || type === 'PortkeySocialLoginOnFailure') {
        timer && clearInterval(timer);
      }
      switch (type) {
        case 'PortkeySocialLoginOnSuccess':
          resolve(event.data.data);
          break;
        case 'PortkeySocialLoginOnFailure':
          reject(event.data.error);
          break;
        default:
          return;
      }
      window.removeEventListener('message', onMessage);
    };

    window.addEventListener('message', onMessage);
    const baseUrl = `${openLoginUrl}/social-login/${type}`;
    const queryParams =
      type === 'Telegram'
        ? {
            network,
            from: 'openlogin',
            serviceURI,
          }
        : { clientId, redirectURI, version: PORTKEY_VERSION };
    const windowOpener = window.open(`${baseUrl}?${stringify(queryParams)}`);
    timer = setInterval(() => {
      if (windowOpener?.closed) {
        clearInterval(timer);
        reject('User close the prompt');
        timer = null;
      }
    }, 1600);
  });

const dealURLLastChar = (url = '') => (url?.slice(-1) === '/' ? url.slice(0, -1) : url);

export const verifySocialTokens = async (
  accessToken: string,
  verifierId: string,
  chainId: string,
  targetChainId: string,
  operationType: OperationTypeEnum,
  operationDetails: string,
  guardianType: ISocialLogin,
  serviceUrl: string,
) => {
  const params: VerifySocialGuardianParams = {
    accessToken,
    verifierId,
    chainId,
    targetChainId,
    operationType,
    operationDetails,
  };
  let path;
  if (guardianType === 'Google') {
    path = SocialAPIs.VERIFY_GOOGLE_TOKEN;
  } else if (guardianType === 'Telegram') {
    path = SocialAPIs.VERIFY_TELEGRAM_TOKEN;
  } else if (guardianType === 'Apple') {
    path = SocialAPIs.VERIFY_APPLE_TOKEN;
  }
  const res = await fetch(`${serviceUrl}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  return res.json() as unknown as CheckVerifyCodeResultDTO;
};

export async function getUserInfo(accessToken: string, guardianType: ISocialLogin): Promise<{ id: string }> {
  let userId: string | undefined = '';
  switch (guardianType) {
    case 'Google': {
      const res = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const { id } = await res.json();
      userId = id;
      break;
    }
    case 'Apple': {
      userId = parseAppleIdentityToken(accessToken)?.userId;
      break;
    }
    case 'Telegram': {
      userId = parseTelegramToken(accessToken)?.userId;
      break;
    }
  }
  return {
    id: userId || '',
  };
}

export function parseTelegramToken(token?: string | null): TelegramUserInfo | undefined {
  if (!token) return;
  const parts = token.split('.');
  const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
  const expirationTime = payload.exp * 1000;
  const isExpired = new Date(expirationTime) < new Date();
  const userId = payload.userId;
  const firstName = payload.firstName;
  const picture = payload.protoUrl;
  const lastName = payload.lastName;
  return { isExpired, userId, expirationTime, isPrivate: true, firstName, picture, lastName, id: userId };
}

export function parseAppleIdentityToken(identityToken?: string | null): AppleUserInfo | undefined {
  if (!identityToken) return;
  const parts = identityToken.split('.');
  const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
  const expirationTime = new Date(payload.exp * 1000);
  const isExpired = expirationTime < new Date();
  const userId = payload.sub;
  const email = payload.email;
  const isPrivate =
    typeof payload.is_private_email === 'string'
      ? payload.is_private_email === 'true'
      : payload.is_private_email || !payload.email;
  return { isExpired, userId, email, expirationTime, isPrivate };
}
