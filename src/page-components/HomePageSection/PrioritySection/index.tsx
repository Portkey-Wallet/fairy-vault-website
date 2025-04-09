import clsx from 'clsx';
import { priorityCardData } from 'constants/homeData';
import HomePriorityCard from 'page-components/HomePriorityCard';
import styles from './styles.module.less';
import { motion } from 'framer-motion';
import { INITIAL, variantDownToUp, VIEWPORT, WHILE_IN_VIEW } from 'constants/motion';

export default function PrioritySection() {
  return (
    <motion.div initial={INITIAL} whileInView={WHILE_IN_VIEW} viewport={VIEWPORT}>
      <section className={clsx(['section-container', 'flex-column-center', styles.prioritySection])}>
        <div className={clsx(['page-container', 'flex-column-center'])}>
          <motion.div variants={variantDownToUp(0)}>
            <div className={styles.sectionTitle}>Portkey is your gateway to migrate from Web2 to Web3</div>
            <div className={styles.sectionSubTitle}>{`It's simple, secure and free`}</div>
          </motion.div>
          <motion.div variants={variantDownToUp(1)}>
            <div className={styles.prioritySectionCard}>
              {priorityCardData?.map((item, idx) => {
                return <HomePriorityCard key={'homePriorityIcon' + idx} item={item} className={styles.card} />;
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
