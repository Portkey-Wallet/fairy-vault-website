import React, { useCallback, useMemo, useState } from 'react';
import { RE_CAPTCHA_SITE_KEY } from 'constants/misc';
import styles from './styles.module.less';
import dynamic from 'next/dynamic';
import { message } from 'antd';
import qs from 'query-string';
import { useLocation } from 'react-use';

const GoogleReCaptcha = dynamic(import('@matt-block/react-recaptcha-v2'), { ssr: false });
type TParams = { siteKey?: string; providerName?: string };
const DEFAULT_PROVIDER_NAME = 'FairyVault';

export default function ReCaptcha() {
  const location = useLocation();

  const { siteKey, providerName } = useMemo(
    () => (location.search ? qs.parse(location.search) : {}) as TParams,
    [location.search],
  );
  const handleSuccess = useCallback(
    (response: string) => {
      const name = providerName || DEFAULT_PROVIDER_NAME;
      const provider = (window as any)[name];

      if (!provider) message.error(`Timeout, please download and install the ${DEFAULT_PROVIDER_NAME} extension`);

      provider?.request({
        method: 'setReCaptchaCode',
        payload: { response },
      });
    },
    [providerName],
  );

  return (
    <div className={styles.reCaptchaContainer}>
      <GoogleReCaptcha
        siteKey={(siteKey as string) || RE_CAPTCHA_SITE_KEY}
        theme="light"
        size="normal"
        onSuccess={handleSuccess}
      />
    </div>
  );
}
