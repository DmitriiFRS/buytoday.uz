import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Image from "next/image";
import Link from "next/link";
import { SemiIndModelCollection } from "@/app/catalog/col-conditioners/page";
import { ReactNode } from "react";

function Item({ el, currencyVal, uri, children }: { el: SemiIndModelCollection; currencyVal: number; uri: string; children: ReactNode }) {
   return (
      <Link href={`${uri}/${el.url}_${el.model.replace(/\s|\//g, "-").toLowerCase()}`} className={styles.aircond__item} style={{ color: "inherit" }}>
         <div className={styles.aircond__item__main}>
            <div className={styles.aircond__item__img}>
               <Image src={el.imageCollection?.items[0].url as string} alt={el.name as string} fill style={{ objectFit: "contain" }} />
            </div>
            {children}
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
