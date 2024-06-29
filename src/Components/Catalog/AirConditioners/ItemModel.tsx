import { AircondDataModel } from "@/app/catalog/air-conditioners/page";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import Image from "next/image";
import Link from "next/link";
import PriceMore from "../../Common/PriceMore";
import { ReactNode } from "react";

function ItemModel({ el, currencyVal, children }: { el: AircondDataModel; currencyVal: number; children: ReactNode }) {
   return (
      <Link href={`air-conditioners/${el.model.replace(/\s|\//g, "-").toLowerCase()}`} className={styles.aircond__item} style={{ color: "inherit" }}>
         <div className={styles.aircond__item__main}>
            <div className={styles.aircond__item__img}>
               <Image src={`https:${el.image[0].fields.file.url}`} alt={el.name} fill style={{ objectFit: "contain" }} />
            </div>
            {children}
         </div>
         <PriceMore price={el.price} currencyVal={currencyVal} />
      </Link>
   );
}
export default ItemModel;
