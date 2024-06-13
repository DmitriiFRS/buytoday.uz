import styles from "./Wishlist.module.scss";
import Grid from "./Grid";

function Main() {
   return (
      <>
         <div className={styles.title}>
            <h3 className={styles.title__title}>Избранные товары</h3>
            <button className={styles.title__btn}>Удалить все</button>
         </div>
         <Grid />
      </>
   );
}
export default Main;
