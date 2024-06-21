import styles from "@/Components/Catalog/Catalog.module.scss";
import Catalog from "@/Components/Catalog/Catalog";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import col from "../../../../public/Img/Catalog/Semi/col.png";
import cas from "../../../../public/Img/Catalog/Semi/cas.png";
import duct from "../../../../public/Img/Catalog/Semi/duct.png";

export const metadata = {
   title: "Полу-промышленные сплит-системы | Колонные, кассетные и канальные кондиционеры | Amazon-Asia",
   description: "Семи-промышленные сплит-системы",
};

const catalog = [
   {
      id: 0,
      title: "Колонные сплит-системы",
      img: col,
      href: "/catalog/col-conditioners",
   },
   {
      id: 1,
      title: "Кассетные сплит-системы",
      img: cas,
      href: "/catalog/cassette-conditioners",
   },
   {
      id: 2,
      title: "Канальные сплит-системы",
      img: duct,
      href: "/catalog/duct-conditioners",
   },
];

function page() {
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
