import { NEXT_PUBLIC_NETWORK_ENV } from './misc';
import { BackEndNetWorkMap } from './network';

export const BASE_CMS_URL = NEXT_PUBLIC_NETWORK_ENV ? BackEndNetWorkMap[NEXT_PUBLIC_NETWORK_ENV]?.cmsUrl : '';

export const BASE_DOWNLOAD_URL = BASE_CMS_URL + 'assets/';

export const API = {
  GET: {
    HEADER_NAV:
      'items/topMenu?limit=-1&fields=*,type.value,children.*,children.type.value&sort=index&deep[children][_sort]=index&filter[status]=published&deep[children][_filter][status]=published',
    FOOTER_NAV:
      'items/bottomMenu?limit=-1&fields=*,children.*,children.type.value,type.value,deep&sort=index&deep[children][_sort]=index&filter[status]=published&deep[children][_filter][status]=published',
    SOCIAL_MEDIA: 'items/officialSocialMedia?limit=-1&fields=*,svg.*,activeSvg.*&sort=index&filter[status]=published',
    MEDIA_KIT:
      'items/mediaKitPage?fields=*,mediaKitList.mediaKit_id.*,allMediaKitZip.*,content.mediaKitPageContent_id.*,mediaKitList.mediaKit_id.svg.*,mediaKitList.mediaKit_id.png.*,boilerplateList.boilerplate_id.*&deep[mediaKitList][_sort]=mediaKit_id.index&deep[mediaKitList][_filter][mediaKit_id][status]=published&filter[status]=published&deep[boilerplateList][_sort]=boilerplate_id.index',
    HOME: 'items/home?fields=*,focusImage.filename_disk,dAppList.dApp_id.*,dAppList.dApp_id.logo.*&deep[dAppList][_sort]=dApp_id.index&deep[dAppList][_filter][dApp_id][status]=published',
    DOWNLOAD:
      'items/download?fields=*,extensionProductImage.filename_disk,extensionProductImage.id,androidProductImage.filename_disk,androidProductImage.id,androidQRCode.filename_disk,androidQRCode.id,iosProductImage.filename_disk,iosProductImage,id,iosQRCode.filename_disk,iosQRCode.id',
  },
};
