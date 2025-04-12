import { tickIcon } from 'assets/images';
import clsx from 'clsx';
import CommonImage from 'components/CommonImage';
import { DEVICE_TYPE } from 'constants/enum';
import { firstScreenData } from 'constants/homeData';
import { DownloadGroupHeaderForHomePage } from 'page-components/DownloadGroupForHomePage';
import RowDescription from 'page-components/RowDescription';
import styles from './styles.module.less';
import { motion, AnimatePresence, useScroll, useTransform, useAnimationControls, Variants, useSpring } from 'framer-motion';
import {
  headerContainerBg,
  floatIcon1,
  floatIcon2,
  floatIcon3,
  verified,
  appstoreAndroid,
  appstoreIos,
  phoneContainer,
  eoaScreen1,
  eoaScreen2,
  eoaScreen3,
  ScreenHome,
  ScreenFirst,
  ScreenSecond,
  ScreenThird
} from 'assets/images';
import Image from 'next/image';
import CommonButton from 'components/CommonButton';
import { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';
import CustomSvg from 'components/CustomSvg';
import { INITIAL, variantLeftToRight, VIEWPORT, WHILE_IN_VIEW } from 'constants/motion';
const screens = [
  { id: 1, src: ScreenHome },
  { id: 2, src: ScreenFirst },
  { id: 3, src: ScreenSecond },
  { id: 3, src: ScreenThird }
]
const variantTitle = (delayBase: number): Variants => {
  return {
    close: {
      height: 0,
    },
    open: {
      height: 'auto',
      transition: {
        type: 'spring',
        duration: 0.5,
        delay: delayBase * 0.1,
      },
    },
  };
};
const variantSubtitle = (delayBase: number): Variants => {
  return {
    close: {
      marginTop: 0,
    },
    open: {
      marginTop: 24,
      transition: {
        type: 'spring',
        duration: 0.5,
        delay: delayBase * 0.1,
      },
    },
  };
};
export default function FirstScreenSection({
  type,
  focusImg,
  chromeStoreUrl,
  iosStoreUrl,
  androidStoreUrl,
  apkS3Url,
}: {
  type: DEVICE_TYPE;
  focusImg: string;
  chromeStoreUrl: string;
  iosStoreUrl: string;
  androidStoreUrl: string;
  apkS3Url: string;
}) {
  const [vh100, setVh100] = useState(0)
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null)
  const { scrollY: scrollYMotion } = useScroll()

  // const [viewport, setViewport] = useState({ height: 0, width: 0 })
  
  const [screenStack, setScreenStack] = useState<number[]>([0]);
  const [direction, setDirection] = useState<'up'|'down'>('down');

  const heightProgress1 = useTransform(scrollYMotion, [0, 940, 940 + vh100*0.1, 940 + vh100*1.4, 940 + vh100 * 1.5], [0, 0, 114, 114, 0])
  const dynamicHeight1 = useTransform(heightProgress1, value => 
    value === 114 ? "auto" : `${value}px`
  )
  const smoothDynamicHeight1 = useSpring(heightProgress1, {
    stiffness: 100,
    damping: 30,
    duration: 1
  })
  const marginTop1 = useTransform(scrollYMotion, [0, 940, 940 + vh100*0.1, 940 + vh100*1.4, 940 + vh100 * 1.5], [0, 0, 24, 24, 0])
  const smoothMargin1 = useSpring(marginTop1, {
    stiffness: 100,
    damping: 30,
    duration: 1
  })

  const heightProgress2 = useTransform(scrollYMotion, [940 + vh100 * 1.5, 940 + vh100 * 1.6, 940 + vh100*2.9, 940 + vh100 * 3], [0, 114, 114, 0])
  const dynamicHeight2 = useTransform(heightProgress2, value => 
    value === 114 ? "auto" : `${value}px`
  )
  const marginTop2 = useTransform(scrollYMotion, [940 + vh100 * 1.5, 940 + vh100 * 1.6, 940 + vh100*2.9, 940 + vh100 * 3], [0, 24, 24, 0])

  const heightProgress3 = useTransform(scrollYMotion, [940 + vh100 * 3, 940 + vh100 * 3.1, 940 + vh100*4.4, 940 + vh100 * 4.5], [0, 114, 114, 0])
  const dynamicHeight3 = useTransform(heightProgress3, value => 
    value === 114 ? "auto" : `${value}px`
  )
  const marginTop3 = useTransform(scrollYMotion, [940 + vh100 * 3, 940 + vh100 * 3.1, 940 + vh100*4.4, 940 + vh100 * 4.5], [0, 24, 24, 0])

  useEffect(() => {
    const calculateVh = () => {
      const viewportHeight = window.innerHeight
      setVh100(viewportHeight)
      // setViewport({
      //   height: window.innerHeight,
      //   width: window.innerWidth
      // })
    }
    
    calculateVh()
    window.addEventListener('resize', calculateVh)
    return () => window.removeEventListener('resize', calculateVh)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    const debouncedScroll = throttle(handleScroll, 50);
    window.addEventListener('scroll', debouncedScroll);
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, []);

  const screenIndex = useTransform(scrollYMotion, 
    [0, 940, 940 + vh100*0.1, 940 + vh100*1.5,  940 + vh100*1.6,  940 + vh100*3,  940 + vh100*3.1,  940 + vh100*4.5],
    [0, 0, 1, 1, 2, 2, 3, 3],
    { clamp: true }
  )
  useEffect(() => {
    const unsubscribe = screenIndex.onChange(latest => {
      const indexNow= Math.floor(latest)
      const lastElement = screenStack[screenStack.length - 1];
      if(lastElement === indexNow) {
        return;
      }
      if (lastElement < indexNow) {
        setScreenStack(prev => [...prev, Math.floor(latest)]);
        setDirection('down');
      } else {
        setScreenStack(prev => prev.slice(0, -1));
        setDirection('up');
      }
    })
    return () => unsubscribe()
  }, [screenIndex, screenStack])

  const springConfig = {
    stiffness: 150,
    damping: 30,
    mass: 0.5
  }

  return (
    <>
    <section id="home" className={clsx(['section-container', styles.firstScreenSectionWrap])}>
      <div className={styles.headerContainer}>
        <div>
          <div className={clsx('flex-row-center-center', styles.containerKeywords)}>
            <CommonImage src={verified} className={styles.iconVerify} />
            <span className={styles.headerKeywords}>Magical,Secure,Effortless</span>
          </div>
        </div>
        <h1 className={styles.headerTitle}>Your ultimate gateway to Web3</h1>
        <span className={styles.headerSubtitle}>
          With FairyVault, you gain complete control over your aelf blockchain assets, ensuring top-level security while
          easily navigating the decentralised world.
        </span>
        <div className={clsx('flex-row-center-center', 'margin-top-64', 'gap-24')}>
          <div
            className={clsx('flex-row-center-center', styles.containerAppStore)}
            onClick={() => {
            }}>
            <div className="flex-row-center-center">
              <CommonImage src={appstoreIos} className={styles.appStoreIcon} />
              <span className={styles.appStoreText}>Download for iOS</span>
            </div>
          </div>
          <div
            className={clsx('flex-row-center-center', styles.containerAppStore)}
            onClick={() => {
            }}>
            <CommonImage src={appstoreAndroid} className={styles.appStoreIcon} />
            <div className={styles.appStoreText}>Download for Android</div>
          </div>
        </div>
      </div>
      <CommonImage src={headerContainerBg} className={styles.headerContainerBg} />
      <CommonImage src={floatIcon1} className={clsx(styles.floatIcon1, styles.iconFloating)} />
      <CommonImage src={floatIcon2} className={clsx(styles.floatIcon2, styles.iconFloating)} />
      <CommonImage src={floatIcon3} className={clsx(styles.floatIcon3, styles.iconFloating)} />
    </section>
    <section className={styles.phoneAndCarContainer}  ref={sectionRef}>
      <div className={clsx(styles.phoneChangeContainer)}>
        <motion.div className={styles.leftPart}    variants={variantLeftToRight(2)}
              initial={INITIAL}
              whileInView={WHILE_IN_VIEW}
              viewport={VIEWPORT}>
            {/* 卡片组件 */}
            <AnimatePresence>
              <motion.div>
                <div className={styles.phoneFeatureContainer}>
                  <div>
                    <motion.h1 className={styles.phoneFeatureTitle} style={{
                      height: dynamicHeight1,
                    }} transition={{
                      duration: 10
                    }}>Create or import your wallet in seconds</motion.h1>
                    <motion.span className={styles.phoneFeatureSubtitle} style={{
                      marginTop: smoothMargin1,
                    }} transition={{
                      duration: 10
                    }}>Instant Wallet Access</motion.span>
                  </div>
                  <CustomSvg type="keyIcon" className={styles.phoneFeatureIcon}/>
                </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div>
                <div className={styles.phoneFeatureContainer}>
                  <div>
                    <motion.h1 className={styles.phoneFeatureTitle} style={{
                      height: dynamicHeight2,
                    }}>Secure your wallet with biometric authentication</motion.h1>
                    <motion.span className={styles.phoneFeatureSubtitle} style={{
                      marginTop: marginTop2,
                    }}>Biometric Security</motion.span>
                  </div>
                  <CustomSvg type="faceIdIcon" className={styles.phoneFeatureIcon}/>
                </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div>
                <div className={styles.phoneFeatureContainer}>
                  <div>
                    <motion.h1 className={styles.phoneFeatureTitle} style={{
                      height: dynamicHeight3,
                    }}>Start exploring the Web3 ecosystem</motion.h1>
                    <motion.span className={styles.phoneFeatureSubtitle} style={{
                      marginTop: marginTop3,
                    }}>Explore Web3</motion.span>
                  </div>
                  <CustomSvg type='connectSiteIcon' className={styles.phoneFeatureIcon}/>
                </div>
              </motion.div>
            </AnimatePresence>
        </motion.div>
        <motion.div
          style={{
            width: 480,
            height: 976,
            top: 0,
            position: 'sticky',
            // scale: useTransform(scrollYProgress, [0, 1060], [1, 0.5]),
            // // scale: scrollYProgress,
            // x: scrollYProgress,
            // y: useTransform(progress1, [0, 1], ["0%", "-10%"]),
          }}
          animate={{
            x: scrollY / 2 > 240 ? 240 : scrollY / 2,
            scale: 1 - scrollY / 1000 < 0.75 ? 0.75 : 1 - scrollY / 1000,
          }}
          transition={{ type: 'spring', stiffness: 50 }}
          >
          <CommonImage
            src={phoneContainer}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <div style={{
            position: 'absolute',
            width: 430,
            height: '95%',
            top: 23,
            left: 25,
            borderRadius: 30,
            overflow: 'hidden'
          }}>
            <AnimatePresence>
              {screens.map((screen, index) => {
                const isInStack = screenStack.includes(index);
                const stackPosition = screenStack.indexOf(index);
                
                return isInStack && (
                  <motion.div
                    key={`${screen.id}-${index}`}
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      zIndex: stackPosition * 10,
                      backgroundColor: 'transparent'
                    }}
                    initial={
                      direction === 'down' 
                        ? { y: '100%', opacity: 0 } 
                        : { y: '-20%', opacity: 0.7 }
                    }
                    animate={{ 
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 300,
                        damping: 30
                      }
                    }}
                    exit={
                      direction === 'up'
                        ? { 
                            y: '100%', 
                            opacity: 0,
                            transition: {
                              ease: 'easeInOut',
                              duration: 0.3
                            }
                          }
                        : { 
                            y: '-20%', 
                            opacity: 0,
                            transition: {
                              ease: 'easeInOut',
                              duration: 0.2
                            }
                          }
                    }
                  >
                    <CommonImage
                      src={screen.src}
                      imageCls={styles.imgRadius}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
