import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";

function IsInStock({ inStock }: { inStock: boolean }) {
   return inStock ? (
      <div className={styles.item__inStock}>В наличии</div>
   ) : (
      <div className={`${styles.item__inStock} ${styles.item__notInStock}`}>Нет в наличии</div>
   );
}
export default IsInStock;
