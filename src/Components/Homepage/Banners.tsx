"use client";
import styles from "./Homepage.module.scss";
import { MdNavigateNext } from "react-icons/md";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { bannerImages } from "./Data/Banners.data";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";

function Banners() {
     return (
          <section className={styles.banners}>
               <div className="container">
                    <Swiper
                         className={styles.banners__swiper}
                         slidesPerView={1}
                         loop
                         effect={"fade"}
                         pagination={{
                              clickable: true,
                              el: `.${styles.banners__bulletContainer}`,
                         }}
                         navigation={{
                              nextEl: `.${styles.banners__nextSlide}`,
                              prevEl: `.${styles.banners__prevSlide}`,
                         }}
                         autoplay={{
                              delay: 5000,
                              pauseOnMouseEnter: true,
                         }}
                         modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    >
                         <button className={styles.banners__nextSlide}>
                              <MdNavigateNext />
                         </button>
                         <button className={styles.banners__prevSlide}>
                              <MdNavigateNext />
                         </button>
                         <div className={styles.banners__bulletContainer}></div>
                         {bannerImages.map((el, index) => {
                              return (
                                   <SwiperSlide key={index}>
                                        <Link href={el.href} className={styles.banners__imgBody}>
                                             <Image priority src={el.pc} alt="слайд" fill style={{ objectFit: "cover" }} />
                                        </Link>
                                        <Link href={el.href} className={styles.banners__imgBodyM}>
                                             <Image priority src={el.mobile} alt="слайд" fill style={{ objectFit: "cover" }} />
                                        </Link>
                                   </SwiperSlide>
                              );
                         })}
                    </Swiper>
               </div>
          </section>
     );
}
export default Banners;
