import styles from "@/Components/Catalog/Catalog.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import outer from "../../../../public/Img/Catalog/cac-vrf.webp";
import inner from "../../../../public/Img/Catalog/vrf-inner.webp";
import atom from "../../../../public/Img/Catalog/vrf-atom.webp";
import Catalog from "@/ComponentsNew/Catalog/Catalog";

export const metadata = {
     title: `VRF система | Наружные и внутренние блоки VRF | ${process.env.BRAND}`,
     description: "VRF системы и оборудование для охлаждения больших помещений",
     keywords: ["vrf система", "vrf"],
};

const catalog = [
     {
          id: 0,
          title: "Наружные блоки VRF",
          image: outer,
          slug: "/catalog/vrf-outer",
     },
     {
          id: 1,
          title: "Внутренние блоки VRF",
          image: inner,
          slug: "/catalog/vrf-inner",
     },
     {
          id: 2,
          title: "ATOM VRF",
          image: atom,
          slug: "/catalog/vrf-atom",
     },
];

function page() {
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
