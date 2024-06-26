import { AircondDataModel } from "@/app/catalog/air-conditioners/page";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import Image from "next/image";
import Link from "next/link";
import PriceMore from "../../Common/PriceMore";
import { useEffect } from "react";

function ItemModel({ el, currencyVal }: { el: AircondDataModel; currencyVal: number }) {
   return (
      <Link href={`air-conditioners/${el.url}_${el.model.replace(/\s|\//g, "-").toLowerCase()}`} className={styles.aircond__item} style={{ color: "inherit" }}>
         <div className={styles.aircond__item__main}>
            <div className={styles.aircond__item__img}>
               <Image src={`https:${el.image[0].fields.file.url}`} alt={el.name} fill style={{ objectFit: "contain" }} />
            </div>
            <div className={styles.aircond__item__titles}>
               <h5 className={styles.aircond__item__title}>Сплит-системы</h5>
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
         <PriceMore price={el.price} currencyVal={currencyVal} />
      </Link>
   );
}
export default ItemModel;
