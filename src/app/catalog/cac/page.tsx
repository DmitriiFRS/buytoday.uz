import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import Catalog from "@/ComponentsNew/Catalog/Catalog";
import styles from "@/Components/Catalog/Catalog.module.scss";
import chiller from "@/../public/Img/Catalog/cac-chiller.webp";
import vrf from "@/../public/Img/Catalog/cac-vrf.webp";
import fancoil from "@/../public/Img/Catalog/cac-fancoil.webp";

interface Props {}

const page: React.FC<Props> = ({}) => {
     const catalog = [
          {
               id: 0,
               title: "Чиллеры",
               image: chiller,
               slug: "/catalog/chillers",
          },
          {
               id: 1,
               title: "VRF-Системы",
               image: vrf,
               slug: "/catalog/vrf",
          },
          {
               id: 2,
               title: "Фанкойлы",
               image: fancoil,
               slug: "/catalog/fancoils",
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
