import { motion } from 'framer-motion';
import { fakeQRCode, androidQRCode } from 'assets/images';
import CommonImage from 'components/CommonImage';
import styles from './styles.module.less';
export default function QRCode({ isAndroid }: { isAndroid: boolean }) {
  return (
    <motion.div className={styles.popupQrCodeContainer}>
      <CommonImage src={isAndroid ? androidQRCode : fakeQRCode} className={styles.popupQrCode} layout="intrinsic" />
      <span className={styles.popupQrCodeText}>Scan to download</span>
    </motion.div>
  );
}
