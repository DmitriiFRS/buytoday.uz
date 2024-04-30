"use client";

import { Navigation } from "swiper/modules";
import styles from "../Homepage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext } from "react-icons/md";
import { hits } from "../Data/Hits.data";
import Image from "next/image";
import { useEffect, useState } from "react";

function TopSales() {
   const [isRender, setRender] = useState(false);
   useEffect(() => {
      setRender(true);
   }, []);
   return (
      <section className={styles.topsales}>
         <div className="container">
            <h2 className={styles.topsales__title}>Хиты продаж</h2>
            <Swiper
               className={styles.topsales__grid}
               slidesPerView={4}
               spaceBetween={20}
               navigation={{
                  nextEl: `.${styles.topsales__nextSlide}`,
                  prevEl: `.${styles.topsales__prevSlide}`,
               }}
               modules={[Navigation]}
            >
               <button className={styles.topsales__nextSlide}>
                  <MdNavigateNext />
               </button>
               <button className={styles.topsales__prevSlide}>
                  <MdNavigateNext />
               </button>
               {hits.map((el) => {
                  return (
                     <SwiperSlide key={el.id} className={styles.topsales__item}>
                        <div className={styles.topsales__img}>
                           <Image src={el.img} alt={el.title} fill style={{ objectFit: "contain" }} />
                        </div>
                        <div className={styles.topsales__name}>{el.title}</div>
                        <div className={styles.topsales__price}>{el.price}</div>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </section>
   );
}
export default TopSales;
