'use client';
import { useEffect, useCallback, useState, useMemo } from 'react';
import styles from './styles.module.less';
import { Button } from 'antd';

export default function GoogleAuth() {
  const targetLocation = () => {
    if (location.href.includes('google-auth#')) {
      const split = location.href.split('google-auth#');
      if (split.length > 0) {
        return 'com.portkey.finance://oauthredirect?' + split[1];
      } else {
        return 'com.portkey.finance://oauthredirect';
      }
    } else {
      return 'com.portkey.finance://oauthredirect' + location.search;
    }
  };

  const openPortkey = useCallback(() => {
    location.href = targetLocation();
  }, [targetLocation]);

  useEffect(() => {
    setTimeout(() => {
      openPortkey();
    }, 500);
  }, [openPortkey]);

  const showTargetLocation = useCallback(() => {
    alert(targetLocation());
  }, [targetLocation]);

  return (
    <div className={styles.page}>
      <Button type="default" className={styles.button} onClick={showTargetLocation}>
        Show Target Location
      </Button>
      <Button type="primary" className={styles.button} onClick={openPortkey}>
        Open Portkey App
      </Button>
    </div>
  );
}
