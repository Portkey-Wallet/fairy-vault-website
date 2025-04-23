import MediaKitFirstScreen from 'page-components/MediaKitPageSection/MediaKitFirstScreen';
import MediaKitList from 'page-components/MediaKitPageSection/MediaKitList';
import BoilerplateInfo from 'page-components/MediaKitPageSection/BoilerplateInfo';
import NavFooter from 'page-components/NavFooter';
import { IMediaKitPage } from 'types/mediaKit';
import { INavPage } from 'types/nav';
import { NAV_TYPE, ROUTER } from 'constants/enum';
import NavHeader from 'page-components/NavHeader';
import styles from './styles.module.less';
import { API, get } from 'utils/axios';

export default function MediaKit({
  headerNav,
  footerNav,
  socialMedia,
  mediaKitData,
}: INavPage & { mediaKitData: IMediaKitPage }) {
  return (
    <div className={styles.mediaKit}>
      {/* <NavHeader type={NAV_TYPE.WHITE} path={ROUTER.MEDIA_KIT} downloadIsButton headerNav={headerNav} /> */}

      <MediaKitFirstScreen
        title={mediaKitData.title}
        content={mediaKitData.content}
        allMediaKitZip={mediaKitData.allMediaKitZip}
      />

      <MediaKitList mediaKitList={mediaKitData.mediaKitList} mediaKitDescription={mediaKitData.mediaKitDescription} />

      <BoilerplateInfo
        boilerplateTitle={mediaKitData.boilerplateTitle}
        boilerplateContent={mediaKitData.boilerplateContent}
        boilerplateList={mediaKitData.boilerplateList}
      />

      <NavFooter
        footerNav={footerNav}
        socialMedia={socialMedia}
        className={styles.footer}
        footerMediaClassName={styles.footerMedia}
      />
    </div>
  );
}

export async function getStaticProps() {
  const headerNav = await get(API.GET.HEADER_NAV);
  const footerNav = await get(API.GET.FOOTER_NAV);
  const socialMedia = await get(API.GET.SOCIAL_MEDIA);
  const mediaKit = await get(API.GET.MEDIA_KIT);

  return {
    props: {
      headerNav: headerNav?.data || [],
      footerNav: footerNav?.data || [],
      socialMedia: socialMedia?.data || [],
      mediaKitData: mediaKit?.data || {},
    },
  };
}
