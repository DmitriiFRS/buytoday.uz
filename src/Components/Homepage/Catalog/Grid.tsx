import styles from "../Homepage.module.scss";
import aircond from "../../../../public/Img/Homepage/Catalog/aircond.png";
import semi from "../../../../public/Img/Homepage/Catalog/semi.png";
import multi from "../../../../public/Img/Homepage/Catalog/multi.png";
import fridges from "../../../../public/Img/Homepage/Catalog/fridge.png";
import wash from "../../../../public/Img/Homepage/Catalog/wash.png";
import purif from "../../../../public/Img/Homepage/Catalog/cleaners.png";
import boilers from "../../../../public/Img/Homepage/Catalog/boilers.png";
import vrf from "../../../../public/Img/Homepage/Catalog/vrf.png";
import chillers from "../../../../public/Img/Homepage/Catalog/chiller.png";
import Image from "next/image";
import banner from "../../../../public/Img/Homepage/Catalog/free-install3.jpg";
import Link from "next/link";

const catalog = [
   {
      id: 0,
      title: "Бытовые кондиционеры",
      img: aircond,
      className: styles.catalog__grid__aircond,
      href: "/catalog/air-conditioners",
   },
   {
      id: 1,
      title: "Полупромышленные сплит-системы",
      img: semi,
      className: styles.catalog__grid__semi,
      href: "/catalog/semi-industrial",
   },
   {
      id: 2,
      title: "Мультисплит-системы",
      img: multi,
      className: styles.catalog__grid__multi,
      href: "/catalog/multisplit",
   },
   {
      id: 3,
      title: "Холодильники",
      img: fridges,
      className: styles.catalog__grid__fridges,
      href: "/catalog/fridges",
   },
   {
      id: 4,
      title: "Стиральные машины",
      img: wash,
      className: styles.catalog__grid__wash,
      href: "/catalog/wash",
   },
   {
      id: 5,
      title: "Очистители и увлажнители",
      img: purif,
      className: styles.catalog__grid__cols,
      href: "/catalog/air-purifiers",
   },
   {
      id: 6,
      title: "Газовые котлы",
      img: boilers,
      className: styles.catalog__grid__boilers,
      href: "/catalog/boilers",
   },
   {
      id: 7,
      title: "VRF-системы",
      img: vrf,
      className: styles.catalog__grid__vrf,
      href: "/catalog/vrf",
   },
   {
      id: 8,
      title: "Чиллеры",
      img: chillers,
      className: styles.catalog__grid__chillers,
      href: "/catalog/chillers",
   },
   {
      id: 9,
      title: "",
      img: banner,
      className: styles.catalog__grid__slider,
      href: "/promotions/free-install",
   },
];

function Grid() {
   return (
      <div className={styles.catalog__grid}>
         {catalog.map((el, index) => {
            return (
               <Link style={{ color: "inherit" }} href={el.href} className={`${styles.catalog__grid__item} ${el.className}`} key={el.id}>
                  {index === catalog.length - 1 ? (
                     <div className={styles.catalog__grid__banner}>
                        <Image src={el.img} alt={el.title} fill style={{ objectFit: "cover", objectPosition: "left" }} />
                     </div>
                  ) : (
                     <div className={`${styles.catalog__grid__img} ${index === 0 ? styles.catalog__grid__imgAircond : ""}`}>
                        <Image src={el.img} alt={el.title} fill style={{ objectFit: "contain" }} />
                     </div>
                  )}

                  <div className={styles.catalog__grid__title}>
                     <div>{el.title}</div>
                  </div>
               </Link>
            );
         })}
      </div>
   );
}
export default Grid;
