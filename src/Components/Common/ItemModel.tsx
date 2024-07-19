import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import PriceMore from "@/Components/Common/PriceMore";
import { BsStars } from "react-icons/bs";

type Props = {
   children: ReactNode;
   currencyVal: number;
   uri: string;
   model: string;
   img: string;
   name: string;
   price: number;
   inStock: boolean;
   inPromotion: boolean;
   bonus: string;
};

function ItemModel({ children, currencyVal, uri, model, img, name, price, inStock, inPromotion, bonus }: Props) {
   return (
      <Link href={`${uri}/${model.replace(/\s|\//g, "-").toLowerCase()}`} className={styles.aircond__item} style={{ color: "inherit" }}>
         <div className={styles.aircond__item__main}>
            {bonus && (
               <div className={styles.aircond__item__bonus}>
                  <BsStars size={15} />
                  <span>{bonus}</span>
               </div>
            )}
            <div className={styles.aircond__item__img}>
               <Image src={`https:${img}`} alt={name} fill style={{ objectFit: "contain" }} />
            </div>
            {children}
         </div>
         <PriceMore price={price} currencyVal={currencyVal} inStock={inStock} inPromotion={inPromotion} />
      </Link>
   );
}
export default ItemModel;
