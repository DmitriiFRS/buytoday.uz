import { ReactNode } from "react";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import Link from "next/link";
import Image from "next/image";
import { SemiIndModelCollection } from "@/app/catalog/col-conditioners/page";
import PriceMore from "@/Components/Common/PriceMore";
import { BsStars } from "react-icons/bs";

type Props = {
   children: ReactNode;
   el: SemiIndModelCollection;
   currencyVal: number;
   url: string;
};

function ItemModel({ children, el, currencyVal, url }: Props) {
   return (
      <Link href={`${url}/${el.model.replace(/\s|\//g, "-").toLowerCase()}`} className={styles.aircond__item} style={{ color: "inherit" }}>
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
