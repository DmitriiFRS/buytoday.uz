import styles from "@/Components/Catalog/Catalog.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import rac from "@/../public/Img/Homepage/Catalog/airconds-mob.webp";
import lcac from "@/../public/Img/Homepage/Catalog/lcac.webp";
import cac from "@/../public/Img/Homepage/Catalog/cac.webp";
import wha from "@/../public/Img/Homepage/Catalog/wha.webp";
import mda from "@/../public/Img/Homepage/Catalog/mda.webp";
import heat from "@/../public/Img/Homepage/Catalog/heating-systems.webp";
import climate from "@/../public/Img/Homepage/Catalog/climate-control.webp";
import Catalog from "@/ComponentsNew/Catalog/Catalog";

export const metadata = {
     title: `Каталог товаров | Каталог Midea & Welkin | Buytoday`,
     description: `Каталог товаров интернет-магазина Buy Today | Midea & Welkin`,
     keywords: ["каталог", "товары"],
};

async function page() {
     const catalog = [
          {
               id: 0,
               title: "Бытовые кондиционеры",
               image: rac,
               slug: "/catalog/air-conditioners",
          },
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
               title: "Система отопления",
               image: heat,
               slug: "/catalog/heating-systems",
          },
          {
               id: 6,
               title: "Система контроля климата",
               image: climate,
               slug: "/catalog/climate-control",
          },
     ];
     return (
          <section className={styles.catalog}>
               <div className="container">
                    <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
                    <h1 className="mt-[60px] text-[32px] font-medium lg:text-[40px]">Каталог</h1>
                    <div className="mt-[30px]">
                         <Catalog items={catalog} />
                    </div>
               </div>
          </section>
     );
}
export default page;
