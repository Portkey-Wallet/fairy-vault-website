import { motion, MotionStyle } from 'framer-motion';
import { appleQRCode, androidQRCode } from 'assets/images';
import CommonImage from 'components/CommonImage';
import styles from './styles.module.less';
export default function QRCode({ isAndroid, style }: { isAndroid: boolean; style?: MotionStyle }) {
  return (
    <motion.div className={styles.popupQrCodeContainer} style={style}>
      <CommonImage src={isAndroid ? androidQRCode : appleQRCode} className={styles.popupQrCode} layout="intrinsic" />
      <span className={styles.popupQrCodeText}>Scan to download</span>
    </motion.div>
  );
}
