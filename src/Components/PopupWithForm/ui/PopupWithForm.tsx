import React from 'react';
import style from './PopupWithForm.module.css';
import Popup from '@component/ui/Popup';
import { IPopupWithForm } from '../model/types';
import Button from '@component/ui/Button';
import Input from '@component/ui/Input/Index';
import Spinner from '@component/ui/Spinner';
import { useForm } from '../model/useForm';

export const PopupWithForm: React.FC<IPopupWithForm> = ({
  closeModal,
  isModalOpen,
  switchLoadingState,
  switchSuccessState,
  showTooltipModal,
  isLoading
}) => {
  const {
    formRef,
    handleFormSubmit,
    setIsEmailInputValid,
    setIsNameInputValid,
    setIsPhoneInputValid,
    updateFormData,
    isFormValid
  } = useForm({
    switchLoadingState,
    switchSuccessState,
    showTooltipModal
  });

  return (
    <>
      <Popup closeModal={closeModal} isModalOpen={isModalOpen} isFullScreen>
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
          <form
            noValidate
            className={style.form}
            onSubmit={handleFormSubmit}
            ref={formRef}
          >
            <Input
              name="name"
              placeholder="ФИО"
              type="text"
              isInputValid={setIsNameInputValid}
              isFormOpen={isModalOpen}
              updateFormData={updateFormData}
            />
            <Input
              name="phone"
              placeholder="Номер телефона"
              type="text"
              isInputValid={setIsPhoneInputValid}
              isFormOpen={isModalOpen}
              updateFormData={updateFormData}
            />
            <Input
              name="email"
              placeholder="Электронная почта"
              type="text"
              isInputValid={setIsEmailInputValid}
              isFormOpen={isModalOpen}
              updateFormData={updateFormData}
            />
            <Button
              additionalClass={style.button}
              disabled={!isFormValid}
              variant="green"
              text="Записаться"
            />
          </form>
        </div>
        <Spinner isLoading={isLoading} />
      </Popup>
    </>
  );
};
