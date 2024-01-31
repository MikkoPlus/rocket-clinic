import React, { useState, useEffect } from 'react';
import Popup from '@component/ui/Popup';
import style from './PopupWithTooltip.module.css';
import { IPopupWithTooltip } from '../model/types';
import successIcon from '@img/icons/success.svg';
import successDeniedIcon from '@img/icons/success-denied.svg';

export const PopupWithTooltip: React.FC<IPopupWithTooltip> = ({
  closeModal,
  isModalOpen,
  isSuccess,
  isLoading
}) => {
  const [tooltipText, setTooltipText] = useState<string>('');

  useEffect(() => {
    if (isSuccess) {
      setTooltipText('Форма успешно отправлена!');
    } else {
      setTooltipText('Что-то пошло не так! Попробуйте ещё раз.');
    }

    return () => {
      setTooltipText('');
    };
  }, [isSuccess]);

  useEffect(() => {
    if (!isLoading && isModalOpen) {
      setTimeout(() => {
        closeModal();
      }, 1500);
    }
  }, [isLoading]);

  return (
    <Popup closeModal={closeModal} isModalOpen={isModalOpen}>
      <div className={style.tooltip}>
        <img
          className={style.img}
          src={isSuccess ? successIcon : successDeniedIcon}
          alt={isSuccess ? 'Успешно!' : 'Ошибка!'}
        />
        <p className={style.text}>{tooltipText}</p>
      </div>
    </Popup>
  );
};
