import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
     const list = [
          {
               id: 0,
               title: "Высокая энергоэффективность",
          },
          {
               id: 1,
               title: "Интеллектуальные режимы управления",
          },
          {
               id: 2,
               title: "Комфорт с первого запуска",
          },
     ];
     return (
          <div className="relative flex items-center order-1 lg:order-2">
               <div className="">
                    <div className="tracking-0.02">
                         <h1 className="text-[32px] leading-110 xlg:text-[42px] max-w-full md:max-w-[80%] lg:max-w-full">
                              Кондиционеры, промышленные кондиционеры и бытовая техника от Midea и Welkin
                         </h1>
                         <p className="mt-5 font-medium leading-120 text-[16px] text-[#4a4c5b] max-w-full md:max-w-[60%] lg:max-w-full">
                              Мы являемся официальными представителями компании Midea и предлагаем широкий ассортимент высококачественных кондиционеров, промышленных кондиционеров
                              и бытовой техники от брендов Midea и Welkin.
                         </p>
                         <Link href={"/catalog"} className="inline-block mt-7 text-white bg-[#6A92FF] py-2.5 px-10 rounded-2xl text-[18px] font-medium">
                              В каталог
                         </Link>
                    </div>
                    <ul className="mt-10 flex flex-col justify-between gap-5 lg:mt-20 sm:flex-row">
                         {list.map((el) => {
                              return (
                                   <li key={el.id} className="relative max-w-[120px] leading-120 tracking-0.01 font-medium text-[#9ea0a6]">
                                        {el.title}
                                   </li>
                              );
                         })}
                    </ul>
               </div>
          </div>
     );
};

export default HeroContent;
