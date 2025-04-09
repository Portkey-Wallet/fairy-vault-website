import { iconHourglass } from 'assets/images';
import clsx from 'clsx';
import CommonImage from 'components/CommonImage';
import LinkForBlank from 'page-components/LinkForBlank';
import styles from './styles.module.less';

export default function ComingSoonUI() {
  return (
    <div className={styles.comingSoonUI}>
      <div className={clsx([styles.comingSoonTitle, 'flex'])}>
        <CommonImage
          className={styles.iconHourglass}
          src={iconHourglass}
          style={{ width: 20, height: 20 }}
          alt="iconHourglass"
        />
        {`Coming soon!`}
      </div>
      <div className={styles.comingSoonContent}>
        <span>{`Please join `}</span>
        <LinkForBlank
          className={styles.joinLink}
          href="https://discord.gg/ZQrBtF29gx"
          ariaLabel="discord"
          element={`Portkey's Discord community`}
        />
        <span>{` to try out the beta version.`}</span>
      </div>
    </div>
  );
}
