import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.less';
import clsx from 'clsx';
import CustomSvg from 'components/CustomSvg';

export default function FAQCard({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  // const [isOpen, setIsOpen] = useState(false);
  const [isCloseComplete, setIsCloseComplete] = useState(true);

  return (
    <div
      className={styles.faqCard}
      onClick={() => {
        if (!isOpen) {
          setIsCloseComplete(false);
        }
        // setIsOpen((prev) => !prev);
        onToggle();
      }}>
      <div className={styles.faqHeader}>
        <h3 className={styles.question}>{question}</h3>
        <div className={clsx(styles.toggleButton, { [styles.open]: isOpen })}>
          {/* <span className={styles.icon}>{isOpen ? '−' : '+'}</span> */}
          <CustomSvg className={styles.icon} type={isOpen ? 'remove' : 'add'} />
        </div>
      </div>

      <motion.div
        className={clsx(styles.faqAnswer, {
          [styles.displayNone]: isCloseComplete,
        })}
        initial={{ height: 0, opacity: 0, marginTop: 0 }}
        animate={isOpen ? { height: 'auto', opacity: 1, marginTop: 32 } : { height: 0, opacity: 0, marginTop: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onAnimationComplete={(a: { height: any }) => {
          if (a.height === 0) {
            setIsCloseComplete(true);
          } else {
            setIsCloseComplete(false);
          }
        }}>
        {/* <div className={styles.height32} /> */}
        <p style={{ marginBottom: 0 }}>{answer}</p>
      </motion.div>
    </div>
  );
}
