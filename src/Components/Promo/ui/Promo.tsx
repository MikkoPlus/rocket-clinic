import React from 'react';
import styles from './Promo.module.css';
import data from '@utils/data/firstScreenData.json';
import promoImage from '@img/promo-img.jpg';

export const Promo = () => {
  const { description, title } = data;
  return (
    <section className={styles.promo}>
      <div className={styles.wrapper}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <img src={promoImage} alt="promo" className={styles.img} />
    </section>
  );
};
