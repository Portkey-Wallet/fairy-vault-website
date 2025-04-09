import clsx from 'clsx';
import { DEVELOPERS_URL, developInfoCardData } from 'constants/homeData';
import HomeTwoColumnsCard from 'page-components/HomeTwoColumnsCard';
import styles from './styles.module.less';
import { motion } from 'framer-motion';
import { INITIAL, variantDownToUp2, VIEWPORT, WHILE_IN_VIEW } from 'constants/motion';

export default function DevelopGuideSection() {
  function handleClick() {
    window.open(DEVELOPERS_URL, '_blank');
  }
  return (
    <motion.div initial={INITIAL} whileInView={WHILE_IN_VIEW} viewport={VIEWPORT}>
      <section className={clsx(['section-container', 'flex-column-center', styles.developGuideSection])}>
        <motion.div variants={variantDownToUp2(0)}>
          <div className={clsx(['page-container', styles.sectionTitle, styles.developGuideTitle])}>
            Portkey boasts a flexible infrastructure that suits your needs
          </div>
        </motion.div>
        <HomeTwoColumnsCard
          imgSrc={developInfoCardData.src}
          imgPosition={developInfoCardData.imgPosition}
          content={developInfoCardData.contents}
          buttonText="Build Now"
          buttonClick={handleClick}
          className={clsx([styles.text])}
          imageClassName={styles.card}
        />
      </section>
    </motion.div>
  );
}
