import { Button } from 'antd';
import clsx from 'clsx';
import CommonImage from 'components/CommonImage';
import { downloadData } from 'constants/homeData';
import { useGoDownload } from 'hooks/useGoPageOrRefresh';
import styles from './styles.module.less';

export default function WebNotChromeDownloadButton() {
  const notChromeInfo = downloadData.notChrome;
  return (
    <Button type="primary" className={clsx([styles.otherStoreBtn, styles.storeBtn])} onClick={useGoDownload}>
      <CommonImage
        src={notChromeInfo.iconSrc}
        className={styles.storeBtnLogo}
        style={{ width: notChromeInfo.iconWidth, height: notChromeInfo.iconHeight }}
        alt={notChromeInfo.iconAlt}
        priority
      />
    </Button>
  );
}
