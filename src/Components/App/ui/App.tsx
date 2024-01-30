import React from 'react';
import style from './App.module.css';
import Header from '@component/Header';
import { useMenuState } from '@/hooks/useMenuState';
import { useModalState } from '@/hooks/useModalState';
import Promo from '@/Components/Promo';
import FAQ from '@/Components/FAQ';
import CheckUps from '@/Components/CheckUps';
import Footer from '@/Components/Footer';
import PopupWithForm from '@component/PopupWithForm';

export const App: React.FC = () => {
  const { isActive, switchActiveState } = useMenuState();
  const { closeModal, isModalVisible, openModal } = useModalState();

  return (
    <div className={style.app}>
      <Header
        switchMenuState={switchActiveState}
        isMenuActive={isActive}
        openPopup={openModal}
      />

      <Promo />
      <FAQ />
      <CheckUps />
      <Footer />
      <PopupWithForm closeModal={closeModal} isModalOpen={isModalVisible} />
    </div>
  );
};
