import React, { PropsWithChildren } from 'react';
import style from './Popup.module.css';
import close from '@img/icons/close.svg';

import { usePopupClose } from '@/hooks/usePopupCLose';

type PopupProps = {
  isModalOpen: boolean;
  closeModal: () => void;
};

export const Popup: React.FC<PropsWithChildren<PopupProps>> = ({
  children,
  closeModal,
  isModalOpen
}) => {
  usePopupClose({
    isOpen: isModalOpen,
    closePopup: closeModal,
    wrapperClass: style.wrapper,
    closeClass: style.close
  });

  return (
    <div className={`${style.wrapper} ${isModalOpen ? style.open : ''}`}>
      <div className={style.window}>
        <img className={style.close} src={close} alt="close" />
        {children}
      </div>
    </div>
  );
};
