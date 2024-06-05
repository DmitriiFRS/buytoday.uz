import styles from "./Header.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import Link from "next/link";
import CartIcon from "./CartIcon";

function Utils() {
   return (
      <div className={styles.header__utils}>
         <Link href={"/"} className={styles.header__utils__item}>
            <GrFavorite className={styles.header__utils__icon} />
            <span>Избранное</span>
         </Link>
         <CartIcon />
      </div>
   );
}
export default Utils;
