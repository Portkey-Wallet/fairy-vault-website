import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.less';
import clsx from 'clsx';

export default function FAQCard({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCloseComplete, setIsCloseComplete] = useState(true);

  return (
    <div className={styles.faqCard}>
      <div className={styles.faqHeader}>
        <h3>{question}</h3>
        <button
          className={clsx(styles.toggleButton, { [styles.open]: isOpen })}
          onClick={() => {
            if (!isOpen) {
              setIsCloseComplete(false);
            }
            setIsOpen((prev) => !prev);
          }}
        >
          <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
        </button>
      </div>

      <motion.div
        className={clsx(styles.faqAnswer, {
          [styles.displayNone]: isCloseComplete,
        })}
        initial={{ height: 0, opacity: 0, paddingTop: 0 }}
        animate={isOpen ? { height: 76, opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onAnimationComplete={(a: { height: any}) => {
          if(a.height === 0) {
            setIsCloseComplete(true);
          } else {
            setIsCloseComplete(false);
          }
        }}
        >
        <p>{answer}</p>
      </motion.div>
    </div>
  );
}