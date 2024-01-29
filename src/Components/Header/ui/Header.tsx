import React from 'react';
import logo from '@/img/LOGO.svg';
import mainData from '@utils/data/globalInfo.json';
import whatsappIcon from '@img/icons/whatsapp.svg';
import { onlyDigits } from '@/utils/constants';
import style from './Header.module.css';
import globalStyles from '@component/global.module.css';
import Hamburger from '@/Components/Hamburger';
import Button from '@/Components/ui/Button';
import { HeaderProps } from '../model/types';

export const Header: React.FC<HeaderProps> = ({
  isMenuActive,
  switchMenuState,
  openPopup
}) => {
  const { street, town, phoneNumber } = mainData;
  const onlyDigitsNumber = phoneNumber.replace(onlyDigits, '');

  return (
    <header className={style.header}>
      <div className={globalStyles.container}>
        <div className={style.wrapper}>
          <div className={style.firstPart}>
            <Hamburger isActive={isMenuActive} switchState={switchMenuState} />
            <img src={logo} alt="logo" className={style.logo} />
            <div className={style.place}>
              <a href={`tel:${onlyDigitsNumber}`} className={style.numberLink}>
                {phoneNumber}
              </a>
              <p className={style.town}>{town}</p>
              <p className={style.street}>{street}</p>
            </div>
          </div>
          <div className={style.secondPart}>
            <a href={`tel:${onlyDigitsNumber}`} className={style.link}>
              <img src={whatsappIcon} alt="whatsapp" className={style.icon} />
              <span className={style.number}>{phoneNumber}</span>
            </a>
            <Button
              text="Записаться на приём"
              variant="green"
              btnClick={openPopup}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
