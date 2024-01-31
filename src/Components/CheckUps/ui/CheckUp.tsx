import React from 'react';
import style from './CheckUp.module.css';
import Button from '@/Components/ui/Button';
import { ICheckUp } from '../model/types';
import checkupImg from '@img/check-up-img.jpg';

export const CheckUp: React.FC<ICheckUp> = ({
  title,
  gender,
  checkups,
  oldPrice,
  currentPrice,
  openModal
}) => {
  return (
    <div className={style.checkup}>
      <div className={style.wrapper}>
        <div className={style.content}>
          <div className={style.textContent}>
            <h3 className={style.title}>{title}</h3>
            <span className={style.gender}>{gender}</span>
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
              btnClick={openModal}
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
