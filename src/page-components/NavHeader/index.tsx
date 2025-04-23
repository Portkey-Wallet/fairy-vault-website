import clsx from 'clsx';
import { Popover } from 'antd';
import CommonImage from 'components/CommonImage';
import { NAV_TYPE, NavigationType, ROUTER } from 'constants/enum';
import { useCallback, useEffect, useMemo, useState } from 'react';
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
import CustomSvg from 'components/CustomSvg';
const scrollToWithOffset = (id: string, offset: number) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export interface INavHeaderProps {
  type?: NAV_TYPE;
  path?: ROUTER;
  downloadIsButton?: boolean;
  headerNav?: Array<ITopMenu>;
  className?: string;
  homeRef?: React.RefObject<HTMLDivElement>;
  featuresRef?: React.RefObject<HTMLDivElement>;
  securityRef?: React.RefObject<HTMLDivElement>;
}

export default function NavHeader({ className, homeRef, featuresRef, securityRef }: INavHeaderProps) {
  const [activeTab, setActiveTab] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     console.log('scrollPosition is', scrollPosition);
  //     if (scrollPosition < 7042) {
  //       setActiveTab(0); // Home
  //     } else if (scrollPosition >= 7042 && scrollPosition < 9027) {
  //       setActiveTab(1); // Features
  //     } else {
  //       setActiveTab(2); // Security
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === homeRef?.current) {
              setActiveTab(0); // Home
            } else if (entry.target === featuresRef?.current) {
              setActiveTab(1); // Features
            } else if (entry.target === securityRef?.current) {
              setActiveTab(2); // Security
            }
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    if (homeRef?.current) observer.observe(homeRef.current);
    if (featuresRef?.current) observer.observe(featuresRef.current);
    if (securityRef?.current) observer.observe(securityRef.current);

    return () => observer.disconnect();
  }, [featuresRef, homeRef, securityRef]);

  return (
    <>
      <header
        className={clsx([
          'flex-row-between',
          'section-container-48',
          styles.navSticky,
          styles.navBlueHeader,
          className,
        ])}>
        <div className={clsx([styles.navHeader])}>
          {/* <NavHeaderMobileMenu isOpen={isOpenMenu} headerNav={headerNav} callback={onCloseMenu} /> */}

          <div className="flex-row-center-center">
            <div className={styles.frame}>
              <div
                className={styles.textWrapper}
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>
                Home
              </div>
              <div className={styles.textWrapper} onClick={() => scrollToWithOffset('features', 102)}>
                Features
              </div>
              <div className={styles.textWrapper} onClick={() => scrollToWithOffset('security', 102)}>
                Security
              </div>
              <div style={{ position: 'absolute', top: 40, right: 288, display: activeTab === 0 ? 'block' : 'none' }}>
                <Image
                  className={styles.Vector}
                  alt="Vector"
                  src="https://c.animaapp.com/WvDHYKDy/img/vector-1.svg"
                  width={20}
                  height={7}
                />
              </div>
              <div style={{ position: 'absolute', top: 40, right: 178, display: activeTab === 1 ? 'block' : 'none' }}>
                <Image
                  className={styles.Vector2}
                  alt="Vector"
                  src="https://c.animaapp.com/WvDHYKDy/img/vector-1.svg"
                  width={20}
                  height={7}
                />
              </div>
              <div style={{ position: 'absolute', top: 40, right: 58, display: activeTab === 2 ? 'block' : 'none' }}>
                <Image
                  className={styles.Vector3}
                  alt="Vector"
                  src="https://c.animaapp.com/WvDHYKDy/img/vector-1.svg"
                  width={20}
                  height={7}
                />
              </div>
            </div>
          </div>
          {/* <CommonImage
            src={'logo.svg'}
            style={{ width: 180, height: 54, cursor: 'pointer', position: 'absolute', left: 0 }}
            alt="portkeyLogo"
            onClick={() => jumpOrScrollToTop(ROUTER.DEFAULT)}
            priority
          />
          <CommonButton
            type="primaryOutline"
            className={styles.downloadButton}
            onClick={() => scrollToWithOffset('download', 102)}>
            Download
          </CommonButton> */}
        </div>
      </header>
      <CommonImage
        src={'logo.svg'}
        className={styles.leftLogo}
        alt="portkeyLogo"
        onClick={() => jumpOrScrollToTop(ROUTER.DEFAULT)}
        priority
      />
      <div className={styles.downloadButtonContainer}>
        <CommonButton
          type="primaryOutline"
          className={styles.downloadButton}
          onClick={() => scrollToWithOffset('download', 102)}>
          Download
        </CommonButton>
        <div className={styles.menu}>
          <CustomSvg type={'menu'} />
        </div>
      </div>
    </>
  );
}
