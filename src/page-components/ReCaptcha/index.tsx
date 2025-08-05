import React, { useCallback, useMemo } from 'react';
import { RE_CAPTCHA_SITE_KEY } from 'constants/misc';
import styles from './styles.module.less';
import dynamic from 'next/dynamic';
import { message } from 'antd';
import qs from 'query-string';
import { useLocation } from 'react-use';

const GoogleReCaptcha = dynamic(import('@matt-block/react-recaptcha-v2'), { ssr: false });
type TParams = { sitekey?: string; provider?: string };
const DEFAULT_PROVIDER_NAME = 'FairyVault';

export default function ReCaptcha() {
  const location = useLocation();

  const { sitekey, provider } = useMemo(
    () => (location.search ? qs.parse(location.search) : {}) as TParams,
    [location.search],
  );

  const handleSuccess = useCallback(
    (response: string) => {
      const name = provider || DEFAULT_PROVIDER_NAME;
      const providerInterface = (window as any)[name];

      if (!provider) message.error(`Timeout, please download and install the ${DEFAULT_PROVIDER_NAME} extension`);

      providerInterface?.request({
        method: 'portkey_setReCaptchaCodeV2',
        payload: { response },
      });
    },
    [provider],
  );

  return (
    <div className={styles.reCaptchaContainer}>
      <GoogleReCaptcha
        siteKey={(sitekey as string) || RE_CAPTCHA_SITE_KEY}
        theme="light"
        size="normal"
        onSuccess={handleSuccess}
      />
    </div>
  );
}
