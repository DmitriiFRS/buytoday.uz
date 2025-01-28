import rac from "@/../public/Img/Homepage/Catalog/rac.webp";
import lcac from "@/../public/Img/Homepage/Catalog/lcac.webp";
import cac from "@/../public/Img/Homepage/Catalog/cac.webp";
import wha from "@/../public/Img/Homepage/Catalog/wha.webp";
import mda from "@/../public/Img/Homepage/Catalog/mda.webp";
import Link from "next/link";
import Image from "next/image";

interface Props {}

const CatalogCategories: React.FC<Props> = ({}) => {
     const racCategory = {
          id: 0,
          title: "Бытовые кондиционеры",
          image: rac,
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
               slug: "/catalog/wha",
          },
          {
               id: 4,
               title: "Малая бытовая техника",
               image: mda,
               slug: "/catalog/mda",
          },
     ];
     return (
          <>
               <div>
                    <Link href={racCategory.slug}>
                         <Image
                              src={racCategory.image}
                              alt={racCategory.title}
                              width={1920}
                              height={1080}
                              className="object-cover rounded-[10px] h-auto w-full aspect-[288/198] lg:aspect-[3.017/1]"
                         />
                         <div className="text-[20px] mt-4 font-medium leading-[110%]">{racCategory.title}</div>
                    </Link>
               </div>
               <div className="grid grid-cols-1 gap-[35px] lg:grid-cols-2 mt-[35px]">
                    {categories.map((el, index) => {
                         return (
                              <Link href={el.slug} key={el.id}>
                                   <Image src={el.image} alt={el.title} width={1920} height={1080} className="object-cover rounded-[10px] h-auto w-full aspect-[288/198]" />
                                   <div className="text-[20px] mt-4 font-medium leading-[110%]">{el.title}</div>
                              </Link>
                         );
                    })}
               </div>
          </>
     );
};

export default CatalogCategories;
