import { useMemo, useState, useRef } from 'react';
import { useCopyToClipboard } from 'react-use';
import clsx from 'clsx';
import { iconCopy, iconCopyHover, iconCheck } from 'assets/images';
import CommonTooltip from 'components/CommonTooltip';
import CommonImage from 'components/CommonImage';
import { devices } from '@portkey/utils';
import styles from './styles.module.less';

export default function Copy({ toCopy }: { toCopy: string }) {
  const isMobile = devices.isMobile().tablet || devices.isMobile().phone;

  const [_, setCopyValue] = useCopyToClipboard();
  const [isShowCheckIcon, setIsShowCheckIcon] = useState(false);
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const showCheckIconTimerRef = useRef<NodeJS.Timeout | null>(null);

  const tooltipTitle = useMemo(() => {
    if (isShowCheckIcon || isMobile) {
      return 'Copied';
    } else {
      return 'Click to copy';
    }
  }, [isShowCheckIcon, isMobile]);

  const iconSrc = useMemo(() => {
    if (isShowCheckIcon) {
      return iconCheck;
    } else if (isHover) {
      return iconCopyHover;
    } else {
      return iconCopy;
    }
  }, [isHover, isShowCheckIcon]);

  return (
    <CommonTooltip
      title={tooltipTitle}
      trigger={isMobile ? '' : 'hover'}
      open={isMobile ? isShowTooltip : undefined}
      mouseEnterDelay={0.3}
      mouseLeaveDelay={0.3}>
      <CommonImage
        className={clsx('cursor-pointer', styles.iconWrapper)}
        src={iconSrc}
        onMouseEnter={() => {
          if (isMobile) {
            return;
          }
          setIsHover(true);
        }}
        onMouseLeave={() => {
          if (isMobile) {
            return;
          }
          setIsHover(false);
        }}
        onClick={() => {
          if (isShowCheckIcon) {
            return;
          }
          setCopyValue(toCopy);
          setIsShowCheckIcon(true);
          if (isMobile) {
            setIsShowTooltip(true);
          }
          if (showCheckIconTimerRef.current) {
            clearTimeout(showCheckIconTimerRef.current);
          }
          showCheckIconTimerRef.current = setTimeout(() => {
            if (isMobile) {
              setIsShowTooltip(false);
            }
            setIsShowCheckIcon(false);
          }, 3000);
        }}
      />
    </CommonTooltip>
  );
}
