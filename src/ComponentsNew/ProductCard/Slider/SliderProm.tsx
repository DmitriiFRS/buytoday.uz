"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { VRFInnerBody } from "@/Components/Catalog/VrfInner/VrfInner.data";

interface Props {
     product: VRFInnerBody;
}

const SliderProm: React.FC<Props> = ({ product }) => {
     const images = product.imges;
     return (
          <section className="mt-[60px] bg-white p-[10px] rounded-[20px] lg:sticky lg:top-[100px] lg:h-auto lg:aspect-square lg:max-h-[650px]">
               <Swiper
                    modules={[Pagination]}
                    pagination={{
                         el: ".product-swiper-pagination",
                         bulletClass: "size-2 rounded-full bg-gray-400",
                         bulletActiveClass: "bg-gray-900",
                         clickable: true,
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    className=""
               >
                    {Array.isArray(images)
                         ? images.map((el, index) => {
                                return (
                                     <SwiperSlide key={index}>
                                          <div className="flex items-center justify-center aspect-square h-auto w-full">
                                               <Image src={el.src} alt={product.name || ""} width={1400} height={1400} className="object-contain h-full w-full" />
                                          </div>
                                     </SwiperSlide>
                                );
                           })
                         : null}
               </Swiper>
               <div className="product-swiper-pagination"></div>
          </section>
     );
};

export default SliderProm;
