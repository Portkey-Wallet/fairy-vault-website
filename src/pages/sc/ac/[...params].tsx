'use client';
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import InviteBridge, { EvokePortkeyAppActionType } from 'page-components/InviteBridge';

export default function ScAc() {
  const router = useRouter();
  const { params } = router.query;
  const portkeyId = useMemo(() => {
    if (Array.isArray(params)) {
      return params?.[0];
    }
    return '';
  }, [params]);

  return (
    <InviteBridge
      title={'Start a Chat with'}
      id={portkeyId}
      action={EvokePortkeyAppActionType.ADD_CONTACT}
      btnText={'Open Chats in Portkey'}
    />
  );
}
