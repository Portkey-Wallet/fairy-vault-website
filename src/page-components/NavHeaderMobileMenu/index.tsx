import { Button } from 'antd';
import { iconClose } from 'assets/images';
import clsx from 'clsx';
import CommonImage from 'components/CommonImage';
import { useGoDownload } from 'hooks/useGoPageOrRefresh';
import logoBlack from '../../../public/portkeyLogoBlack.svg';
import styles from './styles.module.less';
import { jumpOrScrollToTop, switchPage } from 'utils/router';
import { ROUTER } from 'constants/enum';
import { ITopMenu } from 'types/nav';
import { useCallback, useRef, useState } from 'react';
import MenuArrowSVG from 'page-components/SVGComponents/MenuArrowSVG';
import { Popup } from 'antd-mobile';

enum HiddenSecondType {
  ALL_HIDDEN = 'none',
}

export default function NavHeaderMobileMenu({
  isOpen = false,
  headerNav,
  callback,
}: {
  isOpen: boolean;
  headerNav: Array<ITopMenu>;
  callback: () => void;
}) {
  const [menuData, setMenuData] = useState(headerNav);
  const showSecondMenusIndex = useRef<number>(-1);

  const onClose = () => {
    callback?.();
    showSecondMenus(HiddenSecondType.ALL_HIDDEN);
  };

  const showSecondMenus = useCallback(
    (parentIndex: number | HiddenSecondType) => {
      if (parentIndex === HiddenSecondType.ALL_HIDDEN || showSecondMenusIndex.current === parentIndex) {
        showSecondMenusIndex.current = -1;
        return setMenuData(headerNav);
      }

      showSecondMenusIndex.current = parentIndex;

      const data = headerNav?.map((item, index) => {
        return {
          ...item,
          isShowSecondMenus: index === parentIndex,
        };
      });
      if (data?.length > 0) {
        setMenuData(data);
      }
    },
    [headerNav],
  );

  return (
    <Popup
      position="right"
      visible={isOpen}
      showCloseButton={false}
      className="navHeaderMobileMenu"
      bodyClassName={styles.navHeaderMobileMenuBody}
      stopPropagation={['click']}>
      <div className={clsx(['flex-row-between', styles.logoRow])}>
        <CommonImage
          src={logoBlack}
          style={{ width: 142, height: 32, cursor: 'pointer' }}
          alt="portkeyLogo"
          priority
          onClick={() => jumpOrScrollToTop(ROUTER.DEFAULT, onClose)}
        />
        <CommonImage
          src={iconClose}
          style={{ width: 24, height: 24, cursor: 'pointer' }}
          alt="portkeyMenu"
          onClick={onClose}
          priority
        />
      </div>
      <div className={styles.menusWrap}>
        {menuData.map((item, index) => {
          return (
            <div key={'NavHeaderMobileMenu-first-' + item.title + index}>
              {/* Customize the style of the download button */}
              {item.path === ROUTER.DOWNLOAD && item?.children?.length === 0 && (
                <Button type="text" className={styles.downloadBtn} onClick={useGoDownload}>
                  Download
                </Button>
              )}
              {item.path !== ROUTER.DOWNLOAD && (
                <div className={styles.menuGroup}>
                  <div
                    className={clsx([
                      'flex-row-between',
                      styles.firstMenu,
                      item?.isShowSecondMenus ? styles.rotateSvg : null,
                    ])}
                    onClick={
                      item?.children?.length === 0
                        ? () => switchPage(item.type.value, item.path, onClose)
                        : () => showSecondMenus(index)
                    }>
                    <span className="text-black-btn overflow-x-hidden">{item.title}</span>
                    {item?.children?.length > 0 && <MenuArrowSVG />}
                  </div>
                  {item?.children?.length > 0 && (
                    <div
                      className={clsx([
                        styles.secondMenuList,
                        item?.isShowSecondMenus ? styles.visible : styles.hidden,
                      ])}>
                      {item.children.map((v, k) => {
                        return (
                          <div
                            key={'NavHeaderMobileMenu-second-' + v.title + k}
                            className={clsx(['overflow-x-hidden', styles.secondMenu])}
                            onClick={() => switchPage(v.type.value, v.path, onClose)}>
                            {v.title}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Popup>
  );
}
