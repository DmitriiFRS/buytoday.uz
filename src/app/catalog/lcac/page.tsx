import styles from "@/Components/Catalog/Catalog.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import cas from "@/../public/Img/Catalog/cas-cond.webp";
import col from "@/../public/Img/Catalog/col-cond.webp";
import duct from "@/../public/Img/Homepage/Catalog/lcac.webp";
import heatCurtain from "@/../public/Img/Catalog/lcac-heat-curtain.webp";
import Catalog from "@/ComponentsNew/Catalog/Catalog";
import multi from "@/../public/Img/Catalog/multisplit.webp";

interface Props {}

const page: React.FC<Props> = ({}) => {
     const catalog = [
          {
               id: 0,
               title: "Кассетные кондиционеры",
               image: cas,
               slug: "/catalog/cassette-conditioners",
          },
          {
               id: 1,
               title: "Колонные кондиционеры",
               image: col,
               slug: "/catalog/col-conditioners",
          },
          {
               id: 2,
               title: "Канальные кондиционеры",
               image: duct,
               slug: "/catalog/duct-conditioners",
          },
          {
               id: 3,
               title: "Тепловые завесы",
               image: heatCurtain,
               slug: "/catalog/heat-curtains",
          },
          {
               id: 4,
               title: "Мультисплит система (внешний блок)",
               image: multi,
               slug: "/catalog/multi-outer",
          },
          {
               id: 4,
               title: "Мультисплит система (внутренний блок)",
               image: multi,
               slug: "/catalog/multi-inner",
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
