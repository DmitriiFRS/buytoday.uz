"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import promotion1 from "@/../public/Img/Homepage/Slider/iphone-promotion.webp";
import Image from "next/image";
import { EffectFlip, Pagination } from "swiper/modules";

const HeroSlider = () => {
     const slider = [promotion1];
     return (
          <div className="w-full h-auto aspect-square rounded-xl relative order-2 lg:order-1">
               <div className="h-full w-full">
                    <Swiper
                         className="h-full w-full"
                         spaceBetween={30}
                         modules={[Pagination, EffectFlip]}
                         speed={1500}
                         pagination={{
                              clickable: true,
                              el: ".hero-swiper-pagination",
                              bulletClass: "hero-swiper-pagination-bullet",
                              bulletActiveClass: "hero-swiper-pagination-bullet-active",
                         }}
                         loop={true}
                    >
                         {slider.map((slide, index) => {
                              return (
                                   <SwiperSlide key={index}>
                                        <Image quality={100} priority src={slide} alt="" width={1000} height={1000} className="w-full h-full" />
                                   </SwiperSlide>
                              );
                         })}
                    </Swiper>
               </div>
               <div className=" w-7.5 h-full absolute left-[30px] top-0 z-10 flex items-center">
                    <div className="hero-swiper-pagination h-full w-full flex flex-col max-h-[203px] justify-between items-center border py-[15px] rounded-full opacity-50 bg-black"></div>
               </div>
          </div>
     );
};

export default HeroSlider;
