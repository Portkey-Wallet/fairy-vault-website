import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from 'antd';
import clsx from 'clsx';
import CommonImage from 'components/CommonImage';
import { downloadPageData, IDownloadPageTabs } from 'constants/downloadPageData';
import { DEVICE_TYPE, NAV_TYPE, ROUTER } from 'constants/enum';
import { useUserAgent } from 'hooks/useUserAgent';
import DownloadGroupForDownloadPage from 'page-components/DownloadGroupForDownloadPage';
import NavFooter from 'page-components/NavFooter';
import NavHeader from 'page-components/NavHeader';
import styles from './styles.module.less';
import DownloadSSLTip from 'page-components/DownloadPageSection/DownloadSSLTip';
import { motion } from 'framer-motion';
import { INITIAL, variantDownToUp, VIEWPORT, WHILE_IN_VIEW } from 'constants/motion';
import { API, get } from 'utils/axios';
import { IDownloadPageProps } from 'types/download';
import { s3Url } from 'constants/network';

export default function Download({ headerNav, footerNav, socialMedia, downloadResource }: IDownloadPageProps) {
  const uaType = useUserAgent();
  const [tabsData, setTabsDate] = useState(downloadPageData.tabs);
  const [rightImage, setRightImage] = useState<string>(s3Url + downloadResource?.extensionProductImage?.filename_disk);
  const [title, setTitle] = useState<string>(downloadPageData.tabs[0].title);
  const [content, setContent] = useState<string>(downloadPageData.tabs[0].content);
  const [tip, setTip] = useState<string>(downloadPageData.tabs[0].tip);
  const [tipLink, setTipLink] = useState<string>(downloadPageData.tabs[0].tipLink);
  const [tabChangeUaType, setTabChangeUaType] = useState<DEVICE_TYPE>(uaType);
  const productImage: Record<DEVICE_TYPE, string> = useMemo(
    () => ({
      [DEVICE_TYPE.IOS]: s3Url + downloadResource?.iosProductImage?.filename_disk,
      [DEVICE_TYPE.Android]: s3Url + downloadResource?.androidProductImage?.filename_disk,
      [DEVICE_TYPE.WebChrome]: s3Url + downloadResource?.extensionProductImage?.filename_disk,
      [DEVICE_TYPE.WebNotChrome]: '',
    }),
    [
      downloadResource?.androidProductImage?.filename_disk,
      downloadResource?.extensionProductImage?.filename_disk,
      downloadResource?.iosProductImage?.filename_disk,
    ],
  );

  const handleTabClick = useCallback(
    (type: DEVICE_TYPE) => {
      const data: IDownloadPageTabs[] = [];
      downloadPageData.tabs.forEach((element) => {
        if (element.type === type) {
          setRightImage(productImage[type]);
          setTitle(element.title);
          setContent(element.content);
          setTip(element.tip);
          setTipLink(element.tipLink);
          setTabChangeUaType(element.type);
        }
        data.push({ ...element, selected: element.type === type });
      });

      if (type === DEVICE_TYPE.WebNotChrome) {
        // Chrome is selected by default in non-chrome browsers
        setTabChangeUaType(DEVICE_TYPE.WebChrome);
        data.forEach((item) => {
          item.selected = item.type === DEVICE_TYPE.WebChrome;
        });
      }

      setTabsDate(data);
    },
    [productImage],
  );

  useEffect(() => {
    handleTabClick(uaType);
  }, [handleTabClick, uaType]);

  return (
    <div>
      {/* <NavHeader /> */}
      <div className={styles.emptyContainerDownload}></div>

      <motion.div initial={INITIAL} whileInView={WHILE_IN_VIEW} viewport={VIEWPORT}>
        <section className={clsx(['flex-column-center', 'section-container', styles.downloadPage])}>
          <div className={clsx(['flex', 'page-container', styles.pageBody])}>
            <div className={clsx([styles.pageLeft, styles.showBottomUp])}>
              <motion.div variants={variantDownToUp(0)} className={styles.devicesTabs}>
                {tabsData.map((item, idx) => {
                  return (
                    <Button
                      type="text"
                      key={'downloadPageTab' + idx}
                      className={clsx([styles.tabsBtn, item.selected ? styles.tabsBtnSelected : null])}
                      onClick={handleTabClick.bind(undefined, item.type)}>
                      {item.name}
                    </Button>
                  );
                })}
              </motion.div>
              <motion.div variants={variantDownToUp(0.5)}>
                <div className={styles.sectionTitle}>{title}</div>
              </motion.div>
              <motion.div variants={variantDownToUp(1)}>
                <div className={styles.sectionDesc}>{content}</div>
              </motion.div>
              <motion.div variants={variantDownToUp(1.5)}>
                <DownloadGroupForDownloadPage
                  className={styles.downloadBtn}
                  type={tabChangeUaType}
                  resource={{
                    iosDownloadUrl: 'https://apps.apple.com/us/app/fairyvault/id6741625830',
                    androidDownloadUrl: 'https://play.google.com/store/apps/details?id=com.portkey.fairyvault',
                    extensionDownloadUrl:
                      'https://chromewebstore.google.com/detail/fairy-vault/jhgjbdpoodaokoflbmdmlllgehdhkmja',
                  }}
                />
              </motion.div>
              {/* In the webpage, SSL_Tip content appears on the left */}
              <motion.div variants={variantDownToUp(2)}>
                <DownloadSSLTip tip={tip} tipLink={tipLink} className={styles.webShow} />
              </motion.div>
            </div>
            <div className={clsx(['flex-column-center', styles.pageRight])}>
              <motion.div variants={variantDownToUp(2)}>
                {/* <CommonImage
                  src={rightImage}
                  width={600}
                  height={600}
                  className={styles.mainImage}
                  layout="intrinsic"
                  priority
                /> */}
              </motion.div>
            </div>
          </div>
          {/* On mobile, SSL_Tip content appears below */}
          <motion.div variants={variantDownToUp(2)} className={'page-container'}>
            <DownloadSSLTip tip={tip} tipLink={tipLink} className={styles.mobileShow} />
          </motion.div>
        </section>
      </motion.div>
      <NavFooter
        className={styles.downloadFooter}
        footerMediaClassName={styles.downloadFooterMedia}
        footerNav={footerNav}
        socialMedia={socialMedia}
      />
    </div>
  );
}

export async function getStaticProps() {
  const headerNav = await get(API.GET.HEADER_NAV);
  const footerNav = await get(API.GET.FOOTER_NAV);
  const socialMedia = await get(API.GET.SOCIAL_MEDIA);
  const downloadResource = await get(API.GET.DOWNLOAD);

  return {
    props: {
      headerNav: headerNav?.data || [],
      footerNav: footerNav?.data || [],
      socialMedia: socialMedia?.data || [],
      downloadResource: downloadResource?.data || {},
    },
  };
}
