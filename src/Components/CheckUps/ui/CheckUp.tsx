import React from 'react';
import style from './CheckUp.module.css';
import Button from '@/Components/ui/Button';
import { CheckUpProps } from '../model/types';
import checkupImg from '@img/check-up-img.jpg';

export const CheckUp: React.FC<CheckUpProps> = ({
  title,
  gender,
  checkups,
  oldPrice,
  currentPrice
}) => {
  return (
    <div className={style.checkup}>
      <div className={style.wrapper}>
        <div className={style.content}>
          <div className={style.textContent}>
            <h3 className={style.title}>{title}</h3>
            <p className={style.gender}>{gender}</p>
            <ul className={style.list}>
              {checkups.map((item, index) => {
                return (
                  <li key={index} className={style.item}>
                    {item}
                  </li>
                );
              })}
            </ul>
            <div className={style.price}>
              <span className={style.currentPrice}>Всего {currentPrice}</span>
              <span className={style.oldPrice}>{oldPrice}</span>
            </div>
          </div>
          <div className={style.btns}>
            <Button
              variant="green"
              text="Записаться"
              additionalClass={style.btn}
              btnClick={() => console.log('click')}
            />
            <Button
              variant="white"
              text="Подробнее"
              additionalClass={style.btn}
              btnClick={() => console.log('click')}
            />
          </div>
        </div>
        <img src={checkupImg} alt="check-up" className={style.img} />
      </div>
    </div>
  );
};
