import { Button } from 'antd';
import CommonImage from 'components/CommonImage';
import { downloadData } from 'constants/homeData';
import styles from './styles.module.less';
import { TMP_APK_S3_DOWNLOAD } from 'constants/downloadPageData';

export default function ApkDownloadButton({ apkS3Url }: { apkS3Url: string }) {
  const apkInfo = downloadData.apk;

  return (
    <Button type="primary" className={styles.storeBtn}>
      <a href={apkS3Url || TMP_APK_S3_DOWNLOAD}>
        <CommonImage
          src={apkInfo.iconSrc}
          className={styles.storeBtnLogo}
          style={{ width: apkInfo.iconWidth, height: apkInfo.iconHeight }}
          alt={apkInfo.iconAlt}
          priority
        />
      </a>
    </Button>
  );
}
