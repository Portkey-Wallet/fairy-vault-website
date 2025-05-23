import CommonImage from 'components/CommonImage';
import { iPhone } from 'assets/images';
import styles from './styles.module.less';
import { motion } from 'framer-motion';
import { INITIAL, variantOpacity, VIEWPORT, WHILE_IN_VIEW } from 'constants/motion';
import clsx from 'clsx';
import { appstoreAndroid, appstoreIos } from 'assets/images';
import CustomSvg from 'components/CustomSvg';
import { useEffect, useState } from 'react';
import QRCode from './QRCode';
export default function DownloadSection() {
  const [showAppleQRCode, setShowAppleQRCode] = useState(false);
  const [showAndroidQRCode, setShowAndroidQRCode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobileUserAgent = /iPhone|iPad|iPod|Android/i.test(userAgent);
    const isMobileScreen = window.matchMedia('(max-width: 1023px)').matches;
    console.log('userAgent', userAgent);
    setIsMobile(isMobileUserAgent || isMobileScreen);
  }, []);
  // const handleToggleAppleQRCode = () => {
  //   setShowAppleQRCode(true);
  // };
  // const handleToggleAndroidQRCode = () => {
  //   setShowAndroidQRCode(true);
  //   console.log('wfs 3');
  // };
  useEffect(() => {
    // const handleClickOutside = (event: MouseEvent) => {
    //   const modal = document.querySelector(`.${styles.qrCodePopup}`);
    //   if ((showAppleQRCode || showAndroidQRCode) && modal && !modal.contains(event.target as Node)) {
    //     setShowAndroidQRCode(false);
    //     setShowAppleQRCode(false);
    //   }
    // };

    const handleScroll = () => {
      setShowAndroidQRCode(false);
      setShowAppleQRCode(false);
    };

    if (showAndroidQRCode || showAppleQRCode) {
      // document.addEventListener('click', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      // document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showAppleQRCode, showAndroidQRCode]);

  return (
    <section id="download" className={styles.downloadSection}>
      <motion.div
        className={clsx(styles.downloadContainer, 'flex-column')}
        initial={INITIAL}
        whileInView={WHILE_IN_VIEW}
        viewport={VIEWPORT}
        variants={variantOpacity(1)}>
        {/* <div className={styles.downloadSectionContainer}> */}
        <div className={styles.downloadContainerLeft}>
          <h1 className={styles.downloadTitle}>
            Get started with FairyVault <br />
            Your gateway to the future of Web3.
          </h1>
          <h1 className={styles.downloadTitleMobile1}>Get started with FairyVault</h1>
          <h1 className={styles.downloadTitleMobile2}>Your gateway to the future of Web3.</h1>
          <div className={clsx(styles.buttonContainer)}>
            <div
              className={clsx('flex-row-center-center', styles.containerAppStore)}
              onClick={() => {
                window.open('https://apps.apple.com/app/fairyvault/id6741625830', '_blank');
              }}>
              {/* <div className="flex-row-center-center"> */}
              <CommonImage src={appstoreIos} className={styles.appStoreIcon} />
              <span className={styles.appStoreText}>Download for iOS</span>
              {/* </div> */}
            </div>
            <div
              className={styles.qrCodeContainer}
              onMouseEnter={() => setShowAppleQRCode(true)}
              onMouseLeave={() => setShowAppleQRCode(false)}>
              <CustomSvg type="qrCode" className={styles.qrCode} />
              {!isMobile && showAppleQRCode && (
                <div className={styles.qrCodePopup}>
                  <QRCode isAndroid={false} />
                </div>
              )}
            </div>
          </div>
          <div className={clsx(styles.buttonContainer2)}>
            <div
              className={clsx('flex-row-center-center', styles.containerAppStore)}
              onClick={() => {
                window.open('https://play.google.com/store/apps/details?id=com.portkey.fairyvault', '_blank');
              }}>
              <CommonImage src={appstoreAndroid} className={styles.appStoreIcon} />
              <div className={styles.appStoreText}>Download for Android</div>
            </div>
            <div
              className={styles.qrCodeContainer}
              onMouseEnter={() => {
                setShowAndroidQRCode(true);
              }}
              onMouseLeave={() => {
                setShowAndroidQRCode(false);
              }}>
              <CustomSvg type="qrCode" className={styles.qrCode} />
              {!isMobile && showAndroidQRCode && (
                <div className={styles.qrCodePopup}>
                  <QRCode isAndroid />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.showQRCodeContainer}>
          {isMobile && (showAndroidQRCode || showAppleQRCode) && (
            // <div className={styles.qrCodeModal}>
            <div className={styles.qrCodePopup}>
              <QRCode isAndroid={showAndroidQRCode} />
            </div>
            // </div>
          )}
        </div>
        <div className={styles.downloadContainerRight}>
          <CommonImage src={iPhone} layout="intrinsic" className={styles.iphoneBg} />
          <CustomSvg type="downloadCoin" className={styles.downloadCoin} />
        </div>
        {/* <QRCode isAndroid={false} style={{ visibility: 'hidden' }} /> */}
        {/* </div> */}
      </motion.div>
    </section>
  );
}
{/* <div className="a0">
  <div className="a1">
    <div>
      <div>
        <div className='a4'>
          <div className='a3'></div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
  <div className="a2"> </div>
</div>; */}
