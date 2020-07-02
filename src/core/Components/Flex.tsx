import cx from 'classnames';
import * as React from 'react';

import styles from './Flex.module.scss';

interface IProps {
  col?: boolean,
  row?: boolean,
  reverse?: boolean,
  // pass a number for pixels or string percentage
  // and the flex container will be fixed to this amount
  fixed?: number | string,
  // custom style
  style?: any,
  // custom class names
  className?: string,
  // set to true to center content horizontally and vertically
  center?: boolean,
  start?: boolean,
  end?: boolean,
  wrap?: boolean,
  clip?: boolean,

  // set to true to scroll content vertically
  scroll?: boolean,
  scrollX?: boolean,
  children?: React.Node,

  onClick?: (e: MouseEvent) => void,
  onMouseEnter?: (e: MouseEvent) => void,
  onMouseLeave?: (e: MouseEvent) => void,
  onMouseMove?: (e: MouseEvent) => void
};

export default function Flex(props: IProps) {
  const {
    col,
    row,
    reverse,
    fixed,
    style,
    className,
    center,
    start,
    end,
    wrap,
    clip,
    scroll,
    scrollX,
    children,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onMouseMove
  } = props;

  if (col != null && col === row) {
    throw new Error("Flex col and row are mutually exclusive");
  }

  const conditionalClasses = {

  }
};