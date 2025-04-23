import CommonImage from 'components/CommonImage';
import { INITIAL, variantRightToLeft, VIEWPORT, WHILE_IN_VIEW } from 'constants/motion';
import { motion } from 'framer-motion';
import styles from './styles.module.less';
import clsx from 'clsx';
export type DataFormat = {
  icon: any;
  description: string;
};
export default function IntroductionSection({
  title,
  contentData,
  icon,
}: {
  title: string;
  contentData: DataFormat[];
  icon: any;
}) {
  return (
    <motion.div
      variants={variantRightToLeft(1.5)}
      initial={INITIAL}
      whileInView={WHILE_IN_VIEW}
      viewport={VIEWPORT}
      className={styles.introContainer}>
      <div className={clsx('flex-column-start', styles.titleAndContentWrapper)}>
        <span className={styles.introTitle}>{title}</span>
        {contentData.map((item, index) => {
          return (
            <div
              key={index + item.description}
              className={clsx([
                'flex-row-center-center',
                styles.introDataContainer,
                index === 0 && styles.marginTop32,
              ])}>
              <CommonImage src={item.icon} className={styles.miniIcon} />
              <span className={styles.introContent}>{item.description}</span>
            </div>
          );
        })}
      </div>
      <CommonImage src={icon} className={styles.largeIcon} />
    </motion.div>
  );
}
