'use client';
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import InviteBridge, { EvokePortkeyAppActionType } from 'page-components/InviteBridge';

export default function ScAc() {
  const router = useRouter();
  const { params } = router.query;
  const groupId = useMemo(() => {
    if (Array.isArray(params)) {
      return params?.[0];
    }
    return '';
  }, [params]);

  return (
    <InviteBridge
      title={'Portkey Group'}
      id={groupId}
      action={EvokePortkeyAppActionType.ADD_GROUP}
      btnText={'Join Group'}
    />
  );
}
