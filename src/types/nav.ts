import { NavigationType } from 'constants/enum';

export interface INavigation {
  type: {
    value: NavigationType;
  };
  title: string;
  path?: string; // route path or jump link
}

export interface ITopMenu extends INavigation {
  children: Array<ISecondMenu>;
  isShowSecondMenus?: boolean;
}

export type ISecondMenu = INavigation;

export interface IImgUrl {
  id?: string;
  filename_disk?: string;
  width?: number;
  height?: number;
}

export interface ISocialMedia {
  name: string;
  link: string; // jump url
  svg: IImgUrl; // svg icon url
  activeSvg: IImgUrl;
  isActive?: boolean;
}

export interface INavPage {
  headerNav: Array<ITopMenu>;
  footerNav: Array<ITopMenu>;
  socialMedia: Array<ISocialMedia>;
}
