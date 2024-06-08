import { AircondDataInner, AircondDataModel } from "@/app/catalog/air-conditioners/page";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

function ItemModel({ el, currencyVal }: { el: AircondDataModel; currencyVal: number }) {
   return (
      <div className={styles.aircond__item}>
         <div className={styles.aircond__item__main}>
            <div className={styles.aircond__item__img}>
               <Image src={el.imageCollection?.items[0].url as string} alt={el.name} fill style={{ objectFit: "contain" }} />
            </div>
            <div className={styles.aircond__item__titles}>
               <h5 className={styles.aircond__item__title}>Настенные сплит-системы</h5>
               <h3 className={styles.aircond__item__name}>
                  Настенный кондиционер {el.name} {el.coolingPowerBtu} BTU
               </h3>
               <div className={styles.aircond__item__params}>
                  <div className={styles.aircond__item__param}>
                     Инверторный: <span>{el.isInverter ? "Да" : "Нет"}</span>
                  </div>
                  <div className={styles.aircond__item__param}>
                     Компрессор: <span>{el.compressor}</span>
                  </div>
                  <div className={styles.aircond__item__param}>
                     Мощность: <span>{el.coolingPowerBtu} btu/h</span>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.aircond__item__side}>
            <div className={styles.aircond__item__price}>{(el.price * currencyVal).toLocaleString("en")} UZS</div>
            <Link href={`air-conditioners/${el.url}_${el.model.replace(/\s|\//g, "-").toLowerCase()}`} className={styles.aircond__item__btn}>
               <span>Подробнее</span>
            </Link>
         </div>
      </div>
   );
}
export default ItemModel;
