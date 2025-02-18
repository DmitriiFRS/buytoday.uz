import styles from "@/Components/Catalog/Catalog.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import boiler from "@/../public/Img/Catalog/boilers.webp";
import heatCurtain from "@/../public/Img/Catalog/heat-curtain.webp";
import Catalog from "@/ComponentsNew/Catalog/Catalog";

interface Props {}

const page: React.FC<Props> = ({}) => {
     const catalog = [
          {
               id: 0,
               title: "Тепловые завесы",
               image: heatCurtain,
               slug: "/catalog/heat-curtains",
          },
          {
               id: 1,
               title: "Газовые котлы",
               image: boiler,
               slug: "/catalog/boilers",
          },
     ];
     return (
          <section className={styles.catalog}>
               <div className="container">
                    <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
                    <h1 className="mt-[60px] text-[32px] font-medium lg:text-[40px]">Системы отопления</h1>
                    <div className="mt-[30px]">
                         <Catalog items={catalog} isSubcatalog />
                    </div>
               </div>
          </section>
     );
};

export default page;
