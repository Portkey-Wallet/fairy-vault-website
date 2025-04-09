import clsx from 'clsx';
import { twoColInfoCardData } from 'constants/homeData';
import HomeTwoColumnsCard from 'page-components/HomeTwoColumnsCard';
import styles from './styles.module.less';
import { motion } from 'framer-motion';
import { INITIAL, variantDownToUp, VIEWPORT, WHILE_IN_VIEW } from 'constants/motion';

export default function FunctionsSection() {
  return (
    <motion.div initial={INITIAL} whileInView={WHILE_IN_VIEW} viewport={VIEWPORT}>
      <section className={clsx(['section-container', 'flex-column-center', styles.functionSection])}>
        <motion.div variants={variantDownToUp(0)}>
          <div className={clsx(['page-container', styles.sectionTitle, styles.functionTitle])}>
            {`Enjoy Portkey's Web3 live & upcoming features within a safe Web2 environment`}
          </div>
        </motion.div>
        {twoColInfoCardData.map((item, idx) => {
          return (
            <HomeTwoColumnsCard
              className={styles.functionItem}
              key={'twoColInfo' + idx}
              imgSrc={item.src}
              imgPosition={item.imgPosition}
              title={item.title}
              content={item.contents}
              imageClassName={styles.image}
            />
          );
        })}
      </section>
    </motion.div>
  );
}
