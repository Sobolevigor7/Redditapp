import React from 'react';
import * as Icons from "./Icons";

export enum EIcons {
  menu = 'MenuIcon',
  comments = 'CommentsIcon',
  share = 'ShareIcon',
  hide = 'HideIcon',
  save= 'SaveIcon',
  complain = 'ComplainIcon',
  anonim = 'IconAnon',
  smile = 'SmileIcon',
}

const componentsMap = {
  Icons
}

interface TIcons {
  icon: EIcons;
  size?: number;
  className?: string;
}

export function Icon({icon, size = 20, className}: TIcons) {

  const IconToShow = componentsMap.Icons[icon];
  return (
    <IconToShow  size = {size} className={className} />
  );
}
