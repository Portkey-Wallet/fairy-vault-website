import { Button } from 'antd';
import clsx from 'clsx';
import CommonImage from 'components/CommonImage';
import { IMAGE_POSITION } from 'constants/enum';
import { ContentsData } from 'constants/homeData';
import RowDescription from 'page-components/RowDescription';
import { CSSProperties } from 'react';
import styles from './styles.module.less';
import { motion, Variants } from 'framer-motion';
import { INITIAL, WHILE_IN_VIEW, VIEWPORT, variantLeftToRight, variantRightToLeft } from 'constants/motion';

interface HomeTwoColumnsCardProps {
  className?: string;
  imageClassName?: string;
  style?: CSSProperties;
  imgPosition?: IMAGE_POSITION; // image position, must be on the right or left
  imgSrc: string; // image url
  title?: string;
  content: ContentsData[];
  buttonText?: string;
  buttonClick?: () => void;
}

export default function HomeTwoColumnsCard(props: HomeTwoColumnsCardProps) {
  const {
    className,
    imageClassName,
    style,
    imgSrc,
    imgPosition = IMAGE_POSITION.Left,
    title,
    content,
    buttonText = '',
    buttonClick,
  } = props;

  const contentUI = (className: string, variant: (amount: number) => Variants) => {
    return (
      <div className={className}>
        <motion.div initial={INITIAL} whileInView={WHILE_IN_VIEW} viewport={VIEWPORT}>
          <motion.div variants={variant(0)}>
            {title ? <div className={styles.cardTitle}>{title}</div> : null}
          </motion.div>
          {content?.map((item, idx) => {
            return (
              <motion.div key={'HomeTwoColumnsDesc' + idx} variants={variant((idx + 1) * 0.1)}>
                <RowDescription
                  className={styles.cardContent}
                  iconSrc={item?.icon}
                  iconWidth={item?.iconWidth}
                  iconHeight={item?.iconHeight}
                  content={item.text}
                  gap={item?.iconMarginRight}
                  contentColor={item.textColor}
                />
              </motion.div>
            );
          })}

          {buttonText && (
            <div className={styles.btnWrap}>
              <motion.span variants={variant(content.length * 0.5)}>
                <Button type="text" onClick={buttonClick} className={styles.btn}>
                  {buttonText}
                </Button>
              </motion.span>
            </div>
          )}
        </motion.div>
      </div>
    );
  };

  const imgUI = () => {
    return (
      <CommonImage
        src={imgSrc}
        layout="intrinsic"
        className={clsx(['flex-row-center', imageClassName])}
        alt="infoImg"
      />
    );
  };

  return (
    <div className={clsx(styles.homeTwoColsCard, className)} style={style}>
      <motion.div initial={INITIAL} whileInView={WHILE_IN_VIEW} viewport={VIEWPORT}>
        {imgPosition === IMAGE_POSITION.Left ? (
          // picture on the left
          <div className={styles.cardItem}>
            <motion.div variants={variantLeftToRight(0)}>{imgUI()}</motion.div>
            <motion.div variants={variantRightToLeft(0)}>
              {contentUI(styles.cardInfoRight, variantRightToLeft)}
            </motion.div>
          </div>
        ) : (
          // picture on the right
          <div className={clsx([styles.cardItem, styles.cardItemLeft])}>
            <motion.div variants={variantLeftToRight(0)}>
              {contentUI(styles.cardInfoLeft, variantLeftToRight)}
            </motion.div>
            <motion.div variants={variantRightToLeft(0)}>{imgUI()}</motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
