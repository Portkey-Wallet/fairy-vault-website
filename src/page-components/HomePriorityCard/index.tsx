import clsx from 'clsx';
import CommonImage from 'components/CommonImage';
import { PriorityCardData } from 'constants/homeData';
import { CSSProperties, useState } from 'react';
import styles from './styles.module.less';

export interface HomeCardProps {
  className?: string;
  style?: CSSProperties;
  item: PriorityCardData;
}

export default function HomePriorityCard(props: HomeCardProps) {
  const { className, style, item } = props;
  const [isHover, setIsHover] = useState(false);

  function onMouseOver() {
    setIsHover(true);
  }
  function onMouseOut() {
    setIsHover(false);
  }
  return (
    <div
      className={clsx(styles.homePriorityCard, className)}
      style={style}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}>
      <div className={styles.iconWrap}>
        {/* Two pictures are superimposed to speed up the speed of displaying pictures when hovering */}
        <CommonImage
          className={styles.iconHover}
          src={item.iconHover}
          style={{ width: 52, height: 52 }}
          alt="homeInfoIcon"
        />
        <CommonImage
          className={styles.iconNormal}
          src={item.iconNormal}
          style={{ width: 52, height: 52, display: isHover ? 'none' : 'block' }}
          alt="homeInfoIcon"
        />
      </div>
      <div className={styles.cardTitle}>{item.title}</div>
      <div className={styles.cardContent}>
        {item.content.map((item, index) => {
          return (
            <div className={styles.cardContentRow} key={'PriorityCardContent_' + index}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
