import React from 'react';
import style from './Hamburger.module.css';
import { HamburgerProps } from '../model/types';

export const Hamburger: React.FC<HamburgerProps> = ({
  isActive,
  switchState
}) => {
  return (
    <div onClick={switchState} className={style.hamburger}>
      <span className={`${style.line} ${isActive ? style.open : ''}`}></span>
      <span className={`${style.line} ${isActive ? style.open : ''}`}></span>
      <span className={`${style.line} ${isActive ? style.open : ''}`}></span>
    </div>
  );
};
