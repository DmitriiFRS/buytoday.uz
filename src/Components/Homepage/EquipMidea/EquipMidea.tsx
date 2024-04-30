import styles from "../Homepage.module.scss";
import GridItemLarge from "./GridItemLarge";
import GridItemSmall from "./GridItemSmall";
import Link from "next/link";
import { items } from "../Data/CatalogMidea.data";

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
