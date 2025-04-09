import LinkForBlank from 'page-components/LinkForBlank';
import styles from './styles.module.less';

export default function ActiveBanner() {
  return (
    <div className={styles.activeBanner}>
      <span>
        <span>{`📣 Join us for Hello [AI], a pre-TOKEN2049 party on 16 September! 🎉`}</span>
        <LinkForBlank href="https://lu.ma/pe14cn18" className={styles.linkText} element="RSVP here NOW!" />
      </span>
    </div>
  );
}
