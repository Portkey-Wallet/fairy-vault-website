import CommonImage from 'components/CommonImage';
import pcStyle from './pc-styles.module.less';
import mobileStyle from './mobile-styles.module.less';
import { entryPageData } from 'constants/entry';
import { useStyleProvider } from 'utils/mobile';
import { Button, ConfigProvider } from 'antd';
import { closeWindow, getOpenerOrigin, getQueryParams } from 'utils/router';
import { useCallback, useEffect, useState } from 'react';
import { VerifyEntryParams, getCountry, translateOperationEnumToStr } from '../../utils/model';
import {
  OPEN_LOGIN_WEB_PAGE,
  OPEN_LOGIN_WEB_PAGE_TEST,
  getUserInfo,
  isNotSocialGuardian,
  socialLoginAuth,
  verifySocialTokens,
} from 'utils/socialLogin';
import NavFooter from 'page-components/NavFooter';
import { API, get } from 'utils/axios';
import { ISocialMedia } from 'types/nav';

export default function JumpEntry(props: { socialMedia: Array<ISocialMedia> }) {
  const { socialMedia } = props;
  const { logo, errorIcon } = entryPageData;
  const styles = useStyleProvider<Record<string, string>>({ pcStyle, mobileStyle });
  const [consumedData, setConsumedData] = useState<{ [x: string]: string | number | boolean } | undefined>({});
  const [rawData, setRawData] = useState<VerifyEntryParams | undefined>(undefined);
  const [processing, setProcessing] = useState<boolean>(false);
  const [ip, setIp] = useState<string | undefined>('--');

  const checkUserIp = useCallback(async (serviceUrl: string) => {
    try {
      const country = await getCountry(serviceUrl);
      setIp(country);
      // eslint-disable-next-line no-empty
    } catch (ignored) {}
  }, []);

  useEffect(() => {
    const props = getQueryParams();
    const data = props.get('data');
    try {
      if (!data) throw new Error('invalid data');
      const entryPrams = JSON.parse(window.atob(data)) as VerifyEntryParams;
      if (!entryPrams || !entryPrams.currentGuardians) throw new Error('invalid data');
      const {
        serviceUrl,
        currentGuardians,
        operationDetails,
        symbol,
        amount,
        originChainId,
        targetChainId,
        operationType,
      } = entryPrams;
      const { guardianType, identifier, thirdPartyEmail } = currentGuardians;
      if (isNotSocialGuardian(guardianType)) throw new Error('invalid guardian type:' + guardianType);
      if (!serviceUrl || !guardianType || !operationDetails) {
        throw new Error('invalid data');
      }
      const raw: any = {};
      raw['Operation Type'] = translateOperationEnumToStr(operationType);
      symbol && (raw['Token'] = symbol);
      (amount || typeof amount === 'number') && (raw['Amount'] = amount);
      const realChainId = targetChainId || originChainId;
      raw['Chain'] = realChainId === `AELF` ? `MainChain ${realChainId}` : `SideChain ${realChainId}`;
      raw['Guardian Type'] = guardianType;
      const guardianAccount = thirdPartyEmail || identifier;
      raw['Guardian Account'] = guardianAccount;
      raw['Time'] = new Date().toLocaleString();
      raw['IP'] = ip;
      setConsumedData(raw);
      setRawData(entryPrams);
      checkUserIp(serviceUrl);
    } catch (e) {
      console.error(e);
      setConsumedData(undefined);
    }
  }, [checkUserIp, ip]);

  const socialLogin = useCallback(async () => {
    if (processing) return;
    if (rawData) {
      const {
        serviceUrl,
        onlineType,
        clientId,
        networkType = 'MAIN',
        currentGuardians,
        operationDetails,
        operationType,
        originChainId,
        targetChainId,
      } = rawData;
      const { guardianType, verifier, identifier, identifierHash } = currentGuardians;
      const origin = getOpenerOrigin();
      if (!serviceUrl || !networkType || !verifier || !guardianType || isNotSocialGuardian(guardianType)) {
        console.error('invalid data');
        return;
      }
      try {
        setProcessing(true);
        const { token } = await socialLoginAuth({
          openLoginUrl: onlineType === 'onLine' ? OPEN_LOGIN_WEB_PAGE : OPEN_LOGIN_WEB_PAGE_TEST,
          serviceUrl,
          onlineType,
          type: guardianType as any,
          clientId,
          network: networkType,
        });
        if (!token) throw new Error('auth error');
        const id = identifier || identifierHash;
        if ((await getUserInfo(token, guardianType as any)).id !== id) {
          throw new Error('user id not match');
        }
        const verificationData = await verifySocialTokens(
          token,
          verifier.id,
          originChainId,
          targetChainId,
          operationType,
          operationDetails,
          guardianType as any,
          serviceUrl,
        );
        if (!verificationData) throw new Error('verification error');
        console.log('verificationData:', verificationData);
        window.opener?.postMessage({ type: 'PortkeyGuardianApproveSuccess', data: verificationData }, origin || '*');
      } catch (e) {
        console.error(e);
        window.opener?.postMessage({ type: 'PortkeyGuardianApproveFailure', error: e }, origin || '*');
      } finally {
        setProcessing(false);
        closeWindow();
      }
    }
  }, [processing, rawData]);

  return (
    <ConfigProvider>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <CommonImage src={logo.src} style={{ width: logo.width, height: logo.height }} alt={logo.alt} priority />
          <div className={styles.introductionText}>
            {'Verification details are as follows. Proceed only if all data matches:'}
          </div>
          <div className={styles.dashboard}>
            {consumedData ? (
              Object.entries(consumedData).map(([key, value]) => {
                return (
                  <div className={styles.infoLine} key={key}>
                    <div className={styles.infoTitle}>{key}</div>
                    <div className={styles.infoContent}>{value}</div>
                  </div>
                );
              })
            ) : (
              <div className={styles.infoLine}>
                <CommonImage
                  src={errorIcon.src}
                  style={{ width: errorIcon.width, height: errorIcon.height }}
                  alt={errorIcon.alt}
                  priority
                />
                <div className={styles.errorText}>Invalid parameter.</div>
              </div>
            )}
          </div>
          {!!consumedData && (
            <Button type="primary" className={styles.jumpBtn} onClick={socialLogin} loading={processing}>
              <div className={styles.jumpBtnText}>Agree</div>
            </Button>
          )}
        </div>
        <NavFooter
          socialMedia={socialMedia}
          className={styles.footer}
          footerMediaClassName={styles.footerMedia}
          footerPortKeyClassName={styles.footerMediaPortkeyText}
          onlyFooterMedia
        />
      </div>
    </ConfigProvider>
  );
}

export async function getStaticProps() {
  const socialMedia = await get(API.GET.SOCIAL_MEDIA);

  return {
    props: {
      socialMedia: socialMedia?.data || [],
    },
  };
}
