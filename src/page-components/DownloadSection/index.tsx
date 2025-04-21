import CommonImage from 'components/CommonImage';
import { iPhone } from 'assets/images';
import styles from './styles.module.less';
import { motion } from 'framer-motion';
import { INITIAL, variantOpacity, VIEWPORT, WHILE_IN_VIEW } from 'constants/motion';
import clsx from 'clsx';
import { appstoreAndroid, appstoreIos } from 'assets/images';
import CustomSvg from 'components/CustomSvg';
import { useState } from 'react';
import QRCode from './QRCode';
export default function DownloadSection() {
  const [showAppleQRCode, setShowAppleQRCode] = useState(false);
  const [showAndroidQRCode, setShowAndroidQRCode] = useState(false);

  return (
    <section id="download">
      <motion.div
        className={clsx(styles.downloadContainer, 'flex-column')}
        initial={INITIAL}
        whileInView={WHILE_IN_VIEW}
        viewport={VIEWPORT}
        variants={variantOpacity(1)}>
        <h1 className={styles.downloadTitle}>Get started with FairyVault Your gateway to the future of Web3.</h1>
        <div className={clsx('flex-row-center-center', 'gap-24')}>
          <div className={clsx('flex-row-center-center', styles.containerAppStore)} onClick={() => {}}>
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
            {showAppleQRCode && (
              <div className={styles.qrCodePopup}>
                <QRCode isAndroid={false} />
              </div>
            )}
          </div>
        </div>
        <div className={clsx('flex-row-center-center', 'gap-24', 'margin-top-24')}>
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
            onMouseEnter={() => setShowAndroidQRCode(true)}
            onMouseLeave={() => setShowAndroidQRCode(false)}>
            <CustomSvg type="qrCode" className={styles.qrCode} />
            {showAndroidQRCode && (
              <div className={styles.qrCodePopup}>
                <QRCode isAndroid />
              </div>
            )}
          </div>
        </div>
        <CommonImage src={iPhone} layout="intrinsic" className={styles.iphoneBg} />
        <CustomSvg type="downloadCoin" className={styles.downloadCoin} />
      </motion.div>
    </section>
  );
}
