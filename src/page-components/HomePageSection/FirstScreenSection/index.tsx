import clsx from 'clsx';
import CommonImage from 'components/CommonImage';
import styles from './styles.module.less';
import { motion, AnimatePresence, useScroll, useTransform, Variants, useSpring } from 'framer-motion';
import {
  headerContainerBg,
  floatIcon1,
  floatIcon2,
  floatIcon3,
  verified,
  appstoreAndroid,
  appstoreIos,
  phoneContainer,
  ScreenHome,
  ScreenFirst,
  ScreenSecond,
  ScreenThird,
} from 'assets/images';
import { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';
import CustomSvg from 'components/CustomSvg';
import { INITIAL, variantLeftToRight, VIEWPORT, WHILE_IN_VIEW } from 'constants/motion';
import useMediaQuery from 'hooks/useMediaQuery';
const screens = [
  { id: 1, src: ScreenHome },
  { id: 2, src: ScreenFirst },
  { id: 3, src: ScreenSecond },
  { id: 3, src: ScreenThird },
];
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
export default function FirstScreenSection({ homeRef }: { homeRef: React.RefObject<HTMLDivElement> }) {
  const [vh100, setVh100] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const { scrollY: scrollYMotion } = useScroll();
  const isPadOrMobile = useMediaQuery('(max-width: 1023px)');

  // const [viewport, setViewport] = useState({ height: 0, width: 0 })
  const [screenStack, setScreenStack] = useState<number[]>([0]);
  const [direction, setDirection] = useState<'up' | 'down'>('down');

  const translateYPercent = useTransform(
    scrollYMotion,
    [0, 940, 940 + vh100 * 0.3, 940 + vh100 * 0.5, 940 + vh100 * 1, 940 + vh100 * 1.2, 940 + vh100 * 1.5],
    [0, 0, 0, 40, 40, 0, 0],
  );
  const dynamicTranslateYPercent1 = useTransform(translateYPercent, (value) => value - 40);
  const heightProgress1 = useTransform(
    scrollYMotion,
    [0, 940, 940 + vh100 * 0.5, 940 + vh100 * 1, 940 + vh100 * 1.5],
    [0, 0, 114, 114, 0],
  );
  const opacity1 = useTransform(
    scrollYMotion,
    [0, 940, 940 + vh100 * 0.3, 940 + vh100 * 1, 940 + vh100 * 1.3, 940 + vh100 * 1.5],
    [0, 0, 0, 1, 0, 0],
  );
  const dynamicHeight1 = useTransform(heightProgress1, (value) => (value === 114 ? 'auto' : `${value}px`));
  const marginTop1 = useTransform(
    scrollYMotion,
    [0, 940, 940 + vh100 * 0.5, 940 + vh100 * 1, 940 + vh100 * 1.5],
    [0, 0, 24, 24, 0],
  );
  const smoothMargin1 = useSpring(marginTop1, {
    stiffness: 100,
    damping: 30,
    duration: 1,
  });

  const translateYPercent2 = useTransform(
    scrollYMotion,
    [940 + vh100 * 1.5, 940 + vh100 * 1.8, 940 + vh100 * 2, 940 + vh100 * 2.5, 940 + vh100 * 2.7, 940 + vh100 * 3],
    [0, 0, 40, 40, 0, 0],
  );
  const dynamicTranslateYPercent2 = useTransform(translateYPercent2, (value) => value - 40);
  const heightProgress2 = useTransform(
    scrollYMotion,
    [940 + vh100 * 1.5, 940 + vh100 * 2, 940 + vh100 * 2.5, 940 + vh100 * 3],
    [0, 114, 114, 0],
  );
  const opacity2 = useTransform(
    scrollYMotion,
    [940 + vh100 * 1.5, 940 + vh100 * 1.8, 940 + vh100 * 2.5, 940 + vh100 * 2.8, 940 + vh100 * 3],
    [0, 0, 1, 0, 0],
  );
  const dynamicHeight2 = useTransform(heightProgress2, (value) => (value === 114 ? 'auto' : `${value}px`));
  const marginTop2 = useTransform(
    scrollYMotion,
    [940 + vh100 * 1.5, 940 + vh100 * 2, 940 + vh100 * 2.5, 940 + vh100 * 3],
    [0, 24, 24, 0],
  );

  const translateYPercent3 = useTransform(
    scrollYMotion,
    [940 + vh100 * 3, 940 + vh100 * 3.3, 940 + vh100 * 3.5, 940 + vh100 * 4, 940 + vh100 * 4.2, 940 + vh100 * 4.5],
    [0, 0, 40, 40, 0, 0],
  );
  const dynamicTranslateYPercent3 = useTransform(translateYPercent3, (value) => value - 40);
  const heightProgress3 = useTransform(
    scrollYMotion,
    [940 + vh100 * 3, 940 + vh100 * 3.5, 940 + vh100 * 4, 940 + vh100 * 4.5],
    [0, 76, 76, 0],
  );
  const opacity3 = useTransform(
    scrollYMotion,
    [940 + vh100 * 3, 940 + vh100 * 3.3, 940 + vh100 * 4, 940 + vh100 * 4.3, 940 + vh100 * 4.5],
    [0, 0, 1, 0, 0],
  );
  const dynamicHeight3 = useTransform(heightProgress3, (value) => (value === 76 ? 'auto' : `${value}px`));
  const marginTop3 = useTransform(
    scrollYMotion,
    [940 + vh100 * 3, 940 + vh100 * 3.5, 940 + vh100 * 4, 940 + vh100 * 4.5],
    [0, 24, 24, 0],
  );

  useEffect(() => {
    const calculateVh = () => {
      const viewportHeight = window.innerHeight;
      setVh100(viewportHeight);
    };

    calculateVh();
    window.addEventListener('resize', calculateVh);
    return () => window.removeEventListener('resize', calculateVh);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    const debouncedScroll = throttle(handleScroll, 50);
    window.addEventListener('scroll', debouncedScroll);
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, []);

  const screenIndex = useTransform(
    scrollYMotion,
    [
      0,
      940,
      940 + vh100 * 0.1,
      940 + vh100 * 1.5,
      940 + vh100 * 1.6,
      940 + vh100 * 3,
      940 + vh100 * 3.1,
      940 + vh100 * 4.5,
    ],
    [0, 0, 1, 1, 2, 2, 3, 3],
    { clamp: true },
  );
  useEffect(() => {
    const unsubscribe = screenIndex.onChange((latest) => {
      const indexNow = Math.floor(latest);
      const lastElement = screenStack[screenStack.length - 1];
      if (lastElement === indexNow) {
        return;
      }
      if (lastElement < indexNow) {
        setScreenStack((prev) => [...prev, Math.floor(latest)]);
        setDirection('down');
      } else {
        setScreenStack((prev) => prev.slice(0, -1));
        setDirection('up');
      }
    });
    return () => unsubscribe();
  }, [screenIndex, screenStack]);
  console.log('wfs direction', direction);
  const springConfig = {
    stiffness: 150,
    damping: 30,
    mass: 0.5,
  };
  // useEffect(() => {
  //   translateYPercent.onChange((value) => {
  //     console.log('WFS translateYPercent:', value);
  //   });
  //   heightProgress1.onChange((value) => {
  //     console.log('WFS heightProgress1:', value);
  //   });
  //   dynamicTranslateYPercent1.onChange((value) => {
  //     console.log('WFS dynamicTranslateYPercent1:', value);
  //   });
  // }, [heightProgress1, translateYPercent, dynamicTranslateYPercent1]);
  return (
    <>
      <section id="home" className={clsx(['section-container', styles.firstScreenSectionWrap])} ref={homeRef}>
        <CommonImage src={headerContainerBg} className={styles.headerContainerBg} />
        <div className={styles.headerContainer}>
          <div>
            <div className={clsx('flex-row-center-center', styles.containerKeywords)}>
              <CommonImage src={verified} className={styles.iconVerify} />
              <span className={styles.headerKeywords}>Magical, Secure, Effortless</span>
            </div>
          </div>
          <h1 className={styles.headerTitle}>Your ultimate gateway to Web3</h1>
          <span className={styles.headerSubtitle}>
            With FairyVault, you gain complete control over your aelf blockchain assets, ensuring top-level security
            while easily navigating the decentralised world.
          </span>
          <div className={clsx('flex-row-center-center', 'margin-top-64', 'gap-24', styles.downloadButtonContainer)}>
            <div className={clsx('flex-row-center-center', styles.containerAppStore)} onClick={() => {}}>
              <div className="flex-row-center-center">
                <CommonImage src={appstoreIos} className={styles.appStoreIcon} />
                <span className={styles.appStoreText}>Download for iOS</span>
              </div>
            </div>
            <div
              className={clsx('flex-row-center-center', styles.containerAppStore)}
              onClick={() => {
                window.open('https://play.google.com/store/apps/details?id=com.portkey.fairyvault', '_blank');
              }}>
              <CommonImage src={appstoreAndroid} className={styles.appStoreIcon} />
              <div className={styles.appStoreText}>Download for Android</div>
            </div>
          </div>
        </div>
        <CommonImage src={floatIcon1} className={clsx(styles.floatIcon1, styles.iconFloating)} />
        <CommonImage src={floatIcon2} className={clsx(styles.floatIcon2, styles.iconFloating)} />
        <CommonImage src={floatIcon3} className={clsx(styles.floatIcon3, styles.iconFloating)} />
      </section>
      {isPadOrMobile ? (
        <section className={styles.phoneAndCarMobileContainer}>
          <motion.div
            className={styles.leftPart}
            variants={variantLeftToRight(2)}
            initial={INITIAL}
            whileInView={WHILE_IN_VIEW}
            viewport={VIEWPORT}>
            <motion.div className={styles.mobileTopContainer}>
              <CommonImage
                src={phoneContainer}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
              <div className={styles.mobileScreenImg}>
                <AnimatePresence>
                  <motion.div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'transparent',
                    }}>
                    <CommonImage
                      src={ScreenHome}
                      imageCls={styles.imgRadius}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
            <AnimatePresence>
              <motion.div exit={{ opacity: 0 }} className="flex-row-center-center">
                <div className={styles.phoneFeatureContainer}>
                  <div>
                    <motion.h1
                      className={styles.phoneFeatureTitle}
                      style={{
                        height: 'auto',
                        opacity: 1,
                        // y: dynamicTranslateYPercent1,
                        // overflow: 'visible',
                      }}
                      transition={{
                        ease: 'easeInOut',
                      }}>
                      Create or import your wallet in seconds
                    </motion.h1>
                    <motion.span
                      className={styles.phoneFeatureSubtitle}
                      style={{
                        marginTop: 24,
                      }}
                      transition={{
                        ease: 'easeInOut',
                      }}>
                      Instant Wallet Access
                    </motion.span>
                  </div>
                  <CustomSvg type="keyIcon" className={styles.phoneFeatureIcon}/>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div className="flex-row-center-center">
                <div className={styles.phoneFeatureContainer}>
                  <div>
                    <motion.h1
                      className={styles.phoneFeatureTitle}
                      style={{
                        height: 'auto',
                        opacity: 1,
                        // y: dynamicTranslateYPercent2,
                        // overflow: 'visible',
                      }}
                      transition={{
                        ease: 'easeInOut',
                      }}>
                      Secure your wallet with biometric authentication
                    </motion.h1>
                    <motion.span
                      className={styles.phoneFeatureSubtitle}
                      style={{
                        marginTop: 24,
                      }}
                      transition={{
                        ease: 'easeInOut',
                      }}>
                      Biometric Security
                    </motion.span>
                  </div>
                  <CustomSvg type="faceIdIcon" className={styles.phoneFeatureIcon}/>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div className="flex-row-center-center">
                <div className={styles.phoneFeatureContainer}>
                  <div>
                    <motion.h1
                      className={styles.phoneFeatureTitle}
                      style={{
                        height: 'auto',
                        opacity: 1,
                        // y: dynamicTranslateYPercent3,
                        // overflow: 'visible',
                      }}
                      transition={{
                        ease: 'easeInOut',
                      }}>
                      Start exploring the Web3 ecosystem
                    </motion.h1>
                    <motion.span
                      className={styles.phoneFeatureSubtitle}
                      style={{
                        marginTop: 24,
                      }}
                      transition={{
                        ease: 'easeInOut',
                      }}>
                      Explore Web3
                    </motion.span>
                  </div>
                  <CustomSvg type="connectSiteIcon" className={styles.phoneFeatureIcon} />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </section>
      ) : (
        <section className={styles.phoneAndCarContainer}>
          <div className={clsx(styles.phoneChangeContainer)}>
            <div
              style={{
                position: 'absolute',
                top: '50svh',
                left: '50svw',
                width: 20,
                height: 20,
                transform: 'translate(-50%, -50%)',
                background: 'transparent',
              }}>
              <motion.div
                className={styles.leftPart1}
                variants={variantLeftToRight(2)}
                initial={INITIAL}
                whileInView={WHILE_IN_VIEW}
                viewport={VIEWPORT}>
                <AnimatePresence>
                  <motion.div exit={{ opacity: 0 }}>
                    <div className={styles.phoneFeatureContainer}>
                      <div>
                        <motion.h1
                          className={styles.phoneFeatureTitle}
                          style={{
                            height: dynamicHeight1,
                            opacity: opacity1,
                            y: dynamicTranslateYPercent1,
                            overflow: 'visible',
                          }}
                          transition={{
                            ease: 'easeInOut',
                          }}>
                          Create or import your wallet in seconds
                        </motion.h1>
                        <motion.span
                          className={styles.phoneFeatureSubtitle}
                          style={{
                            marginTop: smoothMargin1,
                          }}
                          transition={{
                            ease: 'easeInOut',
                          }}>
                          Instant Wallet Access
                        </motion.span>
                      </div>
                      <CustomSvg type="keyIcon" className={styles.phoneFeatureIcon}/>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence>
                  <motion.div>
                    <div className={styles.phoneFeatureContainer}>
                      <div>
                        <motion.h1
                          className={styles.phoneFeatureTitle}
                          style={{
                            height: dynamicHeight2,
                            opacity: opacity2,
                            y: dynamicTranslateYPercent2,
                            overflow: 'visible',
                          }}
                          transition={{
                            ease: 'easeInOut',
                          }}>
                          Secure your wallet with biometric authentication
                        </motion.h1>
                        <motion.span
                          className={styles.phoneFeatureSubtitle}
                          style={{
                            marginTop: marginTop2,
                          }}
                          transition={{
                            ease: 'easeInOut',
                          }}>
                          Biometric Security
                        </motion.span>
                      </div>
                      <CustomSvg type="faceIdIcon" className={styles.phoneFeatureIcon}/>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence>
                  <motion.div>
                    <div className={styles.phoneFeatureContainer}>
                      <div>
                        <motion.h1
                          className={styles.phoneFeatureTitle}
                          style={{
                            height: dynamicHeight3,
                            opacity: opacity3,
                            y: dynamicTranslateYPercent3,
                            overflow: 'visible',
                          }}
                          transition={{
                            ease: 'easeInOut',
                          }}>
                          Start exploring the Web3 ecosystem
                        </motion.h1>
                        <motion.span
                          className={styles.phoneFeatureSubtitle}
                          style={{
                            marginTop: marginTop3,
                          }}
                          transition={{
                            ease: 'easeInOut',
                          }}>
                          Explore Web3
                        </motion.span>
                      </div>
                      <CustomSvg type="connectSiteIcon" className={styles.phoneFeatureIcon} />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
            {/* <motion.div
              className={styles.leftPart}
              variants={variantLeftToRight(2)}
              initial={INITIAL}
              whileInView={WHILE_IN_VIEW}
              viewport={VIEWPORT}>
              <AnimatePresence>
                <motion.div exit={{ opacity: 0 }}>
                  <div className={styles.phoneFeatureContainer}>
                    <div>
                      <motion.h1
                        className={styles.phoneFeatureTitle}
                        style={{
                          height: dynamicHeight1,
                          opacity: opacity1,
                          y: dynamicTranslateYPercent1,
                          overflow: 'visible',
                        }}
                        transition={{
                          ease: 'easeInOut',
                        }}>
                        Create or import your wallet in seconds
                      </motion.h1>
                      <motion.span
                        className={styles.phoneFeatureSubtitle}
                        style={{
                          marginTop: smoothMargin1,
                        }}
                        transition={{
                          ease: 'easeInOut',
                        }}>
                        Instant Wallet Access
                      </motion.span>
                    </div>
                    <CustomSvg type="keyIcon" className={styles.phoneFeatureIcon}/>
                  </div>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence>
                <motion.div>
                  <div className={styles.phoneFeatureContainer}>
                    <div>
                      <motion.h1
                        className={styles.phoneFeatureTitle}
                        style={{
                          height: dynamicHeight2,
                          opacity: opacity2,
                          y: dynamicTranslateYPercent2,
                          overflow: 'visible',
                        }}
                        transition={{
                          ease: 'easeInOut',
                        }}>
                        Secure your wallet with biometric authentication
                      </motion.h1>
                      <motion.span
                        className={styles.phoneFeatureSubtitle}
                        style={{
                          marginTop: marginTop2,
                        }}
                        transition={{
                          ease: 'easeInOut',
                        }}>
                        Biometric Security
                      </motion.span>
                    </div>
                    <CustomSvg type="faceIdIcon" className={styles.phoneFeatureIcon}/>
                  </div>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence>
                <motion.div>
                  <div className={styles.phoneFeatureContainer}>
                    <div>
                      <motion.h1
                        className={styles.phoneFeatureTitle}
                        style={{
                          height: dynamicHeight3,
                          opacity: opacity3,
                          y: dynamicTranslateYPercent3,
                          overflow: 'visible',
                        }}
                        transition={{
                          ease: 'easeInOut',
                        }}>
                        Start exploring the Web3 ecosystem
                      </motion.h1>
                      <motion.span
                        className={styles.phoneFeatureSubtitle}
                        style={{
                          marginTop: marginTop3,
                        }}
                        transition={{
                          ease: 'easeInOut',
                        }}>
                        Explore Web3
                      </motion.span>
                    </div>
                    <CustomSvg type="connectSiteIcon" className={styles.phoneFeatureIcon} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div> */}
            <motion.div
              style={{
                width: 480,
                height: 976,
                top: 0,
                position: 'relative',
                aspectRatio: 480 / 976,
                // scale: useTransform(scrollYProgress, [0, 1060], [1, 0.5]),
                // // scale: scrollYProgress,
                // x: scrollYProgress,
                // y: useTransform(progress1, [0, 1], ["0%", "-10%"]),
              }}
              animate={{
                x: scrollY / 2 > 300 ? 300 : scrollY / 2,
                scale: 1 - scrollY / 1000 < 0.75 ? 0.75 : 1 - scrollY / 1000,
              }}
              transition={{ type: 'spring', stiffness: 50 }}>
              <CommonImage
                src={phoneContainer}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  width: 430,
                  height: '95%',
                  top: 23,
                  left: 25,
                  borderRadius: 30,
                  overflow: 'hidden',
                }}>
                <AnimatePresence>
                  {screens.map((screen, index) => {
                    const isInStack = screenStack.includes(index);
                    const stackPosition = screenStack.indexOf(index);
                    return (
                      isInStack && (
                        <motion.div
                          key={`${screen.id}-${index}`}
                          style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            zIndex: stackPosition * 10,
                            backgroundColor: 'transparent',
                          }}
                          initial={direction === 'down' ? { y: '100%', opacity: 0 } : { y: '-20%', opacity: 0.7 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                              type: 'spring',
                              stiffness: 300,
                              damping: 30,
                            },
                          }}
                          exit={
                            direction === 'up'
                              ? {
                                  y: '100%',
                                  opacity: 0,
                                  transition: {
                                    ease: 'easeInOut',
                                    duration: 0.3,
                                  },
                                }
                              : {
                                  y: '-20%',
                                  opacity: 0,
                                  transition: {
                                    ease: 'easeInOut',
                                    duration: 0.2,
                                  },
                                }
                          }>
                          <CommonImage
                            src={screen.src}
                            imageCls={styles.imgRadius}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </motion.div>
                      )
                    );
                  })}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
