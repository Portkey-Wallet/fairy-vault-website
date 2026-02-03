import clsx from 'clsx';
import CommonImage from 'components/CommonImage';
import CommonButton from 'components/CommonButton';
import styles from './styles.module.less';

export interface IDownloadPageHeaderProps {
  className?: string;
}

export default function DownloadPageHeader({ className }: IDownloadPageHeaderProps) {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <>
      <header
        className={clsx([
          'flex-row-between',
          'section-container-48',
          styles.navSticky,
          styles.navHeader,
          className,
        ])}>
        <div className={clsx([styles.headerContent])}>
          <CommonImage
            src={'logo.svg'}
            className={styles.logo}
            alt="FairyVault Logo"
            onClick={handleBackToHome}
            priority
          />
          <CommonButton
            type="primaryOutline"
            className={styles.backButton}
            onClick={handleBackToHome}>
            Back to Home
          </CommonButton>
        </div>
      </header>
    </>
  );
}
