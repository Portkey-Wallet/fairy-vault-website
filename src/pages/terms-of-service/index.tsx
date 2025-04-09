import CommonImage from 'components/CommonImage';
import { termsOfServicePageData } from 'constants/termsOfSevicePageData';
import styles from './styles.module.less';

export default function TermsOfService() {
  const { pageTitle, pageUpdateTime, logo, content } = termsOfServicePageData;

  return (
    <>
      <main className={styles.main}>
        <div className={styles.titleWrap}>
          <CommonImage
            src={logo.src}
            className={styles.logoWrap}
            style={{ width: logo.width, height: logo.height }}
            alt={logo.alt}
            priority
            onClick={() => {
              window.location.href = '/';
            }}
          />
          <div className={styles.titleContent}>
            <span>{pageTitle}</span>
            <span>{pageUpdateTime}</span>
          </div>
        </div>

        <div className={styles.content}>
          {content.map((item, idx) =>
            item.isInnerHTML ? (
              <span key={idx} className={item.className} dangerouslySetInnerHTML={{ __html: item.content }} />
            ) : (
              <span key={idx} className={item.className}>
                {item.content}
              </span>
            ),
          )}
        </div>
      </main>
    </>
  );
}
