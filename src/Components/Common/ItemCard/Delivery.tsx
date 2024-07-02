import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Link from "next/link";

function Delivery() {
   return (
      <div className={styles.item__delivery}>
         <Link href={"/delivery"} className={styles.item__delivery__btn}>
            Бесплатная доставка по Ташкенту
         </Link>
         <Link href={"/service"} className={styles.item__delivery__btn}>
            Заказать установку
         </Link>
      </div>
   );
}
export default Delivery;
