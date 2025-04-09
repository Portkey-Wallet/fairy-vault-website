import { iconCorrect, iconLock, iconFault, iconUnlock } from 'assets/images';
import clsx from 'clsx';
import CommonImage from 'components/CommonImage';
import styles from './styles.module.less';

export default function DownloadSSLTip({
  className,
  tip,
  tipLink,
}: {
  className?: string;
  tip: string;
  tipLink: string;
}) {
  return (
    <div className={clsx([styles.sslTip, className])}>
      <div className={styles.tipContent}>
        <span className={styles.tipSign}>{`* `}</span>
        <span>{tip}</span>
      </div>
      <div className={styles.tipLinkWrap}>
        <div className={clsx([styles.tipLinkExample, styles.tipLinkExampleCorrect])}>
          <div className={styles.iconCorrect}>
            <CommonImage
              src={iconCorrect}
              style={{ width: 14, height: 14, position: 'absolute', top: -2, left: 0 }}
              alt="Correct"
              priority
            />
          </div>
          <div className={'flex-row-center'}>
            <div className={styles.iconLock}>
              <CommonImage
                className="margin-auto"
                src={iconLock}
                style={{ width: 28, height: 28 }}
                alt="lock"
                priority
              />
            </div>

            <div className={styles.tipLink}>{tipLink}</div>
          </div>
        </div>
        <div className={clsx([styles.tipLinkExample, styles.tipLinkExampleFault])}>
          <CommonImage
            className={styles.iconFault}
            src={iconFault}
            style={{ width: 14, height: 14, position: 'absolute', top: -2, left: 0 }}
            alt="Fault"
            priority
          />
          <div className={styles.iconUnlock}>
            <CommonImage
              src={iconUnlock}
              className="margin-auto"
              style={{ width: 28, height: 28 }}
              alt="unlock"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
