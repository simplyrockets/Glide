import cx from 'classnames';
import React from 'react';

import styles from './Flex.module.scss';

interface Props {
  col?: boolean;
  row?: boolean;
  reverse?: boolean;
  // pass a number for pixels or string percentage
  // and the flex container will be fixed to this amount
  fixed?: number | string;
  // custom style
  style?: any;
  // custom class names
  className?: string;
  // set to true to center content horizontally and vertically
  center?: boolean;
  start?: boolean;
  end?: boolean;
  wrap?: boolean;
  clip?: boolean;

  // set to true to scroll content vertically
  scroll?: boolean;
  scrollX?: boolean;
  children?: React.ReactNode;

  onClick?: (event: any) => void;
  onMouseEnter?: (event: any) => void;
  onMouseLeave?: (event: any) => void;
  onMouseMove?: (event: any) => void;
}

export default function Flex(props: Props) {
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
    throw new Error('Flex col and row are mutually exclusive');
  }

  // toggle conditional classes based on props
  const conditionalClasses = {
    [styles.col]: col,
    [styles.reverse]: reverse,
    [styles.center]: center,
    [styles.start]: start,
    [styles.end]: end,
    [styles.wrap]: wrap,
    [styles.clip]: clip,
    [styles.scroll]: scroll,
    [styles.scrollX]: scrollX
  };
  const combinedClasses = cx(styles.flex, conditionalClasses, className);

  // support both numeric and string (percentage) flex directives
  const amount = typeof fixed === 'number' ? `${fixed}px` : fixed;
  const flexStyle = amount ? { flex: `0 0 ${amount}` } : {};
  // only copy combine flex & custom style if we were passed custom style
  const fullStyle = style ? { ...flexStyle, ...style } : flexStyle;

  return (
    <div
      className={combinedClasses}
      style={fullStyle}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
}
