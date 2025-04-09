import { Button } from 'antd';
import clsx from 'clsx';
import { useGoDownload } from 'hooks/useGoPageOrRefresh';
import styles from './styles.module.less';

export default function DownloadForOthersButton({ downloadForOthersBtnClassName }: Record<string, string>) {
  return (
    <Button
      type="dashed"
      className={clsx([styles.downloadForOthersBtn, downloadForOthersBtnClassName])}
      onClick={useGoDownload}>
      Download for Others
    </Button>
  );
}
