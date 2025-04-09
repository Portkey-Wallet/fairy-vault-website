import { IDownloadResource } from './download';
import { IImgUrl, INavPage } from './nav';

export interface IDAppItem {
  dApp_id: {
    id: number;
    logo?: {
      filename_disk: string;
      id: string;
      width: number;
      height: number;
    };
    url?: string;
  };
}

export interface IHomeData {
  focusImage?: IImgUrl;
  dAppSectionTitle?: string;
  dAppList: IDAppItem[];
  videoTitle?: string;
  videoContent?: string;
  videoUrl?: string;
}

export interface IHomePageProps extends INavPage {
  homeData?: IHomeData;
  downloadResource?: IDownloadResource;
}
