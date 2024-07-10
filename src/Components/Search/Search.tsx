import styles from "./Search.module.scss";
import Image from "next/image";
import IsInStock from "../Common/ItemCard/IsInStock";
import Link from "next/link";
import PaginationLoadMore from "./PaginationLoadMore";

type Props = {
   data: any;
   dollarValue: number;
   pagination: {
      page: number;
      totalPages: number;
   };
   urlParams: any;
};

function Search({ data, dollarValue, pagination, urlParams }: Props) {
   return (
      <section className={styles.search}>
         <div className="container">
            <h1 className={styles.search__title}>Результаты для поиска «{urlParams.get("value") ? urlParams.get("value").replace(/_/g, " ") : ""}»</h1>
            <div className={`${styles.search__grid} ${styles.grid}`}>
               {data &&
                  data.map((el: any, index: number) => {
                     return (
                        <Link
                           href={`${el.path}/${
                              el.category === "Мульти-сплит системы"
                                 ? "multi-" + el.model.replace(/\s|\//g, "-").toLowerCase()
                                 : el.model.replace(/\s|\//g, "-").toLowerCase()
                           }`}
                           key={index}
                           className={styles.grid__item}
                        >
                           <div className={styles.grid__item__category}>
                              <div>{el.category}</div>
                           </div>
                           <div className={styles.grid__item__image}>
                              <Image src={`https:${el.image[0].fields.file.url}`} alt={el.name} fill style={{ objectFit: "contain" }} />
                           </div>
                           <IsInStock inStock={el.inStock} />
                           <div className={styles.grid__item__name}>
                              <div className={styles.grid__item__nameTitle}>{el.name}</div>
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
