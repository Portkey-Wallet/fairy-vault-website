import clsx from 'clsx';
import { DEVICE_TYPE } from 'constants/enum';
import { DownloadGroupFooterForHomePage } from 'page-components/DownloadGroupForHomePage';
import styles from './styles.module.less';

interface IBottomDownloadSectionProps {
  type: DEVICE_TYPE;
  chromeStoreUrl: string;
  iosStoreUrl: string;
  androidStoreUrl: string;
  apkS3Url: string;
}

export default function BottomDownloadSection({
  type,
  chromeStoreUrl,
  iosStoreUrl,
  androidStoreUrl,
  apkS3Url,
}: IBottomDownloadSectionProps) {
  return (
    <section className={clsx(['section-container', 'flex-column-center', styles.bottomDownloadSectionWrap])}>
      <div className={clsx(['page-container', styles.bottomDownloadSection])}>
        <div className={styles.sectionTitle}>Download Portkey now!</div>
        <DownloadGroupFooterForHomePage
          className={styles.homeBottomDownloadGroup}
          downloadForOthersBtnClassName={styles.homeBottomDownloadForOthersBtn}
          type={type}
          chromeStoreUrl={chromeStoreUrl}
          iosStoreUrl={iosStoreUrl}
          androidStoreUrl={androidStoreUrl}
          apkS3Url={apkS3Url}
        />
      </div>
    </section>
  );
}
