"use client";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { AircondDataInner } from "@/app/catalog/air-conditioners/[item]/page";
import Image from "next/image";

function MobileSlider({ el }: { el: AircondDataInner }) {
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
         {el.imageCollection.items.map((el, index) => {
            return (
               <SwiperSlide key={index}>
                  <div className={styles.item__slider__imgBody}>
                     <Image src={el.url} alt="кондиционер" fill style={{ objectFit: "contain" }} />
                  </div>
               </SwiperSlide>
            );
         })}
      </Swiper>
   );
}
export default MobileSlider;
