import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FridgeDataInner } from "@/app/catalog/fridges/page";

function Item({ el, currencyVal, title }: { el: FridgeDataInner; currencyVal: number; title: string }) {
   return (
      <Link href={`fridges/${el.url.replace(/\s|\//g, "-").toLowerCase()}`} className={styles.aircond__item} style={{ color: "inherit" }}>
         <div className={styles.aircond__item__main}>
            <div className={styles.aircond__item__img}>
               <Image src={el.imageCollection.items[0].url as string} alt={el.name as string} fill style={{ objectFit: "contain" }} />
            </div>
            <div className={styles.aircond__item__titles}>
               <h5 className={styles.aircond__item__title}>{title}</h5>
               <h3 className={styles.aircond__item__name}>
                  {el.name} {el.color} {el.company}
               </h3>
               <div className={styles.aircond__item__params}>
                  <div className={styles.aircond__item__param}>
                     Цвет <span>{el.color}</span>
                  </div>
                  <div className={styles.aircond__item__param}>
                     Бренд: <span>{el.company}</span>
                  </div>
                  <div className={styles.aircond__item__param}>No Frost: {el.noFrost ? <span>Да</span> : <span>Нет</span>}</div>
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
