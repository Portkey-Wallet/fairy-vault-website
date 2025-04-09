import {
  homeCardIcon01Hover,
  homeCardIcon01Normal,
  homeCardIcon02Hover,
  homeCardIcon02Normal,
  homeCardIcon03Hover,
  homeCardIcon03Normal,
  homeFunction1,
  homeFunction2,
  homeFunction3,
  homeDeveloper,
  iconFast,
  iconCode,
  appStoreDownload,
  googleGetIt,
  apkGetIt,
  chromeDownload,
  otherBrowserDownload,
  downloadQRCode,
  iconTime,
} from 'assets/images';
import { IMAGE_POSITION } from './enum';

export interface ISeoTDK {
  title: string;
  description: string;
  keywords: string;
}

export interface IFirstScreenData {
  title: string;
  desc: Array<string>;
}

export interface PriorityCardData {
  iconNormal: string;
  iconHover: string;
  title: string;
  content: string[];
}
export interface ContentsData {
  icon?: string;
  text: string;
  textColor?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconMarginRight?: number; // icon and descriptive text gap
}
export interface TwoColInfoCardData {
  src: string;
  imgPosition?: IMAGE_POSITION;
  imgWidth?: number;
  imgHeight?: number;
  title?: string;
  contents: ContentsData[];
}

export interface DownloadGroupData {
  chrome: SingleDownloadData;
  notChrome: SingleDownloadData;
  android: SingleDownloadData;
  apk: SingleDownloadData;
  ios: SingleDownloadData;
  qrCode: DownloadQRCodeData;
}
export interface SingleDownloadData {
  iconSrc: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
}

export interface DownloadQRCodeData {
  width: number;
  height: number;
  alt: string;
  iconSrc: string;
  iconAlt: string;
  iconWidth: number;
  iconHeight: number;
}

export const SEO_TDK: ISeoTDK = {
  title: 'Portkey: Secure AA Crypto Wallet for Web3 Asset Management',
  description: `Portkey, aelf's AA crypto wallet, lets you login with Web2 socials. No private keys needed. Enjoy secure, free DID account creation and social recovery.`,
  keywords: 'DID, social recovery, crypto wallet, AA wallet',
};

export const firstScreenData: IFirstScreenData = {
  title: 'Your first AA wallet for Web2 to Web3 migration',
  desc: [
    'Seamless Web2 experience',
    'Secure social recovery through guardians & verifiers',
    'Free to create & free to use!',
  ],
};

export const priorityCardData: PriorityCardData[] = [
  {
    iconNormal: homeCardIcon01Normal,
    iconHover: homeCardIcon01Hover,
    title: 'Seamless Web2 experience',
    content: [
      '• Register using your email, phone number,  or social media account',
      '• Enjoy the best of Web3 without any of the hassle',
      '• Secured and recoverable with our Guardians & Verifiers system',
    ],
  },
  {
    iconNormal: homeCardIcon02Normal,
    iconHover: homeCardIcon02Hover,
    title: 'Secure social recovery',
    content: [
      '• Benefit from complete control over your identities and assets',
      '• Safeguard them through social recovery',
      '• Recover your wallet within minutes in case of attack or theft',
    ],
  },
  {
    iconNormal: homeCardIcon03Normal,
    iconHover: homeCardIcon03Hover,
    title: `It's free!`,
    content: [
      '• Own your Web3 identity and use Portkey at no charge',
      '• Anyone can easily create a wallet for free',
      '• Ease your users into Web3 apps',
    ],
  },
];

export const twoColInfoCardData: TwoColInfoCardData[] = [
  {
    src: homeFunction1,
    imgPosition: IMAGE_POSITION.Left,
    title: 'Buy/Sell crypto',
    contents: [
      { text: 'Buy cryptocurrency with fiat money and vice versa.' },
      { text: 'Trading between fiat money and cryptocurrency is supported via credit card or bank transfer.' },
    ],
  },
  {
    src: homeFunction2,
    imgPosition: IMAGE_POSITION.Right,
    title: 'Multi-chain support',
    contents: [
      { text: 'Manage identities and assets on multiple chains.' },
      { text: 'Portkey supports multiple networks, including aelf, Ethereum, EVM chains, etc.' },
    ],
  },
  {
    src: homeFunction3,
    imgPosition: IMAGE_POSITION.Left,
    title: 'Seamless connection',
    contents: [
      { text: 'Connect to DApps with one click and discover more.' },
      { text: 'You can connect existing identities to DApps you use and explore more you may like within Portkey.' },
    ],
  },
];

export const developInfoCardData: TwoColInfoCardData = {
  src: homeDeveloper,
  imgWidth: 478,
  imgHeight: 350,
  imgPosition: IMAGE_POSITION.Right,
  contents: [
    {
      icon: iconCode,
      iconWidth: 26,
      iconHeight: 26,
      iconMarginRight: 24,
      text: `A complete suite of tools to support your project's migration from Web2 to Web3`,
      textColor: '#fff',
    },
    {
      icon: iconTime,
      iconWidth: 26,
      iconHeight: 26,
      iconMarginRight: 24,
      text: 'Our plug-and-play solution saves hours of development time',
      textColor: '#fff',
    },
    {
      icon: iconFast,
      iconWidth: 26,
      iconHeight: 26,
      iconMarginRight: 24,
      text: 'Launch your product within hours!',
      textColor: '#fff',
    },
  ],
};

export const downloadData: DownloadGroupData = {
  chrome: {
    iconSrc: chromeDownload,
    iconAlt: 'chromeDownloadLogo',
    iconWidth: 156,
    iconHeight: 30,
  },
  notChrome: {
    iconSrc: otherBrowserDownload,
    iconAlt: 'otherBrowserDownloadLogo',
    iconWidth: 198,
    iconHeight: 30,
  },
  android: {
    iconSrc: googleGetIt,
    iconAlt: 'androidDownloadLogo',
    iconWidth: 141,
    iconHeight: 34,
  },
  apk: {
    iconSrc: apkGetIt,
    iconAlt: 'apkDownloadLogo',
    iconWidth: 141,
    iconHeight: 34,
  },
  ios: {
    iconSrc: appStoreDownload,
    iconAlt: 'androidDownloadLogo',
    iconWidth: 136,
    iconHeight: 32,
  },
  qrCode: {
    width: 120, // qrCode width
    height: 120, // qrCode height
    alt: 'DownloadQRCode', // qrCode alt
    iconSrc: downloadQRCode,
    iconAlt: 'QRCodeDownloadLogo',
    iconWidth: 32,
    iconHeight: 32,
  },
};

// [test] 'https://portkeydocs.readthedocs.io/en/pre-release/'
export const DEVELOPERS_URL = 'https://portkeydocs.readthedocs.io/en/latest/index.html#';
