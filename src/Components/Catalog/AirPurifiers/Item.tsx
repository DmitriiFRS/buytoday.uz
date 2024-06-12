import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import Image from "next/image";
import Link from "next/link";
import { AirPurifiersCollection } from "@/app/catalog/air-purifiers/page";

function Item({ el, currencyVal, title }: { el: AirPurifiersCollection; currencyVal: number; title: string }) {
   return (
      <Link href={`boilers/${el.url.replace(/\s|\//g, "-").toLowerCase()}`} className={styles.aircond__item} style={{ color: "inherit" }}>
         <div className={styles.aircond__item__main}>
            <div className={styles.aircond__item__img}>
               <Image src={el.imageCollection.items[0].url as string} alt={el.name as string} fill style={{ objectFit: "contain" }} />
            </div>
            <div className={styles.aircond__item__titles}>
               <h5 className={styles.aircond__item__title}>{title}</h5>
               <h3 className={styles.aircond__item__name}>
                  {el.name} {el.company}
               </h3>
               <div className={styles.aircond__item__params}>
                  <div className={styles.aircond__item__param}>
                     Расход газа макс./мин. Nm3/h <span>{el.voltage}</span>
                  </div>
                  <div className={styles.aircond__item__param}>
                     Бренд: <span>{el.company}</span>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.aircond__item__side}>
            <div className={styles.aircond__item__price}> {(el.price * currencyVal).toLocaleString()} UZS</div>
            <button className={styles.aircond__item__btn}>
               <span>Подробнее</span>
            </button>
         </div>
      </Link>
   );
}
export default Item;
