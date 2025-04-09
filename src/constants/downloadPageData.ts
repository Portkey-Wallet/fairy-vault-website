import { DEVICE_TYPE } from './enum';

export interface IDownloadPageTabs {
  name: string;
  type: DEVICE_TYPE;
  selected: boolean;
  title: string;
  content: string;
  tip: string;
  tipLink: string;
}

export interface IDownloadPageData {
  metaTitle: string;
  tabs: IDownloadPageTabs[];
}

export const downloadPageData: IDownloadPageData = {
  metaTitle: 'Portkey Download',
  tabs: [
    {
      name: 'Chrome',
      type: DEVICE_TYPE.WebChrome,
      selected: true,
      title: 'Portkey DID for Chrome browser',
      content: 'Portkey DID Extension is a safe and user-friendly entrance to Web3 for everyone',
      tip: 'Download the extension from the official website and check its SSL certification',
      tipLink: 'https://portkey.finance/',
    },
    {
      name: 'Android',
      type: DEVICE_TYPE.Android,
      selected: false,
      title: 'Portkey DID for Android',
      content: 'Portkey DID is a safe and user-friendly entrance to Web3 for everyone',
      tip: 'Download the app from the official website and check its SSL certification',
      tipLink: 'https://portkey.finance/',
    },
    {
      name: 'iOS',
      type: DEVICE_TYPE.IOS,
      selected: false,
      title: 'Portkey DID for iOS',
      content: 'Portkey DID is a safe and user-friendly entrance to Web3 for everyone',
      tip: 'Download the app from the official website and check its SSL certification',
      tipLink: 'https://portkey.finance/',
    },
  ],
};

export const TMP_APK_S3_DOWNLOAD = 'https://portkey-did.s3.ap-northeast-1.amazonaws.com/portkey.apk';
