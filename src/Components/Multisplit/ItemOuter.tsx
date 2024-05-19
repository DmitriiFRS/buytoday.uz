import { MultiOuterBody } from "@/Data/multisplits.data";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Image from "next/image";
import Link from "next/link";

function ItemOuter({ el, currencyVal }: { el: MultiOuterBody; currencyVal: number }) {
   return (
      <div className={styles.aircond__item}>
         <div className={styles.aircond__item__main}>
            <div className={styles.aircond__item__img}>
               <Image src={el.img} alt={el.name} fill style={{ objectFit: "contain" }} />
            </div>
            <div className={styles.aircond__item__titles}>
               <h5 className={styles.aircond__item__title}>Мульти-сплит системы</h5>
               <h3 className={styles.aircond__item__name}>{el.name}</h3>
               <div className={styles.aircond__item__params}>
                  <div className={styles.aircond__item__param}>
                     Площадь охлаждения: <span>До {el.params.aream2}m2</span>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.aircond__item__side}>
            <div className={styles.aircond__item__price}>От {(el.price * currencyVal).toLocaleString()} UZS</div>
            <Link href={`multisplit/${el.url.replace(/\s|\//g, "-").toLowerCase()}`} className={styles.aircond__item__btn}>
               <span>Подробнее</span>
            </Link>
         </div>
      </div>
   );
}
export default ItemOuter;
