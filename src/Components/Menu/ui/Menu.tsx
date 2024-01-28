import React from 'react';
import style from './Menu.module.css';
import menuData from '@utils/data/menuData.json';
import globalStyles from '@component/global.module.css';
import Button from '@component/ui/Button';
import { MenuProps } from '../model/types';

export const Menu: React.FC<MenuProps> = ({ isActive }) => {
  return (
    <div className={`${style.wrapper} ${isActive ? style.open : style.close}`}>
      <nav className={globalStyles.container}>
        <ul className={style.menu}>
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
        <Button
          additionalClass={style.button}
          text="Записаться на приём"
          variant="white"
        />
      </nav>
    </div>
  );
};
