import React, { useState } from 'react';
import style from './FAQItem.module.css';

type FAQItemProps = {
  title: string;
  text: string[];
};

export const FAQItem: React.FC<FAQItemProps> = ({ text, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <li className={style.item}>
      <div className={style.top} onClick={() => setIsOpen(!isOpen)}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.control}>
          <span className={style.line}></span>
          <span className={`${style.line} ${isOpen ? style.open : ''}`}></span>
        </div>
      </div>
      {text.map((textItem, index) => {
        return (
          <div key={index} aria-expanded={isOpen} className={style.text}>
            <p className={style.textContent}>{textItem}</p>
          </div>
        );
      })}
    </li>
  );
};
