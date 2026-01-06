import clsx from 'clsx';
import { DEVICE_TYPE } from 'constants/enum';
import AndroidDownloadButton from 'page-components/DownloadButtons/AndroidDownloadButton';
import ApkDownloadButton from 'page-components/DownloadButtons/ApkDownloadButton';
import IOSDownloadButton from 'page-components/DownloadButtons/IOSDownloadButton';
import QRCodeDownloadButton from 'page-components/DownloadButtons/QRCodeDownloadButton';
import WebChromeDownloadButton from 'page-components/DownloadButtons/WebChromeDownloadButton';
import { CSSProperties } from 'react';
import styles from './styles.module.less';
import { IDownloadResource } from 'types/download';
import { s3Url } from 'constants/network';

export interface DownloadButtonGroupProps {
  className?: string;
  style?: CSSProperties;
  type: DEVICE_TYPE;
  resource: IDownloadResource;
}

function IOSButtonGroup({ storeUrl, qrCodeImg }: { storeUrl: string; qrCodeImg: string }) {
  return (
    <>
      <IOSDownloadButton storeUrl={storeUrl} />
      {qrCodeImg && <QRCodeDownloadButton qrCodeImg={s3Url + qrCodeImg} />}
    </>
  );
}

function AndroidButtonGroup({
  apkS3Url,
  googlePlayUrl,
  qrCodeImg,
}: {
  apkS3Url: string;
  googlePlayUrl: string;
  qrCodeImg: string;
}) {
  return (
    <div className={styles.AndroidBtnGroup}>
      <div className={styles.btnGroup}>
        <AndroidDownloadButton storeUrl={googlePlayUrl} />
        <div className={styles.gap} />
        {apkS3Url && <ApkDownloadButton apkS3Url={apkS3Url} />}
      </div>
      {qrCodeImg && <QRCodeDownloadButton qrCodeImg={s3Url + qrCodeImg} />}
    </div>
  );
}

export default function DownloadGroupForDownloadPage(props: DownloadButtonGroupProps) {
  const { className, style, type, resource } = props;

  return (
    <div className={clsx([styles.DownloadBtnGroup, className])} style={style}>
      {type === DEVICE_TYPE.WebChrome && <WebChromeDownloadButton storeUrl={resource?.extensionDownloadUrl || ''} />}
      {type === DEVICE_TYPE.IOS && (
        <IOSButtonGroup
          storeUrl={resource?.iosDownloadUrl || ''}
          qrCodeImg={resource?.iosQRCode?.filename_disk || ''}
        />
      )}
      {type === DEVICE_TYPE.Android && (
        <AndroidButtonGroup
          apkS3Url={resource?.apkDownloadUrl || ''}
          googlePlayUrl={resource?.androidDownloadUrl || ''}
          qrCodeImg={resource?.androidQRCode?.filename_disk || ''}
        />
      )}
    </div>
  );
}
