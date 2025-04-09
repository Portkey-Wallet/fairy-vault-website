import clsx from 'clsx';
import { CSSProperties } from 'react';
import svgsList from '../../assets/svgs';
import styles from './styles.module.less';
export interface CustomSvgProps {
  type: keyof typeof svgsList;
  className?: string;
  fillColor?: string;
  strokeColor?: string;
  style?: CSSProperties;
  onClick?: () => void;
}
export default function CustomSvg({ type, className, fillColor, strokeColor, ...props }: CustomSvgProps) {
  let svgContent = svgsList[type];
  if (strokeColor || fillColor) {
    svgContent = svgContent
      .replace(/fill="[^"]*"/g, `fill="${fillColor}"`)
      .replace(/stroke="[^"]*"/g, `stroke="${strokeColor}"`);
  }
  return (
    <div
      className={clsx(styles.portkeyUiCustomSvg, `${type.toLocaleLowerCase()}-icon`, className)}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      {...props}></div>
  );
}
export type CustomSvgType = keyof typeof svgsList;
