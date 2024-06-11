import Link from "next/link";
import styles from "../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { decrementCartItem, incrementCartItem } from "@/Functions/utilsFunctions";

function ItemInCart({ activeItem, setActiveItem }: { activeItem: any; setActiveItem: Function }) {
   return (
      <>
         <Link href={"/cart"} className={`${styles.item__buy} ${styles.item__inCart}`}>
            В корзине
         </Link>
         <div className={styles.item__counter}>
            <button onClick={() => decrementCartItem(activeItem, setActiveItem)} className={styles.item__countBtn}>
               -
            </button>
            <div className={styles.item__count}>{activeItem.count}</div>
            <button onClick={() => incrementCartItem(activeItem, setActiveItem)} className={`${styles.item__countBtn} ${styles.item__countBtnPlus}`}>
               +
            </button>
         </div>
      </>
   );
}
export default ItemInCart;
