import React, { useEffect, useState } from 'react';
import { useUserAgent } from 'hooks/useUserAgent';
import BottomDownloadSection from 'page-components/HomePageSection/BottomDownloadSection';
import DevelopGuideSection from 'page-components/HomePageSection/DevelopGuideSection';
import FunctionsSection from 'page-components/HomePageSection/FunctionsSection';
import PrioritySection from 'page-components/HomePageSection/PrioritySection';
import FirstScreenSection from 'page-components/HomePageSection/FirstScreenSection';
import DAppSection from 'page-components/HomePageSection/DAppSection';
import VideoSection from 'page-components/HomePageSection/VideoSection';
import NavHeader from 'page-components/NavHeader';
import NavFooter from 'page-components/NavFooter';
import { NAV_TYPE, ROUTER } from 'constants/enum';
import { API, get } from '../utils/axios';
import { IHomePageProps } from 'types/home';
import { s3Url } from 'constants/network';
import { TMP_APK_S3_DOWNLOAD } from 'constants/downloadPageData';
import styles from './styles.module.less';
import { headerContainerBg } from 'assets/images';
import FeatureScreenSection from 'page-components/FeatureScreenSection';
import SecurityScreenSection from 'page-components/SecurityScreenSection';
import DownloadSection from 'page-components/DownloadSection';
import FooterSection from 'page-components/FooterSection';

export default function Home({ headerNav, footerNav, socialMedia, homeData, downloadResource }: IHomePageProps) {
  const uaType = useUserAgent();
  const [scale, setScale] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.max(0.5, 1 - scrollY / 1000);
      const newOffsetX = Math.min(400, (1 - newScale) * 800);

      setScale(newScale);
      setScrollY(Math.min(newOffsetX));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="home-page">
      <NavHeader />
      <div className="empty-container"></div>

      <FirstScreenSection />
      <FeatureScreenSection />
      <SecurityScreenSection />
      <DownloadSection />
      <FooterSection />
      {/* <DAppSection title={homeData?.dAppSectionTitle} dAppList={homeData?.dAppList} />

      <PrioritySection />

      <FunctionsSection />

      <VideoSection title={homeData?.videoTitle} content={homeData?.videoContent} videoUrl={homeData?.videoUrl} />

      <DevelopGuideSection />

      <BottomDownloadSection
        type={uaType}
        chromeStoreUrl={downloadResource?.extensionDownloadUrl || ''}
        androidStoreUrl={downloadResource?.androidDownloadUrl || ''}
        iosStoreUrl={downloadResource?.iosDownloadUrl || ''}
        apkS3Url={downloadResource?.apkDownloadUrl || TMP_APK_S3_DOWNLOAD}
      />

      <NavFooter footerNav={footerNav} socialMedia={socialMedia} /> */}
    </div>
  );
}
export async function getStaticProps() {
  const headerNav = await get(API.GET.HEADER_NAV);
  const footerNav = await get(API.GET.FOOTER_NAV);
  const socialMedia = await get(API.GET.SOCIAL_MEDIA);
  const homeData = await get(API.GET.HOME);
  const downloadResource = await get(API.GET.DOWNLOAD);
  return {
    props: {
      headerNav: headerNav?.data || [],
      footerNav: footerNav?.data || [],
      socialMedia: socialMedia?.data || [],
      homeData: homeData?.data || {},
      downloadResource: downloadResource?.data || {},
    },
  };
}
