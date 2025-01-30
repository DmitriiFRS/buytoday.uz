"use client";

import arrow from "@/../public/Icons/arrow.svg";
import Image from "next/image";
import tglogo from "@/../public/Img/Homepage/buytoday-qr.webp";

interface Props {}

const CatalogTitles: React.FC<Props> = ({}) => {
     return (
          <div className="lg:grid lg:grid-cols-2 lg:gap-[60px]">
               <div className="">
                    <h3 className="bg-[#6A92FF] w-max p-[8px_10px] rounded-[25px] text-white text-[13px] font-medium lg:text-[14px]">Лучший сервис в Узбекистане</h3>
                    <div className="mt-5 text-[30px] leading-[110%] font-medium lg:text-[45px]">
                         Доверьтесь нам и получите
                         <h2>качественное обслуживание</h2>
                    </div>
                    <div className="mt-5 flex gap-[10px] sm:gap-20 sm:mt-10 sm:text-[16px]">
                         <a target="_blank" href="tel:+998771393660">
                              +998 77 139 36 60
                         </a>
                         <a target="_blank" href="mailto:buytoday.uz@gmail.com">
                              buytoday.uz@gmail.com
                         </a>
                    </div>
               </div>
               <div className="mt-5 rounded-[12px] bg-[#6A92FF] text-white font-medium py-5 px-[15px] sm:mt-10 sm:flex lg:mt-0 lg:flex-col lg:p-[30px]">
                    <div className="flex flex-col gap-[10px] leading-[110%] sm:flex-[0_1_70%] lg:text-[16px]">
                         <p>Сервис центры по всему Узбекистану</p>
                         <p>Гарантируем высокое качество продукта, только официальные товары</p>
                         <p>Служба доставки: курьер доставит ваш заказ в течение 2х часов</p>
                    </div>
                    <div className="bg-white mt-5 p-[10px] flex flex-col items-center gap-[10px] rounded-[10px] max-w-[70%] m-[0_auto] sm:flex-[0_1_30%] sm:mt-0 lg:max-w-[172px] lg:w-full lg:mt-5">
                         <div className="text-[#3d6df0]">Наш Telegram</div>
                         <Image src={tglogo} alt="telegram" width={700} height={700} className="w-full h-full object-contain" />
                         <div className="bg-black flex gap-1 h-[50px] w-full rounded-[25px] items-center justify-center lg:text-[16px]">
                              <button>Написать</button>
                              <Image src={arrow} alt="arrow" width={18} height={18} />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CatalogTitles;
