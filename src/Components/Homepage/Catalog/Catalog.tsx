import styles from "../Homepage.module.scss";
import Grid from "./Grid";
import Link from "next/link";

function Catalog() {
   return (
      <section className={styles.catalog}>
         <div className="container">
            <div className={styles.catalog__top}>
               <h1 className={styles.catalog__title}>
                  Каталог интернет-магазина <span>Buy Today</span>
               </h1>
               <Link className={styles.catalog__btn} href={"/catalog"}>
                  Посмотреть весь каталог
               </Link>
            </div>
            <Grid />
         </div>
      </section>
   );
}
export default Catalog;
