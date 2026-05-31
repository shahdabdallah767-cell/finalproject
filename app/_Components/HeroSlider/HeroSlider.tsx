'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroSlider({ imagesList, sliderPerView = 1, spaceBetween }: { imagesList: string[]; sliderPerView?: number; spaceBetween?: number; }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={sliderPerView}
      loop
      navigation
      pagination={{
        clickable: true, renderBullet: function (index, className) {
          return `<span class="${className} w-5! h-5! bg-white!"></span>`
        }, bulletActiveClass: "w-10! bg-white! opacity-100! rounded-xl!"
      }}


    >
      {imagesList.map(imgsrc => <SwiperSlide>

        <img src={imgsrc} alt='' className='w-full h-100' />
      </SwiperSlide>)}


    </Swiper>
  );
};
