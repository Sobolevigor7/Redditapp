import React from 'react';
import styles from './text.css';
import classNames from 'classnames'

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColor {
  black = 'black',
  orange = 'orange',
  green  = 'green',
  white  = 'white',
  grayF4 = 'grayF4',
  greyF3 = 'greyF3',
  greyEC = 'greyEC',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
}

interface TTextProps {
  As?: 'span' | 'h1' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
  bold?: boolean;
}


export function Text(props: TTextProps) {
  const { As = 'span',
    children,
    color = EColor.black,
    size,
    mobileSize,
    desktopSize,
    tabletSize,
    bold = false,
  } = props;

  const classes = classNames(
      styles[`s${size}`],
      styles[color],
      {[styles.bold]: bold},
      { [styles[`m${mobileSize}`]]: mobileSize },
      { [styles[`d${desktopSize}`]]: desktopSize },
      { [styles[`t${tabletSize}`]]: tabletSize },
  );

  return (
      <As className = {classes}>
        {children}
      </As>

  );
}
