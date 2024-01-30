import React from 'react';
import style from './App.module.css';
import Header from '@component/Header';
// import Menu from '@component/Menu';
import { useMenuState } from '@/hooks/useMenuState';
import Popup from '@/Components/popup';
import { useModalState } from '@/hooks/useModalState';
import Promo from '@/Components/Promo';
import FAQ from '@/Components/FAQ';
import CheckUps from '@/Components/CheckUps';
import Footer from '@/Components/Footer';

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
      <Popup closeModal={closeModal} isModalOpen={isModalVisible} />
    </div>
  );
};
