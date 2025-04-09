import clsx from 'clsx';
import { IMediaKitList } from 'types/mediaKit';
import styles from './styles.module.less';
import { Button } from 'antd';
import CommonImage from 'components/CommonImage';
import { s3Url } from 'constants/network';
import { BASE_DOWNLOAD_URL } from 'constants/api';
import { defaultLogo } from 'assets/images';
import { useCallback, useRef, useState } from 'react';

export default function MediaKitList({
  className,
  mediaKitList,
  mediaKitDescription,
}: { className?: string } & IMediaKitList) {
  const [showDefaultImgArray, setShowDefaultImgArray] = useState<number[]>([]);
  const errorIdxArr = useRef<number[]>([]);

  const showDefaultOnError = useCallback((index: number) => {
    if (errorIdxArr.current.includes(index)) return;
    errorIdxArr.current.push(index);
    setShowDefaultImgArray(errorIdxArr.current);
  }, []);

  const showDefaultOnLoad = useCallback(
    (img: any, index: number) => {
      if (img?.naturalWidth === 0) {
        showDefaultOnError(index);
      } else {
        if (errorIdxArr.current.includes(index)) {
          const arr = errorIdxArr.current.filter((item) => item !== index);
          setShowDefaultImgArray(arr);
        }
      }
    },
    [showDefaultOnError],
  );

  const showDefaultOnLoadCom = useCallback(
    (img: any, index: number) => {
      if (img?.naturalWidth === 0) {
        showDefaultOnError(index);
      } else {
        if (showDefaultImgArray.includes(index)) {
          const arr = showDefaultImgArray.filter((item) => item !== index);
          setShowDefaultImgArray(arr);
        }
      }
    },
    [showDefaultImgArray, showDefaultOnError],
  );

  return (
    <div className={clsx(['section-container', className])}>
      <div className={clsx(['page-container', styles.mediaKitList])}>
        {mediaKitList?.map((item, index) => {
          return (
            <div key={'MediaKitList' + index} className={styles.item}>
              <div
                className={clsx([styles.logoImageWrap, 'flex-center'])}
                style={{ background: item.mediaKit_id.backgroundColor }}>
                <CommonImage
                  src={defaultLogo}
                  style={{
                    width: '100%',
                    position: 'absolute',
                    display: showDefaultImgArray.includes(index) ? 'block' : 'none',
                  }}
                  className={styles.logoImage}
                  priority
                  objectFit="contain"
                />
                <CommonImage
                  src={s3Url + item.mediaKit_id.png?.filename_disk}
                  style={{ width: '100%', display: !showDefaultImgArray.includes(index) ? 'block' : 'none' }}
                  className={styles.logoImage}
                  priority
                  objectFit="contain"
                  onLoadingComplete={(img) => showDefaultOnLoadCom(img, index)}
                  onLoad={(img) => showDefaultOnLoad(img, index)}
                  onError={() => showDefaultOnError(index)}
                />
              </div>
              <div className={'flex-row-center-between'}>
                <div className={styles.name}>{item.mediaKit_id.name}</div>
                <div className={styles.downloadBtnWrap}>
                  <Button type="text" className={styles.downloadBtn}>
                    <a
                      href={BASE_DOWNLOAD_URL + item.mediaKit_id.png?.id + '?download'}
                      target="_blank"
                      rel="noreferrer"
                      download>
                      PNG
                    </a>
                  </Button>
                  <Button type="text" className={styles.downloadBtn}>
                    <a href={BASE_DOWNLOAD_URL + item.mediaKit_id.svg?.id + '?download'} download>
                      SVG
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
        <div className={styles.description}>{mediaKitDescription}</div>
      </div>
    </div>
  );
}
