import clsx from 'clsx';
import { Popover } from 'antd';
import CommonImage from 'components/CommonImage';
import { NAV_TYPE, NavigationType, ROUTER } from 'constants/enum';
import { useCallback, useMemo, useState } from 'react';
import logoBlack from '../../../public/portkeyLogoBlack.svg';
import logoWhite from '../../../public/portkeyLogoWhite.svg';
import styles from './styles.module.less';
import { iconNavSelectedBlue, iconNavSelectedWhite, iconMenuWhite, iconMenuGray } from 'assets/images';
import NavHeaderMobileMenu from 'page-components/NavHeaderMobileMenu';
import { jumpOrScrollToTop, switchPage } from 'utils/router';
import { ISecondMenu, ITopMenu } from 'types/nav';
import HeaderMenuArrowSVG from 'page-components/SVGComponents/HeaderMenuArrowSVG';
import CommonButton from 'components/CommonButton';
import Image from 'next/image';

export interface INavHeaderProps {
  type?: NAV_TYPE;
  path?: ROUTER;
  downloadIsButton?: boolean;
  headerNav: Array<ITopMenu>;
  className?: string;
}

export default function NavHeader({
  type = NAV_TYPE.BLUE,
  path = ROUTER.DEFAULT,
  downloadIsButton = false,
  headerNav,
  className,
}: INavHeaderProps) {
  return (
    <header
      className={clsx(['flex-row-between', 'section-container-48', styles.navSticky, styles.navBlueHeader, className])}>
      <div className={clsx([styles.navHeader])}>
        <CommonImage
          src={'logo.svg'}
          style={{ width: 180, height: 54, cursor: 'pointer' }}
          alt="portkeyLogo"
          onClick={() => jumpOrScrollToTop(ROUTER.DEFAULT)}
          priority
        />

        {/* <NavHeaderMobileMenu isOpen={isOpenMenu} headerNav={headerNav} callback={onCloseMenu} /> */}

        <div>
          <div className={styles.frame}>
            <div className={styles.textWrapper}>Home</div>
            <div className={styles.textWrapper}>Features</div>
            <div className={styles.textWrapper}>Security</div>
            <div style={{ position: 'absolute', top: 40, right: 288 }}>
              <Image
                className={styles.Vector}
                alt="Vector"
                src="https://c.animaapp.com/WvDHYKDy/img/vector-1.svg"
                width={20}
                height={2}
              />
            </div>
            <div style={{ position: 'absolute', top: 40, right: 178 }}>
              <Image
                className={styles.Vector2}
                alt="Vector"
                src="https://c.animaapp.com/WvDHYKDy/img/vector-1.svg"
                width={20}
                height={2}
              />
            </div>
            <div style={{ position: 'absolute', top: 40, right: 58 }}>
              <Image
                className={styles.Vector3}
                alt="Vector"
                src="https://c.animaapp.com/WvDHYKDy/img/vector-1.svg"
                width={20}
                height={2}
              />
            </div>
          </div>
        </div>
        <CommonButton type="primaryOutline" className={styles.downloadButton}>
          Download
        </CommonButton>
      </div>
    </header>
  );
}
