"use client";

import styles from "./Search.module.scss";
import Image from "next/image";
import IsInStock from "../Common/ItemCard/IsInStock";
import Link from "next/link";
import PaginationLoadMore from "./PaginationLoadMore";
import { useEffect, useState } from "react";
import { getSearchedItems } from "@/fetch/getSearchedItems";
import { useSearchParams } from "next/navigation";
import { AircondProductTypeList } from "@/Types/AircondProductType.type";
import { siteUrl, strapiUrl } from "@/service/const";

type Props = {
     dollarValue: number;
};

function Search({ dollarValue }: Props) {
     const searchParams = useSearchParams();
     const [items, setItems] = useState<AircondProductTypeList>([]);
     useEffect(() => {
          async function getData() {
               const data = await getSearchedItems({ value: searchParams.get("value") || "" });
               setItems(data.data);
          }
          getData();
     }, [searchParams]);
     return (
          <section className={styles.search}>
               <div className="container">
                    <h1 className={styles.search__title}>Результаты для поиска «{searchParams.get("value") ? searchParams.get("value")?.replace(/_/g, " ") : ""}»</h1>
                    <div className={`${styles.search__grid} ${styles.grid}`}>
                         {items &&
                              items.map((el, index) => {
                                   return (
                                        <Link
                                             href={`${siteUrl}/catalog/${el.attributes.productType?.data.attributes.slug}/${el.attributes.slug}`}
                                             key={index}
                                             className={styles.grid__item}
                                        >
                                             <div className={styles.grid__item__category}>
                                                  <div>{el.attributes.productType?.data.attributes.title}</div>
                                             </div>
                                             <div className={styles.grid__item__image}>
                                                  <Image
                                                       src={
                                                            strapiUrl + el.attributes.paramsWrapper?.aircond?.product?.data.attributes.previewImage?.data.attributes.url ||
                                                            strapiUrl + el.attributes.paramsWrapper?.previewImage?.data.attributes.url ||
                                                            ""
                                                       }
                                                       alt={el.attributes.name}
                                                       fill
                                                       style={{ objectFit: "contain" }}
                                                  />
                                             </div>
                                             <IsInStock inStock={el.attributes.isInStock} />
                                             <div className={styles.grid__item__name}>
                                                  <div className={styles.grid__item__nameTitle}>{el.attributes.name}</div>
                                                  <div className={styles.grid__item__company}>
                                                       Бренд:
                                                       {el.attributes.paramsWrapper?.aircond?.product?.data.attributes.brands?.data.attributes.title ||
                                                            el.attributes.paramsWrapper?.brands.data.attributes.title}
                                                  </div>
                                             </div>
                                             <div className={styles.grid__item__price}>
                                                  <div>{(el.attributes.price * dollarValue).toLocaleString()} UZS</div>
                                             </div>
                                        </Link>
                                   );
                              })}
                    </div>
                    {/*<PaginationLoadMore pagination={pagination} />*/}
               </div>
          </section>
     );
}
export default Search;
