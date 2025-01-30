import styles from "@/Components/Catalog/Catalog.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import rac from "@/../public/Img/Catalog/midea-aircond.webp";
import lcac from "@/../public/Img/Catalog/midea-lcac.webp";
import cac from "@/../public/Img/Catalog/midea-cac.webp";
import wha from "@/../public/Img/Catalog/midea-wha.webp";
import mda from "@/../public/Img/Catalog/midea-mda.webp";
import Catalog from "@/ComponentsNew/Catalog/Catalog";

/*const catalog = [
     {
          id: 0,
          title: "Бытовые сплит-системы",
          img: aircond,
          href: "/catalog/air-conditioners",
     },
     {
          id: 1,
          title: "Мультисплит-системы",
          img: multi,
          href: "/catalog/multisplit",
     },
     {
          id: 2,
          title: "Полупромышленные сплит-системы",
          img: semi,
          href: "/catalog/semi-industrial",
     },
     {
          id: 3,
          title: "VRF-системы",
          img: vrf,
          href: "/catalog/vrf",
     },
     {
          id: 4,
          title: "Чиллеры",
          img: chiller,
          href: "/catalog/chillers",
     },
     {
          id: 5,
          title: "Фанкойлы",
          img: fancoil,
          href: "/catalog/fancoils",
     },
     {
          id: 6,
          title: "Холодильники",
          img: fridge,
          href: "/catalog/fridges",
     },
     {
          id: 7,
          title: "Стиральные машины",
          img: wash,
          href: "/catalog/wash",
     },
     {
          id: 8,
          title: "Газовые котлы",
          img: boilers,
          href: "/catalog/boilers",
     },
     {
          id: 9,
          title: "Очистители - Увлажнители",
          img: airPur,
          href: "/catalog/air-purifiers",
     },
     {
          id: 10,
          title: "Тепловые завесы",
          img: heatCurtain,
          href: "/catalog/heat-curtains",
     },
     {
          id: 11,
          title: "Осушители",
          img: dehumid,
          href: "/catalog/dehumids",
     },
     {
          id: 12,
          title: "Рекуператоры",
          img: recup,
          href: "/catalog/recups",
     },
     {
          id: 13,
          title: "Кулеры",
          img: cooler,
          href: "/catalog/coolers",
     },
];*/

export const metadata = {
     title: `Каталог товаров | Buy Today`,
     description: `Каталог товаров интернет-магазина Buy Today`,
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
