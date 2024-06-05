import styles from "../Homepage.module.scss";
import Grid from "./Grid";

function Catalog() {
   return (
      <section className={styles.catalog}>
         <div className="container">
            <h2 className={styles.catalog__title}>
               Каталог компании <span>new Amazon</span>
            </h2>
            <Grid />
         </div>
      </section>
   );
}
export default Catalog;
