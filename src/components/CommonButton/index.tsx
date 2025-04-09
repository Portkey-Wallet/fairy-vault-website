import { Button, ButtonProps } from 'antd';
import clsx from 'clsx';
import { useMemo } from 'react';
import styles from './styles.module.less';

export type CommonButtonType =
  | 'default'
  | 'primary'
  | 'ghost'
  | 'dashed'
  | 'link'
  | 'text'
  | 'outline'
  | 'primaryOutline'
  | 'danger';

export type CommonButtonProps = {
  loadingWidth?: number;
  loadingHeight?: number;
  type?: CommonButtonType;
} & Omit<ButtonProps, 'type'>;

export default function CommonButton(props: CommonButtonProps) {
  const { className, children, type = 'default', ...prop } = props;

  const buttonClass = useMemo(() => {
    const typeClassMap: Record<CommonButtonType, string> = {
      default: '',
      primary: styles.antBtnPrimary,
      ghost: '',
      dashed: '',
      link: '',
      text: '',
      outline: styles.btnOutline,
      primaryOutline: styles.btnPrimaryOutline,
      danger: styles.btnDanger,
    };
    return clsx(styles.commonButton, typeClassMap[type], className);
  }, [type, className]);

  return (
    <Button {...prop} className={buttonClass}>
      {children}
    </Button>
  );
}
