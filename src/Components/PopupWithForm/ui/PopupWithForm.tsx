import React, { FormEvent, useState } from 'react';
import style from './PopupWithForm.module.css';
import Popup from '@component/ui/popup';
import { IPopupWithForm } from '../model/types';
import Button from '@/Components/ui/Button';
import Input from '@/Components/ui/Input/Index';

export const PopupWithForm: React.FC<IPopupWithForm> = ({
  closeModal,
  isModalOpen
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isNameInputValid, setIsNameInputValid] = useState<boolean>(false);
  const [isPhoneInputValid, setIsPhoneInputValid] = useState<boolean>(false);
  const [isEmailInputValid, setIsEmailInputValid] = useState<boolean>(false);

  function handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    console.log(formData);
  }

  function updateFormData(name: string, value: string) {
    setFormData({ ...formData, [name]: value });
  }

  React.useEffect(() => {
    setIsFormValid(isNameInputValid && isPhoneInputValid && isEmailInputValid);
  }, [isNameInputValid, isPhoneInputValid, isEmailInputValid, isFormValid]);

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
        <form noValidate className={style.form} onSubmit={handleFormSubmit}>
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
    </Popup>
  );
};
