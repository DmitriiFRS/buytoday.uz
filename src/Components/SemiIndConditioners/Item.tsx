import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Image from "next/image";
import Link from "next/link";
import { SemiIndDataInner } from "@/app/catalog/col-conditioners/page";

function Item({ el, currencyVal, title }: { el: SemiIndDataInner; currencyVal: number; title: string }) {
   return (
      <div className={styles.aircond__item}>
         <div className={styles.aircond__item__main}>
            <div className={styles.aircond__item__img}>
               <Image src={el.imageCollection.items[0].url} alt={el.name} fill style={{ objectFit: "contain" }} />
            </div>
            <div className={styles.aircond__item__titles}>
               <h5 className={styles.aircond__item__title}>{title}</h5>
               <h3 className={styles.aircond__item__name}>{el.name}</h3>
               <div className={styles.aircond__item__params}>
                  <div className={styles.aircond__item__param}>
                     Инверторный: <span>{el.isInverter ? "Да" : "Нет"}</span>
                  </div>
                  <div className={styles.aircond__item__param}>
                     Диапазон температур: <span>{el.temperatureRange}</span>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.aircond__item__side}>
            <div className={styles.aircond__item__price}>От {(el.semiCondModelCollection.items[0].price * currencyVal).toLocaleString()} UZS</div>
            <Link href={`air-conditioners/${el.url}`} className={styles.aircond__item__btn}>
               <span>Подробнее</span>
            </Link>
         </div>
      </div>
   );
}
export default Item;
