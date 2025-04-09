import clsx from 'clsx';
import { IDAppItem } from 'types/home';
import CommonImage from 'components/CommonImage';
import { openWithBlank } from 'utils/router';
import { s3Url } from 'constants/network';
import styles from './styles.module.less';

export default function DAppSection({ title, dAppList }: { title?: string; dAppList?: IDAppItem[] }) {
  return (
    <section className={clsx('flex-column-center', styles.dAppSectionWrap)}>
      <div className={styles.title}>{title}</div>
      <div className={clsx('flex-center', styles.dAppWrap)}>
        {dAppList?.map(({ dApp_id: item }) => {
          return (
            <div
              key={item.id}
              className={clsx('row-center', 'cursor-pointer', styles.logoWrap)}
              onClick={() => {
                if (item.url) {
                  openWithBlank(item.url);
                }
              }}>
              <CommonImage className={styles.logo} src={s3Url + item?.logo?.filename_disk} objectFit="contain" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
