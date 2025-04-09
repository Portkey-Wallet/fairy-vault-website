import React, { useCallback } from 'react';
import { RE_CAPTCHA_SITE_KEY } from 'constants/misc';
import styles from './styles.module.less';
import dynamic from 'next/dynamic';
import { message } from 'antd';
import { PORTKEY_VERSION } from 'constants/auth';
import qs from 'query-string';

const GoogleReCaptcha = dynamic(import('@matt-block/react-recaptcha-v2'), { ssr: false });

export default function ReCaptcha() {
  const handleSuccess = useCallback((response: string) => {
    const { version } = qs.parse(location.search);
    const isPortkeyV2 = version === PORTKEY_VERSION;
    const portkeyProvider = isPortkeyV2 ? window.Portkey : window.portkey;

    if (!portkeyProvider) message.error('Timeout, please download and install the Portkey did extension');

    portkeyProvider?.request({
      method: 'portkey_setReCaptchaCodeV2',
      payload: { response },
    });
  }, []);

  return (
    <div className={styles.reCaptchaContainer}>
      <GoogleReCaptcha siteKey={RE_CAPTCHA_SITE_KEY} theme="light" size="normal" onSuccess={handleSuccess} />
    </div>
  );
}
