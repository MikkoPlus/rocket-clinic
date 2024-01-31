import React from 'react';
import style from './CheckUps.module.css';
import { CheckUp } from './CheckUp';

import data from '@utils/data/chechUps.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ICheckUps } from '../model/types';

export const CheckUps: React.FC<ICheckUps> = ({ openModal }) => {
  return (
    <section className={style.checkups}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        pagination={{
          type: 'fraction',
          el: '.paginationEl',
          currentClass: style.current
        }}
        navigation={{ prevEl: `.${style.prev}`, nextEl: `.${style.next}` }}
      >
        {data?.map((data, index) => {
          const { title, price, gender, checkups } = data;
          return (
            <SwiperSlide key={index}>
              <CheckUp
                title={title}
                gender={gender}
                checkups={checkups}
                currentPrice={price.current}
                oldPrice={price.old}
                openModal={openModal}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={style.control}>
        <span>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={style.prev}
          >
            <g id="left-arrow 6" clipPath="url(#clip0_24533_34)">
              <g id="Group">
                <g id="Group_2">
                  <path
                    id="Vector"
                    d="M32.6718 15.6719H4.54493L9.20426 11.0351C9.72416 10.5177 9.72615 9.67678 9.20871 9.15689C8.69127 8.63693 7.8503 8.635 7.33041 9.15237L0.390691 16.0586C0.390226 16.059 0.389894 16.0595 0.389496 16.0599C-0.129071 16.5773 -0.130731 17.4209 0.389363 17.9401C0.389828 17.9405 0.39016 17.941 0.390558 17.9414L7.33028 24.8476C7.85011 25.3649 8.69107 25.3631 9.20858 24.8431C9.72602 24.3232 9.72402 23.4823 9.20413 22.9648L4.54493 18.3281H32.6718C33.4054 18.3281 34 17.7335 34 17C34 16.2665 33.4054 15.6719 32.6718 15.6719Z"
                    fill="#E1E1E1"
                  />
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_24533_34">
                <rect width="34" height="34" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <div className={style.pagination}>
          <span className="paginationEl"></span>
        </div>
        <span>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={style.next}
          >
            <g id="left-arrow 6" clipPath="url(#clip0_24533_34)">
              <g id="Group">
                <g id="Group_2">
                  <path
                    id="Vector"
                    d="M32.6718 15.6719H4.54493L9.20426 11.0351C9.72416 10.5177 9.72615 9.67678 9.20871 9.15689C8.69127 8.63693 7.8503 8.635 7.33041 9.15237L0.390691 16.0586C0.390226 16.059 0.389894 16.0595 0.389496 16.0599C-0.129071 16.5773 -0.130731 17.4209 0.389363 17.9401C0.389828 17.9405 0.39016 17.941 0.390558 17.9414L7.33028 24.8476C7.85011 25.3649 8.69107 25.3631 9.20858 24.8431C9.72602 24.3232 9.72402 23.4823 9.20413 22.9648L4.54493 18.3281H32.6718C33.4054 18.3281 34 17.7335 34 17C34 16.2665 33.4054 15.6719 32.6718 15.6719Z"
                    fill="#E1E1E1"
                  />
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_24533_34">
                <rect width="34" height="34" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
    </section>
  );
};
