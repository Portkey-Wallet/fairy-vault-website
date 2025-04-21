import { motion } from 'framer-motion';
import styles from './styles.module.less';
import CommonImage from 'components/CommonImage';
import { INITIAL, VIEWPORT, WHILE_IN_VIEW } from 'constants/motion';
import { Variants } from 'framer-motion';

export default function SecurityIntroductionItem({
  iconName,
  content,
  variants,
}: {
  iconName: any;
  content: string;
  variants: Variants;
}) {
  return (
    <motion.div
      className={styles.SecurityIntroContainer}
      variants={variants}
      initial={INITIAL}
      whileInView={WHILE_IN_VIEW}
      viewport={VIEWPORT}>
      {/* <CustomSvg type={iconName} /> */}
      {/* <div style={{ width: '30%', height: '30%' }}> */}
      <CommonImage
        src={iconName}
        layout="intrinsic"
        style={{
          // transform: 'scale(0.5)',
          // transformOrigin: 'center',
          display: 'inline-block',
          width: 160,
          height: 160,
        }}
      />
      {/* </div> */}
      <span className={styles.SecurityIntroText}>{content}</span>
    </motion.div>
  );
}
