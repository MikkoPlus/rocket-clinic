import spinner from '@img/icons/spinner.gif';
import style from './Spinner.module.css';
import { SpinnerProps } from '../model/types';

export const Spinner: React.FC<SpinnerProps> = ({ isLoading }) => {
  return (
    <img
      className={`${style.spinner} ${isLoading ? style.visible : style.hidden}`}
      src={spinner}
      alt="spinner"
    />
  );
};
