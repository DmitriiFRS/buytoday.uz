import styles from "./Header.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import Link from "next/link";

function Utils() {
   return (
      <div className={styles.header__utils}>
         <Link href={"/"} className={styles.header__utils__item}>
            <GrFavorite className={styles.header__utils__icon} />
            <span>Избранное</span>
         </Link>
         <Link href={"/cart"} className={styles.header__utils__item}>
            <FiShoppingCart className={styles.header__utils__icon} />
            <span>Корзина</span>
         </Link>
      </div>
   );
}
export default Utils;
