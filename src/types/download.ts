import { IImgUrl, INavPage } from './nav';

export interface IDownloadPageProps extends INavPage {
  downloadResource?: IDownloadResource;
}

export interface IDownloadResource {
  iosDownloadUrl?: string;
  iosProductImage?: IImgUrl;
  iosQRCode?: IImgUrl;
  androidDownloadUrl?: string;
  androidProductImage?: IImgUrl;
  androidQRCode?: IImgUrl;
  extensionDownloadUrl?: string;
  extensionProductImage?: IImgUrl;
  apkDownloadUrl?: string;
}
