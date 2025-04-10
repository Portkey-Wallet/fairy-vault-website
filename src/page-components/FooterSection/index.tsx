import CommonImage from "components/CommonImage";
import styles from './styles.module.less';
import clsx from "clsx";

export default function FooterSection() {
  return <section style={{marginTop: 160, marginBottom: 80}} className="section-container-80">
    <div className="flex-row-start-between">
      <div className="flex-column gap-78">
        <CommonImage  src={'logo.svg'} style={{ width: 180, height: 54, cursor: 'pointer' }}
          alt="portkeyLogo"/>
        <span className={styles.footerCopyright}>© 2025 FairyVault</span>
      </div>
      <div className="flex-row-start">
        <div className={clsx("flex-column gap-24", styles.width200)}>
          <span className={styles.footerTitle}>Support</span>
          <a
            href="https://form.fairyvault.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerSubtitle}
          >
            Contact us
          </a>        
        </div>
        <div className={clsx("flex-column gap-24", styles.width200)}>
          <span className={styles.footerTitle}>Legal</span>
          <a
            href="/terms-of-service"
            className={styles.footerSubtitle}
          >
            Terms of service
          </a> 
          <a
            href="/privacy-policy"
            className={styles.footerSubtitle}
          >
            Privacy policy
          </a>           
        </div>
      </div>
    </div>
  </section>;
}