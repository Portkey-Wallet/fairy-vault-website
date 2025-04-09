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
  portkeyEntry,
  awakenEntry,
  EtransferEntry,
  forestEntry,
  schrodingerEntry,
  tmrwDaoEntry,
  aeFinderEntry,
  aelfScanEntry,
} from 'assets/images';
import { Divider } from 'antd';
import CommonImage from 'components/CommonImage';
import { ReactSVG } from 'react-svg';
import CustomSvg from 'components/CustomSvg';
console.log('wfs == portkeyEntry', portkeyEntry);
export default function FeatureScreenSection() {
  return (
    <section className={clsx(['section-container-80', styles.featureSection])}>
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
      {/* <IntroductionSection title={'456'} contentData={[]} icon={undefined} /> */}
      {/* <IntroductionSection title={'789'} contentData={[]} icon={undefined} /> */}
      <h2 className={styles.featureSubTitle}>Built for the aelf ecosystem</h2>
      <div className="flex-row-start">
        <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
          <CustomSvg type={'portkeyEntry'} className={styles.dappIconSvg} />
        </div>
        <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
          <CustomSvg type={'awakenEntry'} className={styles.dappIconSvg} />
        </div>
        <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
          <CustomSvg type={'EtransferEntry'} className={styles.dappIconSvg} />
        </div>
        <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
          <CustomSvg type={'forestEntry'} className={styles.dappIconSvg} />
        </div>
      </div>
      <div className="flex-row-start">
        <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
          <CustomSvg type={'schrodingerEntry'} className={styles.dappIconSvg} />
        </div>
        <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
          <CustomSvg type={'tmrwDaoEntry'} className={styles.dappIconSvg} />
        </div>
        <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
          <CustomSvg type={'aeFinderEntry'} className={styles.dappIconSvg} />
        </div>
        <div className={clsx([styles.dappIcon, 'flex-row-center-center'])}>
          <CustomSvg type={'aelfScanEntry'} className={styles.dappIconSvg} />
        </div>
      </div>
    </section>
  );
}
