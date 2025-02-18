import styles from "@/Components/Catalog/Catalog.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import recup from "@/../public/Img/Catalog/recup.webp";
import dehumids from "@/../public/Img/Catalog/dehumid.webp";
import Catalog from "@/ComponentsNew/Catalog/Catalog";

interface Props {}

const page: React.FC<Props> = ({}) => {
     const catalog = [
          {
               id: 0,
               title: "Рекуператоры",
               image: recup,
               slug: "/catalog/recuperators",
          },
          {
               id: 1,
               title: "Осушители",
               image: dehumids,
               slug: "/catalog/dehumids",
          },
     ];
     return (
          <section className={styles.catalog}>
               <div className="container">
                    <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
                    <h1 className="mt-[60px] text-[32px] font-medium lg:text-[40px]">Система контроля климата</h1>
                    <div className="mt-[30px]">
                         <Catalog items={catalog} isSubcatalog />
                    </div>
               </div>
          </section>
     );
};

export default page;
