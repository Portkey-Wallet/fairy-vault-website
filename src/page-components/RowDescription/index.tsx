import { tickIconBlue } from 'assets/images';
import clsx from 'clsx';
import CommonImage from 'components/CommonImage';
import styles from './styles.module.less';

export interface RowDescriptionProps {
  iconSrc?: string;
  iconWidth?: number;
  iconHeight?: number;
  gap?: number;
  content: string;
  contentSize?: number;
  contentColor?: string;
  className?: string;
}

export default function RowDescription(props: RowDescriptionProps) {
  const {
    iconSrc = tickIconBlue,
    iconWidth = 24,
    iconHeight = 24,
    gap = 16,
    content = '',
    contentSize,
    contentColor = '#515A62',
    className,
  } = props;

  return (
    <div className={clsx([styles.rowDescription, className])}>
      <CommonImage
        src={iconSrc}
        style={{ minWidth: iconWidth, minHeight: iconHeight, marginRight: gap }}
        alt="tickIcon"
      />
      <div style={{ fontSize: contentSize, color: contentColor }}>{content}</div>
    </div>
  );
}
