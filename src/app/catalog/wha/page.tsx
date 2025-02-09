import humidifier from "@/../public/Img/Catalog/air-pur.webp";
import boiler from "@/../public/Img/Catalog/boilers.webp";
import cooler from "@/../public/Img/Catalog/cooler.webp";
import dehumids from "@/../public/Img/Catalog/dehumid.webp";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Catalog/Catalog.module.scss";
import Catalog from "@/ComponentsNew/Catalog/Catalog";

interface Props {}

const page: React.FC<Props> = ({}) => {
     const catalog = [
          {
               id: 0,
               title: "Очистители-увлажнители",
               image: humidifier,
               slug: "/catalog/air-purifiers",
          },
          {
               id: 1,
               title: "Газовые котлы",
               image: boiler,
               slug: "/catalog/boilers",
          },
          {
               id: 2,
               title: "Кулеры для воды",
               image: cooler,
               slug: "/catalog/coolers",
          },
          {
               id: 3,
               title: "Осушители",
               image: dehumids,
               slug: "/catalog/dehumids",
          },
     ];
     return (
          <section className={styles.catalog}>
               <div className="container">
                    <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
                    <h1 className="mt-[60px] text-[32px] font-medium lg:text-[40px]">Малая бытовая техника</h1>
                    <div className="mt-[30px]">
                         <Catalog items={catalog} isSubcatalog />
                    </div>
               </div>
          </section>
     );
};

export default page;
