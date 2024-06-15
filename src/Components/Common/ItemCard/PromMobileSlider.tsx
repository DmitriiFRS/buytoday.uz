"use client";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image, { StaticImageData } from "next/image";

type Props = {
   images: StaticImageData[];
   name: string;
};

function PromMobileSlider({ images, name }: Props) {
   return (
      <Swiper
         className={styles.item__slider}
         slidesPerView={1}
         pagination={{
            clickable: true,
            el: `.${styles.item__slider__bulletContainer}`,
         }}
         modules={[Pagination]}
      >
         <div className={styles.item__slider__bulletContainer}></div>
         {images.map((el, index) => {
            return (
               <SwiperSlide key={index}>
                  <div className={styles.item__slider__imgBody}>
                     <Image src={el} alt={name} fill style={{ objectFit: "contain" }} />
                  </div>
               </SwiperSlide>
            );
         })}
      </Swiper>
   );
}
export default PromMobileSlider;
