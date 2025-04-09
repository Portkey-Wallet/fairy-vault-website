import { IImgUrl } from './nav';

export interface IMediaKitItem {
  mediaKit_id: IMediaKitId;
}

export interface IMediaKitId {
  name: string;
  backgroundColor: string;
  svg: IImgUrl;
  png: IImgUrl;
  width: number;
  height: number;
}

export interface IMediaKitFirstScreen {
  title: string;
  content: string;
  allMediaKitZip: {
    id: string;
    filename_disk: string;
  };
}

export interface IMediaKitList {
  mediaKitList: IMediaKitItem[];
  mediaKitDescription: string;
}

export interface IBoilerplateItem {
  boilerplate_id: {
    id: number;
    name: string;
    url: string;
  };
}

export interface IBoilerplateInfo {
  boilerplateTitle?: string;
  boilerplateContent?: string;
  boilerplateList?: IBoilerplateItem[];
}

export type IMediaKitPage = IMediaKitFirstScreen & IMediaKitList & IBoilerplateInfo;
