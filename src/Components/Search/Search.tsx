"use client";

import styles from "./Search.module.scss";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import IsInStock from "../Common/ItemCard/IsInStock";
import Link from "next/link";

function Search({ data, dollarValue }: any) {
   const searchParams = useSearchParams();
   const [searchValue, setSearchValue] = useState<string | null>(null);

   useEffect(() => {
      setSearchValue(searchParams.get("value"));
   }, [searchParams]);

   return (
      searchValue && (
         <section className={styles.search}>
            <div className="container">
               <h1 className={styles.search__title}>Результаты для поиска «{searchValue}»</h1>
               <div className={`${styles.search__grid} ${styles.grid}`}>
                  {data.newItems
                     .filter((el: any) => {
                        const name = el.name.toLowerCase();
                        if (name.toLowerCase().replace(/\s/g, "_").includes(searchValue.toLowerCase())) {
                           return el;
                        }
                     })
                     .map((el: any, index: number) => {
                        return (
                           <Link href={`${el.path}/${el.model.replace(/\s|\//g, "-").toLowerCase()}`} key={index} className={styles.grid__item}>
                              <div className={styles.grid__item__category}>
                                 <div>{el.category}</div>
                              </div>
                              <div className={styles.grid__item__image}>
                                 <Image src={`https:${el.image[0].fields.file.url}`} alt={el.name} fill style={{ objectFit: "contain" }} />
                              </div>
                              <IsInStock inStock={el.inStock} />
                              <div className={styles.grid__item__name}>
                                 <div>{el.name}</div>
                                 <div className={styles.grid__item__company}>Бренд: {el.company}</div>
                              </div>
                              <div className={styles.grid__item__price}>
                                 <div>{(el.price * dollarValue).toLocaleString()} UZS</div>
                              </div>
                           </Link>
                        );
                     })}
               </div>
            </div>
         </section>
      )
   );
}
export default Search;
