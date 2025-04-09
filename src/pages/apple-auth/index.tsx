'use client';
import { useEffect, useCallback } from 'react';
import { message } from 'antd';
import { PORTKEY_VERSION } from 'constants/auth';
import qs from 'query-string';
import { sleep } from '@portkey/utils';

export default function AppleAuth() {
  const handler = useCallback(() => {
    const { version, id_token } = qs.parse(location.search);

    const portkeyProvider = version === PORTKEY_VERSION ? window.Portkey : window.portkey;

    const response = {
      access_token: id_token,
    };
    // portkey change inpage name
    if (!portkeyProvider) message.error('Timeout, please download and install the Portkey did extension');

    portkeyProvider?.request({
      method: 'portkey_socialLogin',
      payload: {
        response,
      },
    });
  }, []);

  useEffect(() => {
    sleep(1000).then(async () => {
      const { version } = qs.parse(location.search);
      const portkeyProvider = version === PORTKEY_VERSION ? window.Portkey : window.portkey;
      if (!portkeyProvider) {
        await sleep(2000);
        handler();
        return;
      }
      handler();
    });
  }, [handler]);

  return <div></div>;
}
