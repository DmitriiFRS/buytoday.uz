"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AircondProductTypeModel } from "@/Types/AircondProductType.type";
import Image from "next/image";
import { strapiUrl } from "@/service/const";
import { Pagination } from "swiper/modules";
import { useEffect } from "react";

interface Props {
     product: AircondProductTypeModel;
}

const Slider: React.FC<Props> = ({ product }) => {
     const images = product.attributes.paramsWrapper?.aircond?.product?.data.attributes.images || product.attributes.paramsWrapper?.images;
     return (
          <section className="mt-[60px] bg-white p-[10px] rounded-[20px] lg:sticky lg:top-[100px] lg:h-auto lg:aspect-square">
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
                    {Array.isArray(images.data)
                         ? images.data.map((el, index) => {
                                return (
                                     <SwiperSlide key={index}>
                                          <div className="flex items-center justify-center aspect-square h-auto w-full">
                                               <Image
                                                    src={strapiUrl + el.attributes.url}
                                                    alt={product.attributes.name || ""}
                                                    width={1400}
                                                    height={1400}
                                                    className="object-contain"
                                               />
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

export default Slider;
