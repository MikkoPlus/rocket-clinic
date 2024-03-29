import React from 'react';
import { ButtonProps } from '../model/types';
import style from './Button.module.css';
import { buttonVariants } from '../model/btnVariants';

export const Button: React.FC<ButtonProps> = ({
  variant,
  text,
  additionalClass,
  btnClick,
  disabled
}) => {
  return (
    <button
      onClick={btnClick}
      className={`${style.button} ${style[buttonVariants[variant]]} ${additionalClass ? additionalClass : ''}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
