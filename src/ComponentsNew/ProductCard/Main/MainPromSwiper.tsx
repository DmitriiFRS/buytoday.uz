"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { VRFInnerBody, VRFInnerModel } from "@/Components/Catalog/VrfInner/VrfInner.data";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface PropTypes {
     models: VRFInnerModel[];
     productInner: VRFInnerBody;
     productImage: StaticImageData;
     category: string;
     productOuter: VRFInnerBody;
}

const MainPromSwiper = ({ models, productInner, productImage, category, productOuter }: PropTypes) => {
     return (
          <>
               <button className="swiper-models-button-prev flex justify-center">
                    <IoIosArrowUp size={30} />
               </button>
               <Swiper
                    modules={[Navigation]}
                    direction="vertical"
                    slidesPerView={6}
                    navigation={{
                         nextEl: ".swiper-models-button-next",
                         prevEl: ".swiper-models-button-prev",
                    }}
                    className="h-[500px] w-full"
               >
                    {models.map((model, modelIds) => {
                         return (
                              <SwiperSlide key={modelIds}>
                                   <li className={`p-[10px] bg-[#fff] rounded-[10px] h-20 ${productInner.url === model.model ? "bg-black text-white" : ""}`}>
                                        <Link
                                             href={`/catalog/${category}/${productOuter.url}_${model.model.replace(/\s|\//g, "-").toLowerCase()}`}
                                             className="flex h-full font-semibold gap-[10px]"
                                        >
                                             <Image src={productImage} alt="product" width={500} height={500} className="flex-[0_1_20%] w-full h-full object-contain" />
                                             <div className="flex-[0_1_80%] flex flex-col justify-between">
                                                  <span>{model.model.replace(/-/g, " ").toUpperCase()}</span>
                                             </div>
                                             <div>
                                                  <span>{model.coolingPower}</span>
                                                  <span>kW</span>
                                             </div>
                                        </Link>
                                   </li>
                              </SwiperSlide>
                         );
                    })}
               </Swiper>
               <button className="swiper-models-button-next flex justify-center">
                    <IoIosArrowDown size={30} />
               </button>
          </>
     );
};

export default MainPromSwiper;
