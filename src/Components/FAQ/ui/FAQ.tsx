import React from 'react';
import style from './FAQ.module.css';
import data from '@utils/data/FAQ.json';
import { FAQItem } from './FAQItem';

export const FAQ: React.FC = () => {
  return (
    <section className={style.wrapper}>
      <h2 className={style.title}>Часто задаваемые вопросы</h2>
      <ul className={style.list}>
        {data.map((dataItem, index) => {
          const { title, paragraphs } = dataItem;
          return <FAQItem key={index} title={title} text={paragraphs} />;
        })}
      </ul>
    </section>
  );
};
