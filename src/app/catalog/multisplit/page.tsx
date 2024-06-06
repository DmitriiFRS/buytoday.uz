import styles from "@/Components/Catalog/Catalog.module.scss";
import Catalog from "@/Components/Catalog/Catalog";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import outer from "../../../../public/Img/Catalog/multisplits/multiOuter.png";
import inner from "../../../../public/Img/Catalog/multisplits/multiInner.png";

const catalog = [
   {
      id: 0,
      title: "Мульти-сплит внешние блоки",
      img: outer,
      href: "/catalog/multisplit-outer",
   },
   {
      id: 1,
      title: "Мульти-сплит внутренние блоки",
      img: inner,
      href: "/catalog/multisplit-inner",
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
