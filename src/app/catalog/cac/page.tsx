import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import Catalog from "@/ComponentsNew/Catalog/Catalog";
import styles from "@/Components/Catalog/Catalog.module.scss";
import chiller from "@/../public/Img/Catalog/chiller.webp";
import vrf from "@/../public/Img/Catalog/vrf.webp";
import vrfInner from "@/../public/Img/Catalog/inner-vrf.webp";
import wmfancoil from "@/../public/Img/Catalog/fancoil-vrf.webp";
import atom from "@/../public/Img/Catalog/atomVrf.webp";
import casfancoil from "@/../public/Img/Catalog/cas-fancoil.webp";
import ductfancoil from "@/../public/Img/Catalog/duct-fancoil.webp";
import floorfancoil from "@/../public/Img/Catalog/fs-fancoil.webp";

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
               title: "Наружные блоки VRF-Систем",
               image: vrf,
               slug: "/catalog/vrf-outer",
          },
          {
               id: 2,
               title: "Внутренние блоки VRF-Систем",
               image: vrfInner,
               slug: "/catalog/vrf-inner",
          },
          {
               id: 3,
               title: "ATOM VRF-Системы",
               image: atom,
               slug: "/catalog/vrf-atom",
          },
          {
               id: 4,
               title: "Настенные фанкойлы",
               image: wmfancoil,
               slug: "/catalog/wall-mounted-fancoils",
          },
          {
               id: 5,
               title: "Кассетные фанкойлы",
               image: casfancoil,
               slug: "/catalog/cassette-fancoils",
          },
          {
               id: 6,
               title: "Канальные фанкойлы",
               image: ductfancoil,
               slug: "/catalog/duct-fancoils",
          },
          {
               id: 7,
               title: "Напольно-потолочные фанкойлы",
               image: floorfancoil,
               slug: "/catalog/floor-to-ceiling-fancoils",
          },
     ];
     return (
          <section className={styles.catalog}>
               <div className="container">
                    <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
                    <h1 className="mt-[60px] text-[32px] font-medium lg:text-[40px]">Промышленное оборудование</h1>
                    <div className="mt-[30px]">
                         <Catalog items={catalog} isSubcatalog />
                    </div>
               </div>
          </section>
     );
};

export default page;
