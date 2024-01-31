import React from 'react';
import style from './App.module.css';
import Header from '@component/Header';
import { useMenuState } from '@/hooks/useMenuState';
import { useModalWithFormState } from '@/hooks/useModalWithFormState';
import Promo from '@/Components/Promo';
import FAQ from '@/Components/FAQ';
import CheckUps from '@/Components/CheckUps';
import Footer from '@/Components/Footer';
import PopupWithForm from '@component/PopupWithForm';
import PopupWithTooltip from '@/Components/PopupWithTooltip';
import { useModalWithTooltipState } from '@/hooks/useModalWithTooltip';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

  const { isActive, switchActiveState } = useMenuState();
  const { openFormModal, isModalWithFormVisible, closeFormModal } =
    useModalWithFormState();

  const { openTooltipModal, isTooltipModalVisible, closeTooltipModal } =
    useModalWithTooltipState();

  return (
    <div className={style.app}>
      <Header
        switchMenuState={switchActiveState}
        isMenuActive={isActive}
        openPopup={openFormModal}
      />

      <Promo />
      <FAQ />
      <CheckUps openModal={openFormModal} />
      <Footer />
      <PopupWithForm
        closeModal={closeFormModal}
        isModalOpen={isModalWithFormVisible}
        switchLoadingState={setIsLoading}
        switchSuccessState={setIsSuccess}
        showTooltipModal={openTooltipModal}
        isLoading={isLoading}
      />
      <PopupWithTooltip
        closeModal={closeTooltipModal}
        isModalOpen={isTooltipModalVisible}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </div>
  );
};
