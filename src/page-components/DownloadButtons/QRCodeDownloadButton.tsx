import { Button, Popover } from 'antd';
import CommonImage from 'components/CommonImage';
import { downloadData } from 'constants/homeData';
import styles from './styles.module.less';

export default function QRCodeDownloadButton({ qrCodeImg }: { qrCodeImg: string }) {
  const qrCodeInfo = downloadData.qrCode;
  const popoverContent = () => {
    return (
      <div>
        <CommonImage
          src={qrCodeImg}
          style={{ width: qrCodeInfo.width, height: qrCodeInfo.height }}
          alt={qrCodeInfo.alt}
          priority
        />
        <div className={styles.scanText}>Scan to Download</div>
      </div>
    );
  };
  return (
    <Popover
      placement="right"
      content={popoverContent}
      trigger={['click', 'hover']}
      overlayClassName={styles.qrCodePopover}>
      <Button type="ghost" className={styles.qrCodeBtn}>
        <CommonImage
          src={qrCodeInfo.iconSrc}
          width={120}
          height={120}
          className={styles.qrCodeBtnLogo}
          style={{ width: qrCodeInfo.iconWidth, height: qrCodeInfo.iconHeight }}
          alt={qrCodeInfo.iconAlt}
          priority
        />
      </Button>
    </Popover>
  );
}
