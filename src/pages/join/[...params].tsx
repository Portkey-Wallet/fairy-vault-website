import React, { useMemo } from 'react';
import SocialTem from './components/SocialTem';
import { useRouter } from 'next/router';
import { ISocialLogin } from 'types/socialLogin';
import { NetworkType } from 'types/network';

export default function ExtensionLogin() {
  const router = useRouter();
  const { params, version } = router.query;
  const socialInfo = useMemo(() => {
    if (params instanceof Array) {
      return params as [NetworkType, ISocialLogin];
    }
  }, [params]);

  return (
    <>
      {socialInfo && (
        <SocialTem version={version as string} network={socialInfo?.[0]} loginType={socialInfo?.[1] as ISocialLogin} />
      )}
    </>
  );
}
