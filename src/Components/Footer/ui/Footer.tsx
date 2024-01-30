import React from 'react';
import style from './Footer.module.css';
import Logo from '@component/Logo';
import Menu from '@component/Menu';
import instagramIcon from '@img/icons/instagram.svg';
import whatsappIcon from '@img/icons/whatsapp.svg';
import telegramIcon from '@img/icons/telegram.svg';
import mainInfo from '@utils/data/globalInfo.json';
import { onlyDigits } from '@/utils/constants';

export const Footer: React.FC = () => {
  const { socials } = mainInfo;
  const onlyDigitsNumber = socials.whatsappNumber.replace(onlyDigits, '');

  return (
    <footer className={style.footer}>
      <Logo wrapperClass={style.logo} />
      <Menu menuClass={style.menu} />
      <ul className={style.list}>
        <li className={style.item}>
          <a
            className={style.link}
            target="_blank"
            rel="noreferrer"
            href={socials.instagramLink}
          >
            <img className={style.img} src={instagramIcon} alt="Instagram" />
          </a>
        </li>
        <li className={style.item}>
          <a
            className={style.link}
            target="_blank"
            rel="noreferrer"
            href={`tel:+${onlyDigitsNumber}`}
          >
            <img className={style.img} src={whatsappIcon} alt="whatsapp" />
          </a>
        </li>
        <li className={style.item}>
          <a
            className={style.link}
            target="_blank"
            rel="noreferrer"
            href={socials.telegramLink}
          >
            <img className={style.img} src={telegramIcon} alt="Telegram" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
