import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Catalog/Catalog.module.scss";
import Catalog from "@/ComponentsNew/Catalog/Catalog";
import fridge from "@/../public/Img/Catalog/mda-fridge.webp";
import wash from "@/../public/Img/Catalog/mda-wash.webp";

interface Props {}

const page: React.FC<Props> = ({}) => {
     const catalog = [
          {
               id: 0,
               title: "Холодильники",
               image: fridge,
               slug: "/catalog/fridges",
          },
          {
               id: 1,
               title: "Стиральные машины",
               image: wash,
               slug: "/catalog/wash",
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
};

export default page;
