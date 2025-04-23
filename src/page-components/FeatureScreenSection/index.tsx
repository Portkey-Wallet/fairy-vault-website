import clsx from 'clsx';
import styles from './styles.module.less';
import IntroductionSection from './IntroductionSection';
import {
  addAd,
  faceId,
  cloudDone,
  featureSecurity,
  barChart4Bars,
  databaseSearch,
  swapThin,
  featureManagement,
  hub,
  extension,
  offlineBolt,
  featureEarth,
} from 'assets/images';
import { Divider } from 'antd';
import CustomSvg from 'components/CustomSvg';
import { useState } from 'react';

export default function FeatureScreenSection({ featuresRef }: { featuresRef: React.RefObject<HTMLDivElement> }) {
  const [isAelfScanHovered, setIsAelfScanHovered] = useState(false);

  return (
    <section id="features" className={clsx([styles.featureSection])} ref={featuresRef}>
      <div className={styles.featureSectionWrapper}>
        <div className={clsx(styles.featureSectionTop)}>
          <h1 className={styles.featureTitle}>Everything you need in one wallet</h1>
          <IntroductionSection
            title={'Robust security'}
            contentData={[
              { icon: addAd, description: 'Create or import wallets easily' },
              { icon: faceId, description: 'Face ID, fingerprint, or PIN authentication' },
              { icon: cloudDone, description: 'Secure backup options via seed phrases or cloud storage' },
            ]}
            icon={featureSecurity}
          />
          <Divider
            style={{
              height: 48,
            }}
            type="vertical"
          />
          <IntroductionSection
            title={'Fuss-free asset management'}
            contentData={[
              { icon: barChart4Bars, description: 'Simple, intuitive dashboard' },
              { icon: databaseSearch, description: 'View tokens, NFTs, and transaction history' },
              { icon: swapThin, description: 'Send, receive, and swap assets in seconds' },
            ]}
            icon={featureManagement}
          />
          <Divider
            style={{
              height: 48,
            }}
            type="vertical"
          />
          <IntroductionSection
            title={'Robust security'}
            contentData={[
              { icon: hub, description: 'Create or import wallets easily' },
              { icon: extension, description: 'Face ID, fingerprint, or PIN authentication' },
              { icon: offlineBolt, description: 'Secure backup options via seed phrases or cloud storage' },
            ]}
            icon={featureEarth}
          />
        </div>
        {/* <IntroductionSection title={'456'} contentData={[]} icon={undefined} /> */}
        {/* <IntroductionSection title={'789'} contentData={[]} icon={undefined} /> */}
        <h2 className={styles.featureSubTitle}>Built for the aelf ecosystem</h2>
        {/* <div className={clsx('flex-row-start', styles.flexWrap)}>
          <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
            <CustomSvg type={'portkeyEntry'} className={styles.dappIconSvg} />
          </div>
          <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
            <CustomSvg type={'awakenEntry'} className={styles.dappIconSvg} />
          </div>
          <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
            <CustomSvg type={'EtransferEntry'} className={clsx([styles.etransferIconStyle])} />
          </div>
          <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
            <CustomSvg type={'forestEntry'} className={styles.forestIconStyle} />
          </div>
        </div>
        <div className={clsx('flex-row-start', styles.flexWrap)}>
          <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
            <CustomSvg type={'schrodingerEntry'} className={styles.dappIconSvg} />
          </div>
          <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
            <CustomSvg type={'tmrwDaoEntry'} className={styles.tmrwDaoIconStyle} />
          </div>
          <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
            <CustomSvg type={'aeFinderEntry'} className={styles.aeFinderIconStyle} />
          </div>
          <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
            <CustomSvg
              type={isAelfScanHovered ? 'aelfScanHoverIcon' : 'aelfScanEntry'}
              className={styles.aelfScanIconStyle}
              onMouseEnter={() => setIsAelfScanHovered(true)}
              onMouseLeave={() => setIsAelfScanHovered(false)}
            />
          </div>
        </div> */}
        <div className={clsx(styles.gridContainer)}>
          <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
            <CustomSvg type={'portkeyEntry'} className={styles.dappIconSvg} />
          </div>
          <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
            <CustomSvg type={'awakenEntry'} className={styles.dappIconSvg} />
          </div>
          <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
            <CustomSvg type={'EtransferEntry'} className={clsx([styles.etransferIconStyle])} />
          </div>
          <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
            <CustomSvg type={'forestEntry'} className={styles.forestIconStyle} />
          </div>
          <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
            <CustomSvg type={'schrodingerEntry'} className={styles.dappIconSvg} />
          </div>
          <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
            <CustomSvg type={'tmrwDaoEntry'} className={styles.tmrwDaoIconStyle} />
          </div>
          <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
            <CustomSvg type={'aeFinderEntry'} className={styles.aeFinderIconStyle} />
          </div>
          <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
            <CustomSvg
              type={isAelfScanHovered ? 'aelfScanHoverIcon' : 'aelfScanEntry'}
              className={styles.aelfScanIconStyle}
              onMouseEnter={() => setIsAelfScanHovered(true)}
              onMouseLeave={() => setIsAelfScanHovered(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
