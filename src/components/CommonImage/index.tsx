import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import styles from './styles.module.less';

export default function CommonImage({
  className,
  imageCls,
  style,
  layout = 'fill',
  alt = 'img',
  ...props
}: ImageProps & { imageCls?: string }) {
  return (
    <div className={clsx(styles['common-img'], className)} style={style}>
      <Image {...props} className={imageCls} layout={layout} alt={alt} />
    </div>
  );
}
