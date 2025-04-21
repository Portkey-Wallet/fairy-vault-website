import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.less';
import clsx from 'clsx';
import CustomSvg from 'components/CustomSvg';

export default function FAQCard({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCloseComplete, setIsCloseComplete] = useState(true);

  return (
    <div
      className={styles.faqCard}
      onClick={() => {
        if (!isOpen) {
          setIsCloseComplete(false);
        }
        setIsOpen((prev) => !prev);
      }}>
      <div className={styles.faqHeader}>
        <h3>{question}</h3>
        <button
          className={clsx(styles.toggleButton, { [styles.open]: isOpen })}
          onClick={() => {
            if (!isOpen) {
              setIsCloseComplete(false);
            }
            setIsOpen((prev) => !prev);
          }}>
          {/* <span className={styles.icon}>{isOpen ? '−' : '+'}</span> */}
          <CustomSvg className={styles.icon} type={isOpen ? 'remove' : 'add'} />
        </button>
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
