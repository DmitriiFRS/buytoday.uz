import styles from "./Header.module.scss";

import CartIcon from "./CartIcon";
import WishlistIcon from "./WishlistIcon";

function Utils() {
   return (
      <div className={styles.header__utils}>
         <WishlistIcon />
         <CartIcon />
      </div>
   );
}
export default Utils;
