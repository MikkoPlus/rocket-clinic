import React, { PropsWithChildren } from 'react';
import style from './Popup.module.css';

import { usePopupClose } from '@/hooks/usePopupCLose';
import { IPopup } from '../model/types';

export const Popup: React.FC<PropsWithChildren<IPopup>> = ({
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
    <div className={`${style.overlay} ${isModalOpen ? style.open : ''}`}>
      <div className={style.wrapper}>
        <div className={style.window}>
          <span className={style.close}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  id="Vector"
                  d="M1 1L21.0001 21.0001"
                  stroke="#F8FBFA"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M1 21.0001L21.0001 0.999921"
                  stroke="#F8FBFA"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};
