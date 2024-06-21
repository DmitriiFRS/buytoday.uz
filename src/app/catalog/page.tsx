import Catalog from "@/Components/Catalog/Catalog";
import styles from "@/Components/Catalog/Catalog.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import aircond from "../../../public/Img/Catalog/aircond.png";
import multi from "../../../public/Img/Catalog/multi.png";
import semi from "../../../public/Img/Catalog/semi.png";
import vrf from "../../../public/Img/Catalog/vrf.png";
import chiller from "../../../public/Img/Catalog/chiller.png";
import fancoil from "../../../public/Img/Catalog/fancoil.png";
import fridge from "../../../public/Img/Catalog/fridge.png";
import wash from "../../../public/Img/Catalog/wash.png";
import boilers from "../../../public/Img/Catalog/boilers.png";
import airPur from "../../../public/Img/Catalog/fresh-air-black.png";

const catalog = [
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
];

export const metadata = {
   title: "Каталог товаров | Amazon-Asia",
   description: "Каталог товаров интернет-магазина Amazon-Asia",
   keywords: ["каталог", "товары"],
};

async function page() {
   return (
      <section className={styles.catalog}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Catalog items={catalog} />
         </div>
      </section>
   );
}
export default page;
