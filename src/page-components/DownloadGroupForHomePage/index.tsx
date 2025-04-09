import clsx from 'clsx';
import { DEVICE_TYPE } from 'constants/enum';
import AndroidDownloadButton from 'page-components/DownloadButtons/AndroidDownloadButton';
import IOSDownloadButton from 'page-components/DownloadButtons/IOSDownloadButton';
import WebChromeDownloadButton from 'page-components/DownloadButtons/WebChromeDownloadButton';
import WebNotChromeDownloadButton from 'page-components/DownloadButtons/WebNotChromeDownloadButton';
import { CSSProperties, useCallback } from 'react';
import styles from './styles.module.less';
import ApkDownloadButton from 'page-components/DownloadButtons/ApkDownloadButton';
import CommonImage from 'components/CommonImage';
import { phoneDevice } from 'assets/images';
import { pcDevice } from 'assets/images';
import { Popover } from 'antd';
import { openWithBlank } from 'utils/router';

export interface DownloadButtonGroupProps {
  className?: string;
  style?: CSSProperties;
  type: DEVICE_TYPE;
  downloadForOthersBtnClassName?: string;
  chromeStoreUrl: string;
  iosStoreUrl: string;
  androidStoreUrl: string;
  apkS3Url: string;
}

function MobileAppButton({
  iosStoreUrl,
  androidStoreUrl,
  apkS3Url,
}: {
  iosStoreUrl: string;
  androidStoreUrl: string;
  apkS3Url: string;
}) {
  const popoverContent = () => {
    return (
      <div className={styles.MobileAppButtonRightSection}>
        <IOSDownloadButton storeUrl={iosStoreUrl} />
        <AndroidDownloadButton storeUrl={androidStoreUrl} />
        <ApkDownloadButton apkS3Url={apkS3Url} />
      </div>
    );
  };
  return (
    <Popover placement="bottomRight" content={popoverContent} trigger={['click']}>
      <div className={styles.HomeButtonWrap}>
        <CommonImage
          src={phoneDevice}
          style={{
            width: 28,
            height: 28,
          }}
          priority
          objectFit="contain"
        />
        <div className={styles.rightWrap}>
          <div className={styles.topTitle}>Download</div>
          <div className={styles.blank} />
          <div className={styles.deviceTitle}>Mobile App</div>
        </div>
      </div>
    </Popover>
  );
}

function PCAppButton({ chromeStoreUrl }: { chromeStoreUrl: string }) {
  const goChromeStore = useCallback(() => {
    openWithBlank(chromeStoreUrl);
  }, [chromeStoreUrl]);

  return (
    <div className={styles.HomeButtonWrap} onClick={goChromeStore}>
      <CommonImage
        src={pcDevice}
        style={{
          width: 28,
          height: 28,
        }}
        priority
        objectFit="contain"
      />
      <div className={styles.rightWrap}>
        <div className={styles.topTitle}>Download</div>
        <div className={styles.blank} />
        <div className={styles.deviceTitle}>Extension</div>
      </div>
    </div>
  );
}

function WebChromeButtonGroup({ chromeStoreUrl, iosStoreUrl, androidStoreUrl, apkS3Url }: Record<string, string>) {
  return (
    <>
      <MobileAppButton iosStoreUrl={iosStoreUrl} androidStoreUrl={androidStoreUrl} apkS3Url={apkS3Url} />
      <PCAppButton chromeStoreUrl={chromeStoreUrl} />
    </>
  );
}

export function DownloadGroupHeaderForHomePage(props: DownloadButtonGroupProps) {
  const { className, style, type, chromeStoreUrl, iosStoreUrl, androidStoreUrl, apkS3Url } = props;

  return (
    <div className={clsx([styles.DownloadBtnGroup, className])} style={style}>
      {type === DEVICE_TYPE.WebChrome && (
        <WebChromeButtonGroup
          chromeStoreUrl={chromeStoreUrl}
          iosStoreUrl={iosStoreUrl}
          androidStoreUrl={androidStoreUrl}
          apkS3Url={apkS3Url}
        />
      )}
      {type === DEVICE_TYPE.WebNotChrome && <WebNotChromeDownloadButton />}
      {type === DEVICE_TYPE.IOS && <IOSDownloadButton storeUrl={iosStoreUrl} />}
      {type === DEVICE_TYPE.Android && (
        <>
          <AndroidDownloadButton storeUrl={androidStoreUrl} />
          <ApkDownloadButton apkS3Url={apkS3Url} />
        </>
      )}
    </div>
  );
}

export function DownloadGroupFooterForHomePage(props: DownloadButtonGroupProps) {
  const { className, style, type, chromeStoreUrl, iosStoreUrl, androidStoreUrl, apkS3Url } = props;

  return (
    <div className={clsx([styles.DownloadBtnGroup, className])} style={style}>
      {type === DEVICE_TYPE.WebChrome && (
        <>
          <IOSDownloadButton storeUrl={iosStoreUrl} />
          <WebChromeDownloadButton storeUrl={chromeStoreUrl} />
          <ApkDownloadButton apkS3Url={apkS3Url} />
          <AndroidDownloadButton storeUrl={androidStoreUrl} />
        </>
      )}
      {type === DEVICE_TYPE.WebNotChrome && <WebNotChromeDownloadButton />}
      {type === DEVICE_TYPE.IOS && <IOSDownloadButton storeUrl={iosStoreUrl} />}
      {type === DEVICE_TYPE.Android && (
        <>
          <AndroidDownloadButton storeUrl={androidStoreUrl} />
          <ApkDownloadButton apkS3Url={apkS3Url} />
        </>
      )}
    </div>
  );
}

export default DownloadGroupFooterForHomePage;
