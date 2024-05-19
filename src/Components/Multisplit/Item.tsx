import { AircondDataInner } from "@/app/catalog/air-conditioners/page";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Image from "next/image";
import Link from "next/link";

function Item({ el, currencyVal }: { el: AircondDataInner; currencyVal: number }) {
   return (
      <div className={styles.aircond__item}>
         <div className={styles.aircond__item__main}>
            <div className={styles.aircond__item__img}>
               <Image src={el.imageCollection.items[0].url} alt={el.name} fill style={{ objectFit: "contain" }} />
            </div>
            <div className={styles.aircond__item__titles}>
               <h5 className={styles.aircond__item__title}>Мульти-сплит системы</h5>
               <h3 className={styles.aircond__item__name}>Настенный фен {el.name}</h3>
               <div className={styles.aircond__item__params}>
                  <div className={styles.aircond__item__param}>
                     Инверторный: <span>{el.isInverter ? "Да" : "Нет"}</span>
                  </div>
                  <div className={styles.aircond__item__param}>
                     Компрессор: <span>{el.compressor}</span>
                  </div>
                  <div className={styles.aircond__item__param}>
                     Диапазон температур: <span>{el.temperatureRange}</span>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.aircond__item__side}>
            <div className={styles.aircond__item__price}>От {(el.airCondModelCollection.items[0].price * currencyVal).toLocaleString()} UZS</div>
            <Link
               href={`multisplit/${el.url}_${el.airCondModelCollection.items[0].model.replace(/\s|\//g, "-").toLowerCase()}`}
               className={styles.aircond__item__btn}
            >
               <span>Подробнее</span>
            </Link>
         </div>
      </div>
   );
}
export default Item;
