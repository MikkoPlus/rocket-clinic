import React, { useEffect, useState } from 'react';
import style from './Input.module.css';
import { IInput } from '../model/types';
import { phoneNumberRegExp, emailRegExp, isEmpty } from '@utils/constants';
import { validationMessages } from '@utils/constants';
export const Input: React.FC<IInput> = ({
  name,
  type,
  placeholder,
  isFormOpen,
  updateFormData,
  isInputValid
}) => {
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

      if (name === 'phone') {
        if (!phoneNumberRegExp.test(value)) {
          setIsValid(false);
          setValidMessage(validationMessages.invalidPhoneNumberMsg);
        } else {
          setIsValid(true);
          setValidMessage('');
        }
      }
      if (name === 'email') {
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
    updateFormData(name, value);
  }, [value]);

  return (
    <>
      <input
        required
        name={name}
        type={type}
        className={style.input}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={() => setIsDirty(true)}
      />
      {isDirty && !isValid && validMessage !== '' && (
        <span id={`input-error`} className={style.error}>
          {validMessage}
        </span>
      )}
    </>
  );
};
