"use client";

import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { MdNavigateNext } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "@/Components/Common/ItemCard/SwiperStyles.scss";
import * as ReactDOMServer from "react-dom/server";
import { useAppDispatch, useAppSelector } from "@/Hooks/ReduxHooks";
import { setSliderOpen } from "@/Redux/Slices/ItemCard.slice";

type ImgCollection = {
   url: string;
};

type Props = {
   images: ImgCollection[];
};

function Slider({ images }: Props) {
   const dispatch = useAppDispatch();
   const isSliderOpen = useAppSelector((state) => state.itemSlice.slider);
   const pagination = {
      clickable: true,
      renderBullet: function (index: number, className: string) {
         return `
            <div className=${className}>
               ${index + 1}
            </div>
         `;
      },
   };
   const navigation = {
      nextEl: `.${styles.slider__nextSlide}`,
      prevEl: `.${styles.slider__prevSlide}`,
   };
   return (
      <div className={`${styles.slider} ${isSliderOpen ? styles.slider__active : ""}`}>
         <button onClick={() => dispatch(setSliderOpen(false))} className={styles.slider__close}>
            <IoIosClose className={styles.slider__close__icon} />
         </button>
         <Swiper
            className={styles.slider__container}
            slidesPerView={1}
            loop
            modules={[Navigation, Pagination]}
            pagination={{
               clickable: true,
            }}
            navigation={navigation}
         >
            {images.map((el, index) => {
               return (
                  <SwiperSlide key={index} className={styles.slider__imgContainer}>
                     <div className={styles.slider__mainImg}>
                        <Image src={el.url} alt="Картинка" fill style={{ objectFit: "contain" }} />
                     </div>
                  </SwiperSlide>
               );
            })}
            <div className="swiper-pagination">
               <div className="swiper-pagination-bullet"></div>
            </div>
            <button className={styles.slider__nextSlide}>
               <MdNavigateNext />
            </button>
            <button className={styles.slider__prevSlide}>
               <MdNavigateNext />
            </button>
         </Swiper>
      </div>
   );
}
export default Slider;
