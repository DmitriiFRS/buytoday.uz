import Link from "next/link";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import { ReactNode, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import { CurrencyType } from "@/Types/CurrencyType";
import { AircondProductTypeModel } from "@/Types/AircondProductType.type";
import { strapiUrl } from "@/service/const";
import PriceMore from "../Common/PriceMore";

type PropTypes = {
   el: AircondProductTypeModel;
   productType: string;
   currencyVal: CurrencyType;
   children: ReactNode;
};

function ProductTypeModel({ el, productType, currencyVal, children }: PropTypes) {
   return (
      <Link href={`${productType}/${el.attributes.slug.replace(/\s|\//g, "-").toLowerCase()}`} className={styles.aircond__item} style={{ color: "inherit" }}>
         <div className={styles.aircond__item__main}>
            {el.attributes.bonus && (
               <div className={styles.aircond__item__bonus}>
                  <BsStars size={15} />
                  <span>{el.attributes.bonus}</span>
               </div>
            )}
            <div className={styles.aircond__item__img}>
               {
                  <Image
                     src={`${strapiUrl}${
                        el.attributes.product.data
                           ? el.attributes.product.data.attributes.previewImage.data.attributes.url
                           : el.attributes.paramsWrapper?.previewImage.data?.attributes.url || ""
                     }`}
                     alt={el.attributes.product.data ? el.attributes.product.data.attributes.slug : el.attributes.slug}
                     fill
                     style={{ objectFit: "contain" }}
                  />
               }
            </div>
            {children}
         </div>
         {
            <PriceMore
               price={el.attributes.price}
               currencyVal={currencyVal.attributes.value}
               inStock={el.attributes.isInStock}
               inPromotion={el.attributes.isPromoted}
            />
         }
      </Link>
   );
}
export default ProductTypeModel;
