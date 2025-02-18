import rac from "@/../public/Img/Homepage/Catalog/airconds-pc.webp";
import racM from "@/../public/Img/Homepage/Catalog/airconds-mob.webp";
import lcac from "@/../public/Img/Homepage/Catalog/lcac.webp";
import cac from "@/../public/Img/Homepage/Catalog/cac.webp";
import wha from "@/../public/Img/Homepage/Catalog/wha.webp";
import mda from "@/../public/Img/Homepage/Catalog/mda.webp";
import heat from "@/../public/Img/Homepage/Catalog/heating-systems.webp";
import climate from "@/../public/Img/Homepage/Catalog/climate-control.webp";
import Link from "next/link";
import Image from "next/image";

interface Props {}

const CatalogCategories: React.FC<Props> = ({}) => {
     const racCategory = {
          id: 0,
          title: "Бытовые кондиционеры",
          image: rac,
          imageMobile: racM,
          slug: "/catalog/air-conditioners",
     };
     const categories = [
          {
               id: 1,
               title: "Коммерческие кондиционеры",
               image: lcac,
               slug: "/catalog/lcac",
          },
          {
               id: 2,
               title: "Промышленное кондиционирование",
               image: cac,
               slug: "/catalog/cac",
          },
          {
               id: 3,
               title: "Крупная бытовая техника",
               image: wha,
               slug: "/catalog/mda",
          },
          {
               id: 4,
               title: "Малая бытовая техника",
               image: mda,
               slug: "/catalog/wha",
          },
          {
               id: 5,
               title: "Системы отопления",
               image: heat,
               slug: "/catalog/heating-systems",
          },
          {
               id: 6,
               title: "Системы контроля климата",
               image: climate,
               slug: "/catalog/climate-control",
          },
     ];
     return (
          <>
               <div>
                    <Link href={racCategory.slug} className="group overflow-hidden block rounded-[10px]">
                         <Image
                              src={racCategory.image}
                              alt={racCategory.title}
                              width={1920}
                              height={1080}
                              className="object-cover h-auto w-full aspect-[288/198] lg:aspect-[3.017/1] hidden lg:block group-hover:scale-105 duration-700 rounded-[10px]"
                         />
                         <Image
                              src={racCategory.imageMobile}
                              alt={racCategory.title}
                              width={1920}
                              height={1080}
                              className="object-cover h-auto w-full aspect-[288/198] lg:aspect-[3.017/1] block lg:hidden rounded-[10px]"
                         />
                         <div className="text-[20px] mt-4 font-medium leading-[110%]">{racCategory.title}</div>
                    </Link>
               </div>
               <div className="grid grid-cols-1 gap-[35px] lg:grid-cols-2 mt-[35px]">
                    {categories.map((el, index) => {
                         return (
                              <Link href={el.slug} key={el.id} className="group overflow-hidden block rounded-[10px]">
                                   <Image
                                        src={el.image}
                                        alt={el.title}
                                        width={1920}
                                        height={1080}
                                        className="object-cover h-auto w-full aspect-[288/198] group-hover:scale-105 duration-700 rounded-[10px]"
                                   />
                                   <div className="text-[20px] mt-4 font-medium leading-[110%]">{el.title}</div>
                              </Link>
                         );
                    })}
               </div>
          </>
     );
};

export default CatalogCategories;
