import { useState, useEffect, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { ISubmitState } from './types';
import { emailID, publicKey, templateID } from '@utils/constants';

export const useForm = ({
  switchLoadingState,
  switchSuccessState,
  showTooltipModal
}: ISubmitState) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isFormReset, setIsFormReset] = useState<boolean>(false);
  const [isNameInputValid, setIsNameInputValid] = useState<boolean>(false);
  const [isPhoneInputValid, setIsPhoneInputValid] = useState<boolean>(false);
  const [isEmailInputValid, setIsEmailInputValid] = useState<boolean>(false);

  const formRef = useRef(null);

  function handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const data = JSON.stringify({
      ФИО: formData.name,
      'Номер телефона': formData.phone,
      Почта: formData.email
    });
    if (!formRef || !formRef.current || !emailID || !templateID) return;
    switchLoadingState(true);
    emailjs
      .send(
        emailID,
        templateID,
        {
          data: data
        },
        publicKey
      )
      .then(() => {
        switchSuccessState(true);
      })
      .catch(error => {
        switchSuccessState(false);
        console.log(error);
      })
      .finally(() => {
        showTooltipModal();
        switchLoadingState(false);
        resetForm();
      });
  }

  function resetForm() {
    setFormData({});
    setIsFormReset(true);
  }

  function updateFormData(name: string, value: string) {
    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    setIsFormValid(isNameInputValid && isPhoneInputValid && isEmailInputValid);
  }, [isNameInputValid, isPhoneInputValid, isEmailInputValid, isFormValid]);

  return {
    setIsNameInputValid,
    formRef,
    setIsPhoneInputValid,
    setIsEmailInputValid,
    handleFormSubmit,
    updateFormData,
    isFormValid,
    isFormReset,
    setIsFormReset
  };
};
