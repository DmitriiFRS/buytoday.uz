import styles from "@/Components/Catalog/Catalog.module.scss";
import Catalog from "@/Components/Catalog/Catalog";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import wmFancoil from "../../../../public/Img/Catalog/Fancoils/wm-fan-coil.png";
import casFancoil from "../../../../public/Img/Catalog/Fancoils/Four-flow-cassette-fan-coil.png";
import ductFancoil from "../../../../public/Img/Catalog/Fancoils/duct-fan-coil.png";
import ftsFancoil from "../../../../public/Img/Catalog/Fancoils/fs-fan-coil.png";

export const metadata = {
   title: `Фанкойлы | ${process.env.BRAND}`,
   description: "Фанкойлы для офисов, коттеджей, домов. Промышленное кондиционирование",
   keywords: ["фанкойлы", "промышленное кондиционирование", "офисы", "квартиры", "дома"],
};

const catalog = [
   {
      id: 0,
      title: "Настенные фанкойлы",
      img: wmFancoil,
      href: "/catalog/wall-mounted-fancoils",
   },
   {
      id: 1,
      title: "Кассетные фанкойлы",
      img: casFancoil,
      href: "/catalog/cassette-fancoils",
   },
   {
      id: 2,
      title: "Канальные фанкойлы",
      img: ductFancoil,
      href: "/catalog/duct-fancoils",
   },
   {
      id: 3,
      title: "Напольно-потолочные фанкойлы",
      img: ftsFancoil,
      href: "/catalog/floor-to-ceiling-fancoils",
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
