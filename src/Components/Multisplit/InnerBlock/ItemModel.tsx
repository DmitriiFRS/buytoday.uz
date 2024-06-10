import Link from "next/link";
import Image from "next/image";
import { MultiInnerDataModel } from "@/app/catalog/multisplit-inner/page";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";

function ItemModel({ el, currencyVal }: { el: MultiInnerDataModel; currencyVal: number }) {
   return (
      <Link href={`air-conditioners/${el.url}_${el.model.replace(/\s|\//g, "-").toLowerCase()}`} className={styles.aircond__item} style={{ color: "inherit" }}>
         <div className={styles.aircond__item__main}>
            <div className={styles.aircond__item__img}>
               <Image src={el.imageCollection?.items[0].url as string} alt={el.name} fill style={{ objectFit: "contain" }} />
            </div>
            <div className={styles.aircond__item__titles}>
               <h5 className={styles.aircond__item__title}>Мультисплит-системы</h5>
               <h3 className={styles.aircond__item__name}>Настенный фен {el.model}</h3>
               <div className={styles.aircond__item__params}>
                  <div className={styles.aircond__item__param}>
                     Инверторный: <span>{el.isInverter ? "Да" : "Нет"}</span>
                  </div>
                  <div className={styles.aircond__item__param}>
                     Компрессор: <span>{el.compressor}</span>
                  </div>
                  <div className={styles.aircond__item__param}>
                     Мощность: <span>{el.coolingPowerKw} kW</span>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.aircond__item__side}>
            <div className={styles.aircond__item__price}>{(el.price * currencyVal).toLocaleString("en")} UZS</div>
            <button className={styles.aircond__item__btn}>
               <span>Подробнее</span>
            </button>
         </div>
      </Link>
   );
}
export default ItemModel;
