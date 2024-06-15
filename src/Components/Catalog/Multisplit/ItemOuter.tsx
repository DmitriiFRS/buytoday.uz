import { MultiOuterBody } from "@/Data/multisplits.data";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import Image from "next/image";
import Link from "next/link";

function ItemOuter({ el }: { el: MultiOuterBody }) {
   return (
      <div className={styles.aircond__item}>
         <div className={styles.aircond__item__main}>
            <div className={styles.aircond__item__img}>
               <Image src={el.img} alt={el.name} fill style={{ objectFit: "contain" }} />
            </div>
            <div className={styles.aircond__item__titles}>
               <h5 className={styles.aircond__item__title}>Наружный блок мульти-сплит систем</h5>
               <h3 className={styles.aircond__item__name}>{el.name}</h3>
               <div className={styles.aircond__item__params}>
                  <div className={styles.aircond__item__param}>
                     Площадь охлаждения: <span>До {el.params.aream2}m2</span>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.aircond__item__side}>
            <Link href={`multisplit-outer/${el.url.replace(/\s|\//g, "-").toLowerCase()}`} className={styles.aircond__item__btn}>
               <span>Подробнее</span>
            </Link>
         </div>
      </div>
   );
}
export default ItemOuter;
