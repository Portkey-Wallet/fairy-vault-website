import clsx from 'clsx';
import styles from './styles.module.less';
import SecurityIntroductionItem from './SecurityIntroductionItem';
import { Key, Lock, Database } from 'assets/images';
import { variantLeftToRight, variantOpacity, variantRightToLeft } from 'constants/motion';
import FAQCard from './FAQItem';
const faqs = [
  {
    question: 'What is an EOA wallet and why do I need one for aelf?',
    answer:
      'An Externally Owned Account (EOA) wallet gives you full control of your private keys and assets on the aelf blockchain. Unlike custodial wallets, FairyVault ensures you maintain complete ownership of your crypto assets while easily interacting with the aelf ecosystem.',
  },
  {
    question: 'Is FairyVault secure?',
    answer:
      'Absolutely. FairyVault employs industry-leading security measures including biometric authentication (Face ID/fingerprint), PIN protection, and encrypted storage. Your private keys never leave your device, and you can create secure backups using seed phrases or encrypted cloud storage.',
  },
  {
    question: 'How do I get started with FairyVault?',
    answer:
      'Getting started is simple: 1) Download FairyVault from the App Store or Google Play, 2) Create a new wallet or import an existing one, 3) Set up your security preferences, and 4) Start exploring the aelf ecosystem. The entire process takes just minutes.',
  },
  {
    question: 'Can I connect FairyVault to dApps on aelf?',
    answer:
      'Yes! FairyVault is designed to seamlessly connect with decentralized applications (dApps) on the aelf blockchain. Simply open the app, navigate to the dApp browser, and connect with your favorite aelf-based games, marketplaces, and DeFi protocols with a single tap.',
  },
];
export default function SecurityScreenSection({ securityRef }: { securityRef: React.RefObject<HTMLDivElement> }) {
  return (
    <section id="security" className={clsx([styles.securitySection])} ref={securityRef}>
      <div className={clsx([styles.securitySectionWrapper])}>
        <h1 className={styles.securityTitle}>Your security is our priority</h1>
        <div className={clsx('flex-row', 'gap-24', styles.introContainer, styles.scrollableContainer)}>
          <SecurityIntroductionItem
            iconName={Key}
            content={'Complete user control over assets'}
            variants={variantLeftToRight(1.5)}
          />
          <SecurityIntroductionItem
            iconName={Lock}
            content={'Advanced encryption protocols'}
            variants={variantOpacity(1)}
          />
          <SecurityIntroductionItem
            iconName={Database}
            content={'Secure backup solutions'}
            variants={variantRightToLeft(1.5)}
          />
        </div>
        <h1 className={styles.securityTitle}>FAQ</h1>
        <div className={clsx('flex-column', 'gap-32', styles.faqs)}>
          {faqs.map((faq, index) => (
            <FAQCard key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
