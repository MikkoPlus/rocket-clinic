import React from 'react';
import style from './Input.module.css';
import { IInput } from '../model/types';
import { useInput } from '../model/useInput';

export const Input: React.FC<IInput> = ({
  name,
  type,
  placeholder,
  isFormOpen,
  updateFormData,
  isInputValid
}) => {
  const { isDirty, validMessage, setValue, value, setIsDirty, isValid } =
    useInput({
      isFormOpen: isFormOpen,
      name: name,
      isInputValid: isInputValid,
      updateFormData: updateFormData
    });
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
