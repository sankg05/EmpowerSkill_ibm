import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './BadgeCard.css';

import { Pagination, Navigation } from 'swiper/modules';

export default function BadgeCard() {
  return (
    <div className="badge-card">
    <div>
      <h3 className="badge-heading">Badges</h3>
    </div>
    
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>Badge 1</SwiperSlide>
        <SwiperSlide>Badge 2</SwiperSlide>
        <SwiperSlide>Badge 3</SwiperSlide>
        <SwiperSlide>Badge 4</SwiperSlide>
        <SwiperSlide>Badge 5</SwiperSlide>
        
      </Swiper>
    
    </div>
  );
}
