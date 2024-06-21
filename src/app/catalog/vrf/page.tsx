import styles from "@/Components/Catalog/Catalog.module.scss";
import Catalog from "@/Components/Catalog/Catalog";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import outer from "../../../../public/Img/Catalog/Vrf/vrfOuter.png";
import inner from "../../../../public/Img/Catalog/Vrf/vrfInner.png";
import atom from "../../../../public/Img/Catalog/Vrf/atom.png";

export const metadata = {
   title: "VRF система | Наружные и внутренние блоки VRF | Amazon-Asia",
   description: "VRF системы и оборудование для охлаждения больших помещений",
   keywords: ["vrf система", "vrf"],
};

const catalog = [
   {
      id: 0,
      title: "Наружные блоки VRF",
      img: outer,
      href: "/catalog/vrf-outer",
   },
   {
      id: 1,
      title: "Внутренние блоки VRF",
      img: inner,
      href: "/catalog/vrf-inner",
   },
   {
      id: 2,
      title: "ATOM VRF",
      img: atom,
      href: "/catalog/vrf-atom",
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
