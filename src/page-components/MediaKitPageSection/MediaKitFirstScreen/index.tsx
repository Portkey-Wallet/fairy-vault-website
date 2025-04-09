import clsx from 'clsx';
import { IMediaKitFirstScreen } from 'types/mediaKit';
import styles from './styles.module.less';
import { Button } from 'antd';
import { mediaKitBg } from 'assets/images';
import CommonImage from 'components/CommonImage';
import { BASE_DOWNLOAD_URL } from 'constants/api';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function MediaKitFirstScreen({
  className,
  title,
  content,
  allMediaKitZip,
}: { className?: string } & IMediaKitFirstScreen) {
  return (
    <div className={clsx(['section-container', styles.mediaKitFirstScreen, className])}>
      <CommonImage src={mediaKitBg} priority style={{ width: 480, height: 244 }} className={styles.mediaKitBg} />
      <div className={clsx(['page-container', styles.info])}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
        </div>

        <Button type="text" className={styles.downloadBtn}>
          <a href={BASE_DOWNLOAD_URL + allMediaKitZip?.id + '?download'} target="_blank" rel="noreferrer" download>
            Download All
          </a>
        </Button>
      </div>
    </div>
  );
}
