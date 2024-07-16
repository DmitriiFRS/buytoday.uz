import { ReactNode } from "react";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import Link from "next/link";
import Image from "next/image";
import { SemiIndModelCollection } from "@/app/catalog/col-conditioners/page";
import PriceMore from "@/Components/Common/PriceMore";

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
            <div className={styles.aircond__item__img}>
               <Image src={`https:${el.image[0].fields.file.url}`} alt={el.name} fill style={{ objectFit: "contain" }} />
            </div>
            {children}
         </div>
         <PriceMore price={el.price} currencyVal={currencyVal} inStock={el.inStock} />
      </Link>
   );
}
export default ItemModel;
