import React from 'react';
import style from './Menu.module.css';
import menuData from '@utils/data/menuData.json';
import { MenuProps } from '../model/types';

export const Menu: React.FC<MenuProps> = ({ menuClass }) => {
  return (
    <ul className={`${style.menu} ${menuClass ?? ''}`}>
      {menuData.map((menuItem, index) => {
        return (
          <li key={index}>
            <a className={style.link} href={menuItem.link}>
              {menuItem.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
