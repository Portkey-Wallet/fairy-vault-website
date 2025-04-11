import CommonImage from "components/CommonImage";
import { iPhone } from 'assets/images';
import styles from './styles.module.less';
import { motion } from 'framer-motion';
import { INITIAL, variantOpacity, VIEWPORT, WHILE_IN_VIEW } from "constants/motion";
import clsx from "clsx";
import {
  appstoreAndroid,
  appstoreIos,
} from 'assets/images';
import CustomSvg from "components/CustomSvg";
export default function DownloadSection() {
  return <section>
    <motion.div className={clsx(styles.downloadContainer, 'flex-column')} initial={INITIAL}
          whileInView={WHILE_IN_VIEW}
          viewport={VIEWPORT}
          variants={variantOpacity(1)}>
      <h1 className={styles.downloadTitle}>Get started with FairyVault Your gateway to the future of Web3.</h1>
      <div className={clsx('flex-row-center-center', 'gap-24')}>
        <div
          className={clsx('flex-row-center-center', styles.containerAppStore)}
          onClick={() => {
          }}>
          <div className="flex-row-center-center">
            <CommonImage src={appstoreIos} className={styles.appStoreIcon} />
            <span className={styles.appStoreText}>Download for iOS</span>
          </div>
        </div>
        <div className={styles.qrCodeContainer}>
          <CustomSvg type="qrCode" className={styles.qrCode}/>
        </div>
      </div>
      <div className={clsx('flex-row-center-center', 'gap-24', 'margin-top-24')}>
        <div
          className={clsx('flex-row-center-center', styles.containerAppStore)}
          onClick={() => {
          }}>
          <CommonImage src={appstoreAndroid} className={styles.appStoreIcon} />
          <div className={styles.appStoreText}>Download for Android</div>
        </div>
        <div className={styles.qrCodeContainer}>
          <CustomSvg type="qrCode" className={styles.qrCode}/>
        </div>
      </div>
      <CommonImage src={iPhone} layout="intrinsic" className={styles.iphoneBg}/>
      <CustomSvg type="downloadCoin" className={styles.downloadCoin}/>
    </motion.div>
  </section>;
}