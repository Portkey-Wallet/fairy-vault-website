/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Button, message } from 'antd';
import type { IResolveParams } from 'reactjs-social-login';
import styles from './styles.module.less';
import { PortkeyLogo, Google, Apple } from 'assets/images';

import { ISocialLogin } from 'types/socialLogin';
import { NetworkType } from 'types/network';
import {
  APPLE_MAINNET_REDIRECT_URI,
  APPLE_MAINNET_REDIRECT_URI_V2,
  APPLE_TESTNET_REDIRECT_URI,
  APPLE_TESTNET_REDIRECT_URI_V2,
  PORTKEY_VERSION,
} from 'constants/auth';

const LoginSocialGoogle = dynamic<any>(
  import('reactjs-social-login').then((module) => module.LoginSocialGoogle),
  { ssr: false },
);
const LoginSocialApple = dynamic(import('components/LoginSocialApple'), { ssr: false });

const SUPPORT_TYPE = ['Google', 'Apple'];

export default function SocialTem({
  loginType,
  network,
  version,
}: {
  loginType: ISocialLogin;
  network?: NetworkType;
  version?: string;
}) {
  const isPortkeyV2 = useMemo(() => version === PORTKEY_VERSION, [version]);

  const onSuccess = useCallback(
    async (response: IResolveParams) => {
      const portkeyProvider = isPortkeyV2 ? window.Portkey : window.portkey;

      if (!portkeyProvider) message.error('Timeout, please download and install the Portkey did extension');

      portkeyProvider?.request({
        method: 'portkey_socialLogin',
        payload: {
          response: { ...response.data, provider: response.provider },
        },
      });
    },
    [isPortkeyV2],
  );

  const onError = useCallback(
    (error: any) => {
      console.log(error, 'onError===LoginSocial');
      const portkeyProvider = isPortkeyV2 ? window.Portkey : window.portkey;

      portkeyProvider?.request({
        method: 'portkey_socialLogin',
        payload: { error: typeof error === 'string' ? error : error?.err || error },
      });
    },
    [isPortkeyV2],
  );

  const appleRedirectUri = useMemo(() => {
    if (network === 'TESTNET') {
      return isPortkeyV2 ? APPLE_TESTNET_REDIRECT_URI_V2 : APPLE_TESTNET_REDIRECT_URI;
    } else {
      return isPortkeyV2 ? APPLE_MAINNET_REDIRECT_URI_V2 : APPLE_MAINNET_REDIRECT_URI;
    }
  }, [isPortkeyV2, network]);

  return (
    <div className={styles['social-login-wrapper']}>
      <div className={styles['social-login-inner']}>
        <div className={styles['social-login-logo']}>
          {/* <Image alt="Google Logo" className={styles['portkey-logo']} src={PortkeyLogo.src} /> */}
          <img className={styles['portkey-logo']} src={PortkeyLogo.src} />
        </div>

        {SUPPORT_TYPE.includes(loginType) ? (
          <>
            <p className={styles['description']}>{`Click below to verify using your ${loginType} account`}</p>

            {loginType === 'Google' && (
              <LoginSocialGoogle
                isOnlyGetToken
                scope={
                  'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
                }
                client_id={process.env.NEXT_PUBLIC_GG_APP_ID || ''}
                onResolve={onSuccess}
                onReject={onError}>
                <Button className={styles['common-btn']}>
                  {/* <Image alt="Google Logo" className={styles['btn-logo']} src={Google.src} /> */}
                  <img className={styles['btn-logo']} src={Google.src} />
                  Verify with Google
                </Button>
              </LoginSocialGoogle>
            )}

            {loginType === 'Apple' && (
              <LoginSocialApple
                client_id={process.env.NEXT_PUBLIC_APP_APPLE_ID || ''}
                scope={'name email'}
                redirect_uri={appleRedirectUri}
                onReject={onError}>
                <Button className={styles['common-btn']}>
                  <img className={styles['btn-logo']} src={Apple.src} />
                  {/* <Image alt="Google Logo" className={styles['btn-logo']} src={Apple.src} /> */}
                  Verify with Apple
                </Button>
              </LoginSocialApple>
            )}
          </>
        ) : (
          <div className={styles['no-content']}>NO CONTENT</div>
        )}
      </div>
    </div>
  );
}
