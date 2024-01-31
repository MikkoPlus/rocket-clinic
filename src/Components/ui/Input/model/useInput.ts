import { useState, useEffect } from 'react';
import { phoneNumberRegExp, emailRegExp, isEmpty } from '@utils/constants';
import { validationMessages } from '@utils/constants';
import { useInputProps } from './types';

export const useInput = ({
  isFormOpen,
  inputName,
  isInputValid,
  updateFormData
}: useInputProps) => {
  const [isValid, setIsValid] = useState(false);
  const [validMessage, setValidMessage] = useState('');
  const [isDirty, setIsDirty] = useState(false);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    setIsDirty(false);
  }, [isFormOpen]);

  useEffect(() => {
    isInputValid(isValid);
  }, [isValid]);

  useEffect(() => {
    if (value !== '' && !isEmpty(value)) {
      setIsValid(true);
      setValidMessage('');

      if (inputName === 'phone') {
        if (!phoneNumberRegExp.test(value)) {
          setIsValid(false);
          setValidMessage(validationMessages.invalidPhoneNumberMsg);
        } else {
          setIsValid(true);
          setValidMessage('');
        }
      }
      if (inputName === 'email') {
        if (!emailRegExp.test(value)) {
          setIsValid(false);
          setValidMessage(validationMessages.invalidEmailMsg);
        } else {
          setIsValid(true);
          setValidMessage('');
        }
      }
    } else if (value === '' || isEmpty(value)) {
      setIsValid(false);
      setValidMessage(validationMessages.emptyFieldMsg);
    }
    updateFormData(inputName, value);
  }, [value]);

  return {
    validMessage,
    isDirty,
    setValue,
    value,
    setIsDirty,
    isValid
  };
};

export default useInput;
