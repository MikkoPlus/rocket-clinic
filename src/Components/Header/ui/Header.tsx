import React from 'react';
import mainData from '@utils/data/globalInfo.json';
import whatsappIcon from '@img/icons/whatsapp.svg';
import { onlyDigits } from '@/utils/constants';
import style from './Header.module.css';
import Hamburger from '@/Components/Hamburger';
import Button from '@/Components/ui/Button';
import { HeaderProps } from '../model/types';
import Logo from '@/Components/Logo';
import Menu from '@/Components/Menu';

export const Header: React.FC<HeaderProps> = ({
  isMenuActive,
  switchMenuState,
  openPopup
}) => {
  const { street, town, socials } = mainData;
  const onlyDigitsNumber = socials.whatsappNumber.replace(onlyDigits, '');

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.firstPart}>
          <Hamburger isActive={isMenuActive} switchState={switchMenuState} />
          <Logo isGreen wrapperClass={style.logo} />
          <div className={style.place}>
            <a href={`tel:${onlyDigitsNumber}`} className={style.numberLink}>
              {socials.whatsappNumber}
            </a>
            <p className={style.town}>{town}</p>
            <p className={style.street}>{street}</p>
          </div>
        </div>
        <div className={style.secondPart}>
          <a href={`tel:+${onlyDigitsNumber}`} className={style.link}>
            <img src={whatsappIcon} alt="whatsapp" className={style.icon} />
            <span className={style.number}>{socials.whatsappNumber}</span>
          </a>
          <Button
            additionalClass={style.button}
            text="Записаться на приём"
            variant="green"
            btnClick={openPopup}
          />
        </div>
      </div>

      <div>
        <nav
          className={`${style.menuWrapper} ${isMenuActive ? style.menuOpen : style.menuClose}`}
        >
          <Menu menuClass={style.menu} />
          <Button
            btnClick={openPopup}
            additionalClass={style.menuButton}
            text="Записаться на приём"
            variant="white"
          />
        </nav>
      </div>
      <div className={style.invisibleArea}></div>
    </header>
  );
};
