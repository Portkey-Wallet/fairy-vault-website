import CommonImage from 'components/CommonImage';
import styles from './styles.module.less';
import clsx from 'clsx';

export default function FooterSection() {
  return (
    <section className={styles.footerSection}>
      <div className={styles.footerFirstPart}>
        <div className="flex-column gap-78">
          <CommonImage src={'logo.svg'} style={{ width: 180, height: 54, cursor: 'pointer' }} alt="portkeyLogo" />
        </div>
        <div className={clsx('flex-row-start', styles.width100Percent)}>
          <div className={clsx('flex-column gap-24', styles.width200)}>
            <span className={styles.footerTitle}>Support</span>
            <a
              href="https://form.fairyvault.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSubtitle}>
              Contact us
            </a>
          </div>
          <div className={clsx('flex-column gap-24', styles.width200)}>
            <span className={styles.footerTitle}>Legal</span>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/terms-of-service" className={styles.footerSubtitle}>
              Terms of service
            </a>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/privacy-policy" className={styles.footerSubtitle}>
              Privacy policy
            </a>
          </div>
        </div>
      </div>
      <span className={styles.footerCopyright}>© 2025 FairyVault</span>
    </section>
  );
}
