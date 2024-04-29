import styles from "../Homepage.module.scss";
import GridItemLarge from "./GridItemLarge";
import GridItemSmall from "./GridItemSmall";
import aircond from "../../../../public/Img/Homepage/GridMidea/Alba.png";
import semiIndustrial from "../../../../public/Img/Homepage/GridMidea/semi-industrial.png";
import multisplit from "../../../../public/Img/Homepage/GridMidea/semi-industrial.png";
import vrfInner from "../../../../public/Img/Homepage/GridMidea/vrf-inner.png";
import vrfOuter from "../../../../public/Img/Homepage/GridMidea/vrf-outer.png";
import chiller from "../../../../public/Img/Homepage/GridMidea/chiller.png";
import fancoil from "../../../../public/Img/Homepage/GridMidea/fancoil.png";
import kkb from "../../../../public/Img/Homepage/GridMidea/kkb.png";
import Link from "next/link";

const items = {
   airconds: {
      title: "Настенные сплит-системы",
      img: aircond,
      href: "/catalog/air-conditioners",
   },
   semiIndustrials: {
      title: "Полупромышленные сплит-системы",
      img: semiIndustrial,
      href: "/catalog/semi-industrial",
   },
   multisplits: {
      title: "Мульти-сплит системы",
      img: multisplit,
      href: "/catalog/multi-split",
   },
   chillers: {
      title: "Чиллеры",
      img: chiller,
      href: "/catalog/chillers",
   },
   vrfOuter: {
      title: "Наружные блоки VRF системы",
      img: vrfOuter,
      href: "/catalog/vrf/vrf-outer",
   },
   vrfInner: {
      title: "Внутренние блоки VRF системы",
      img: vrfInner,
      href: "/catalog/vrf/vrf-inner",
   },
   fancoils: {
      title: "Фанкойлы",
      img: fancoil,
      href: "/catalog/fancoils",
   },
   kkb: {
      title: "Компрессорно-конденсаторные блоки",
      img: kkb,
      href: "/catalog/kkb",
   },
};

function EquipMidea() {
   return (
      <section className={styles.categories}>
         <div className="container">
            <div className={styles.categories__header}>
               <h2 className={styles.categories__title}>
                  Каталог оборудования <span>Amazon-Asia</span>
               </h2>
               <Link href={"/catalog"} className={styles.categories__btn}>
                  <span>Посмотреть весь каталог</span>
               </Link>
            </div>

            <div className={styles.categories__grid}>
               <Link href={items.airconds.href} className={`${styles.categories__aircond} ${styles.categories__gridItem}`}>
                  <GridItemLarge item={items.airconds} />
               </Link>
               <Link href={items.semiIndustrials.href} className={`${styles.categories__semiIndustrial} ${styles.categories__gridItem}`}>
                  <GridItemSmall item={items.semiIndustrials} />
               </Link>
               <Link href={items.multisplits.href} className={`${styles.categories__multiSplit} ${styles.categories__gridItem}`}>
                  <GridItemSmall item={items.multisplits} />
               </Link>
               <Link href={items.chillers.href} className={`${styles.categories__chillers} ${styles.categories__gridItem}`}>
                  <GridItemLarge item={items.chillers} />
               </Link>
               <Link href={items.vrfOuter.href} className={`${styles.categories__vrfOuter} ${styles.categories__gridItem}`}>
                  <GridItemSmall item={items.vrfOuter} />
               </Link>
               <Link href={items.vrfInner.href} className={`${styles.categories__vrfInner} ${styles.categories__gridItem}`}>
                  <GridItemSmall item={items.vrfInner} />
               </Link>
               <Link href={items.fancoils.href} className={`${styles.categories__fancoils} ${styles.categories__gridItem}`}>
                  <GridItemLarge item={items.fancoils} />
               </Link>
               <Link href={items.kkb.href} className={`${styles.categories__kkb} ${styles.categories__gridItem}`}>
                  <GridItemLarge item={items.kkb} />
               </Link>
            </div>
         </div>
      </section>
   );
}
export default EquipMidea;
