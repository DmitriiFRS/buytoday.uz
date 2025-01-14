import Link from "next/link";
import styles from "../Homepage.module.scss";
import Image from "next/image";
import { AircondProductTypeModel } from "@/Types/AircondProductType.type";
import { siteUrl, strapiUrl } from "@/service/const";
import { CurrencyType } from "@/Types/CurrencyType";

export default function TopCard({ product, dollarValue }: { product: AircondProductTypeModel; dollarValue: CurrencyType }) {
     const aircondImage = product?.attributes.paramsWrapper?.aircond?.product?.data.attributes.previewImage.data?.attributes.url;
     return (
          <Link href={`/catalog/${product.attributes.productType.slug}/${product.attributes.slug}`} className={styles.top__col} key={product.id}>
               <div className={styles.top__img}>
                    <Image
                         src={strapiUrl + aircondImage || product.attributes.paramsWrapper.previewImage.data.attributes.url}
                         alt={product.attributes.name}
                         fill
                         style={{ objectFit: "contain" }}
                    />
               </div>
               <div className={styles.top__colTitle}>
                    <div className={styles.top__category}>{product.attributes.productType.title}</div>
                    <div className={styles.top__name}>{product.attributes.name}</div>
               </div>
               <div className={styles.top__params}>
                    <div className={styles.top__param}>
                         Бренд:{" "}
                         <span>
                              {product.attributes.paramsWrapper.aircond.product.data.attributes.brands.data.attributes.title ||
                                   product.attributes.paramsWrapper?.brands.data.attributes.title}
                         </span>
                    </div>
                    {product.attributes.popularParam.map((el, index) => {
                         return (
                              <div className={styles.top__param} key={index}>
                                   {el.name}: <span>{el.value}</span>
                              </div>
                         );
                    })}
               </div>
               <div className={styles.top__price}>{(product.attributes.price * dollarValue.attributes.value).toLocaleString("en")} сум</div>
               <div className={styles.top__btn}>Подробнее</div>
          </Link>
     );
}
