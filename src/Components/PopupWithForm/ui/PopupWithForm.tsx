import React from 'react';
import style from './PopupWithForm.module.css';
import Popup from '@component/ui/popup';
import { IPopupWithForm } from '../model/types';
import Button from '@/Components/ui/Button';

export const PopupWithForm: React.FC<IPopupWithForm> = ({
  closeModal,
  isModalOpen
}) => {
  return (
    <Popup closeModal={closeModal} isModalOpen={isModalOpen}>
      <div className={style.wrapper}>
        <div className={style.textBlock}>
          <h3 className={style.title}>
            Запишитесь <br />
            на приём онлайн
          </h3>
          <p className={style.description}>
            Администратор свяжется с вами через <br />
            WhatsApp в течение дня и уточнит детали
          </p>
        </div>
        <form className={style.form}>
          <input placeholder="ФИО" className={style.input} type="text" />
          <input
            placeholder="Номер телефона"
            className={style.input}
            type="text"
          />
          <input
            placeholder="Электронная почта"
            className={style.input}
            type="text"
          />
          <Button
            additionalClass={style.button}
            btnClick={() => console.log('click')}
            variant="green"
            text="Записаться"
          />
        </form>
      </div>
    </Popup>
  );
};
