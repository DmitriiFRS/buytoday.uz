import { AircondDataModel } from "@/app/catalog/air-conditioners/page";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import Image from "next/image";
import Link from "next/link";
import PriceMore from "../../Common/PriceMore";
import { ReactNode } from "react";
import { BsStars } from "react-icons/bs";

function ItemModel({ el, currencyVal, children }: { el: AircondDataModel; currencyVal: number; children: ReactNode }) {
   return (
      <Link href={`air-conditioners/${el.model.replace(/\s|\//g, "-").toLowerCase()}`} className={styles.aircond__item} style={{ color: "inherit" }}>
         <div className={styles.aircond__item__main}>
            {el.bonus && (
               <div className={styles.aircond__item__bonus}>
                  <BsStars size={15} />
                  <span>{el.bonus}</span>
               </div>
            )}
            <div className={styles.aircond__item__img}>
               <Image src={`https:${el.image[0].fields.file.url}`} alt={el.name} fill style={{ objectFit: "contain" }} />
            </div>
            {children}
         </div>
         <PriceMore price={el.price} currencyVal={currencyVal} inStock={el.inStock} inPromotion={el.inPromotion} />
      </Link>
   );
}
export default ItemModel;
