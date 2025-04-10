import { tickIcon } from 'assets/images';
import clsx from 'clsx';
import CommonImage from 'components/CommonImage';
import { DEVICE_TYPE } from 'constants/enum';
import { firstScreenData } from 'constants/homeData';
import { DownloadGroupHeaderForHomePage } from 'page-components/DownloadGroupForHomePage';
import RowDescription from 'page-components/RowDescription';
import styles from './styles.module.less';
import { motion } from 'framer-motion';
import {
  headerContainerBg,
  floatIcon1,
  floatIcon2,
  floatIcon3,
  verified,
  appstoreAndroid,
  appstoreIos,
  phoneContainer,
  eoaScreen1,
  eoaScreen2,
  eoaScreen3,
} from 'assets/images';
import Image from 'next/image';
import CommonButton from 'components/CommonButton';
import { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';

export default function FirstScreenSection({
  type,
  focusImg,
  chromeStoreUrl,
  iosStoreUrl,
  androidStoreUrl,
  apkS3Url,
}: {
  type: DEVICE_TYPE;
  focusImg: string;
  chromeStoreUrl: string;
  iosStoreUrl: string;
  androidStoreUrl: string;
  apkS3Url: string;
}) {
  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    const debouncedScroll = throttle(handleScroll, 50);
    window.addEventListener('scroll', debouncedScroll);
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, []);

  return (
    <section className={clsx(['section-container', styles.firstScreenSectionWrap])}>
      <div className={styles.headerContainer}>
        <div>
          <div className={clsx('flex-row-center-center', styles.containerKeywords)}>
            <CommonImage src={verified} className={styles.iconVerify} />
            <span className={styles.headerKeywords}>Magical,Secure,Effortless</span>
          </div>
        </div>
        <h1 className={styles.headerTitle}>Your ultimate gateway to Web3</h1>
        <span className={styles.headerSubtitle}>
          With FairyVault, you gain complete control over your aelf blockchain assets, ensuring top-level security while
          easily navigating the decentralised world.
        </span>
        <div className={clsx('flex-row-center-center', 'margin-top-64', 'gap-24')}>
          <div
            className={clsx('flex-row-center-center', styles.containerAppStore)}
            onClick={() => {
            }}>
            <div className="flex-row-center-center">
              <CommonImage src={appstoreIos} className={styles.appStoreIcon} />
              <span className={styles.appStoreText}>Download for iOS</span>
            </div>
          </div>
          <div
            className={clsx('flex-row-center-center', styles.containerAppStore)}
            onClick={() => {
            }}>
            <CommonImage src={appstoreAndroid} className={styles.appStoreIcon} />
            <div className={styles.appStoreText}>Download for Android</div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.phoneChangeContainer)}>
        <motion.div
          style={{
            width: 480,
            height: 976,
            top: 0,
            position: 'sticky',
          }}
          animate={{
            x: scrollY / 2 > 240 ? 240 : scrollY / 2,
            scale: 1 - scrollY / 1000 < 0.5 ? 0.5 : 1 - scrollY / 1000,
          }}
          transition={{ type: 'spring', stiffness: 50 }}>
          <CommonImage
            src={phoneContainer}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <CommonImage
            src={eoaScreen3}
            imageCls={styles.imgRadius}
            style={{
              width: 430,
              height: 930,
              top: 23,
              left: 25,
              borderRadius: 30,
              position: 'absolute',
            }}
          />
        </motion.div>
      </div>
      <CommonImage src={headerContainerBg} className={styles.headerContainerBg} />
      <CommonImage src={floatIcon1} className={clsx(styles.floatIcon1, styles.iconFloating)} />
      <CommonImage src={floatIcon2} className={clsx(styles.floatIcon2, styles.iconFloating)} />
      <CommonImage src={floatIcon3} className={clsx(styles.floatIcon3, styles.iconFloating)} />
    </section>
  );
}
