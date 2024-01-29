import React from 'react';
import style from './App.module.css';
import Header from '@component/Header';
import Menu from '@component/Menu';
import { useMenuState } from '@/hooks/useMenuState';
import Popup from '@/Components/popup';
import { useModalState } from '@/hooks/useModalState';
import Promo from '@/Components/Promo';

export const App = () => {
  const { isActive, switchActiveState } = useMenuState();
  const { closeModal, isModalVisible, openModal } = useModalState();

  return (
    <div className={style.app}>
      <Header
        switchMenuState={switchActiveState}
        isMenuActive={isActive}
        openPopup={openModal}
      />
      <div className={style.invisibleArea}></div>
      <Menu isActive={isActive} openPopup={openModal} />
      <Promo />
      <Popup closeModal={closeModal} isModalOpen={isModalVisible} />
    </div>
  );
};
