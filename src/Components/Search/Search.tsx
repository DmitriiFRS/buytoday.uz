import styles from "./Search.module.scss";
import Image from "next/image";
import IsInStock from "../Common/ItemCard/IsInStock";
import Link from "next/link";
import PaginationLoadMore from "./PaginationLoadMore";
import { ReadonlyURLSearchParams } from "next/navigation";

type Props = {
   data: any;
   dollarValue: number;
   pagination: {
      page: number;
      totalPages: number;
   };
   searchParams:
      | ReadonlyURLSearchParams
      | {
           value: string;
        };
   urlParams: any;
};

function Search({ data, dollarValue, pagination, searchParams, urlParams }: Props) {
   return (
      <section className={styles.search}>
         <div className="container">
            <h1 className={styles.search__title}>Результаты для поиска «{urlParams.get("value").replace(/_/g, " ")}»</h1>
            <div className={`${styles.search__grid} ${styles.grid}`}>
               {data &&
                  data.map((el: any, index: number) => {
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
            <PaginationLoadMore pagination={pagination} />
         </div>
      </section>
   );
}
export default Search;
