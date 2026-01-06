import clsx from 'clsx';
import CommonImage from 'components/CommonImage';
import { NavigationType, ROUTER } from 'constants/enum';
import LinkForBlank from 'page-components/LinkForBlank';
import { useCallback, useState } from 'react';
import { jumpOrScrollToTop, switchPage } from 'utils/router';
import { getFullYear } from 'utils/time';
import logoBlack from '../../../public/portkeyLogoBlack.svg';
import styles from './styles.module.less';
import { ISocialMedia, ITopMenu } from 'types/nav';
import { s3Url } from 'constants/network';

export default function NavFooter({
  className,
  footerMediaClassName,
  socialMedia,
  footerNav,
  onlyFooterMedia = false,
  footerPortKeyClassName,
}: {
  className?: string;
  footerMediaClassName?: string;
  footerPortKeyClassName?: string;
  footerNav?: Array<ITopMenu>;
  socialMedia: Array<ISocialMedia>;
  onlyFooterMedia?: boolean;
}) {
  const [socialMediaData, setSocialMediaData] = useState(socialMedia);
  const showActiveMedia = useCallback(
    (index: number) => {
      const data = socialMedia?.map((v, k) => {
        return {
          ...v,
          isActive: index === k,
        };
      });
      if (data?.length > 0) {
        setSocialMediaData(data);
      }
    },
    [socialMedia],
  );

  return (
    <footer
      id="portkey-footer"
      className={clsx([
        'section-container',
        'flex-row-content-center',
        className,
        styles.footer,
        onlyFooterMedia ? styles.footerWithOnlyMedia : '',
      ])}>
      <div className={clsx(['page-container', styles.footerBody])}>
        {!onlyFooterMedia && footerNav && footerNav.length > 0 && (
          <div className={styles.footerNav}>
            <div className={clsx('flex-column', styles.footerLogoWrapper)}>
              <CommonImage
                src={logoBlack}
                style={{ width: 142, height: 32, cursor: 'pointer' }}
                alt="portkeyLogo"
                className={styles.logo}
                onClick={() => jumpOrScrollToTop(ROUTER.DEFAULT)}
              />
              <div className={styles.footerDescription}>Your first AA wallet for Web2 to Web3 migration</div>
            </div>
            <div className={clsx(['flex-row', styles.menus])}>
              {footerNav?.map((item, index) => {
                return (
                  <div key={'FooterFirstMenu-' + item.title + index} className={styles.menuGroup}>
                    {item.type.value === NavigationType.NOT_JUMP && (
                      <div className={styles.firstMenus}>{item.title}</div>
                    )}
                    {item?.children &&
                      item.children?.map((v, k) => {
                        return (
                          <div
                            key={'FooterSecondMenu-' + v.title + k}
                            className={styles.secondMenus}
                            onClick={() => switchPage(v.type.value, v.path)}>
                            {v.title}
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className={clsx([styles.footerMedia, footerMediaClassName])}>
          <div className="flex-row-center">
            {socialMediaData?.map((item, index) => {
              return (
                <div
                  key={'FooterSocialMedia-' + item.name + index}
                  onMouseOver={() => showActiveMedia(index)}
                  onMouseOut={() => showActiveMedia(-1)}
                  className="flex-row-center">
                  <LinkForBlank
                    href={item.link}
                    className={styles.iconBase}
                    ariaLabel={item.name}
                    element={
                      <div style={{ position: 'relative' }}>
                        <CommonImage
                          src={s3Url + item?.activeSvg?.filename_disk}
                          style={{
                            width: 24,
                            height: 24,
                            opacity: item?.isActive ? 1 : 0,
                            position: 'absolute',
                            top: 0,
                          }}
                        />
                        <CommonImage
                          src={s3Url + item?.svg?.filename_disk}
                          style={{ width: 24, height: 24, opacity: item?.isActive ? 0 : 1 }}
                        />
                      </div>
                    }
                  />
                </div>
              );
            })}
          </div>
          <div className={clsx(styles.footerPortKey, footerPortKeyClassName)}>FairyVault@{getFullYear()}</div>
        </div>
      </div>
    </footer>
  );
}
