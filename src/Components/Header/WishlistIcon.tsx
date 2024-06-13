import { GrFavorite } from "react-icons/gr";
import styles from "./Header.module.scss";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/Hooks/ReduxHooks";
import useLocalStorage from "@/Hooks/useLocalStorage";
import { useEffect } from "react";
import { setWishlistCount } from "@/Redux/Slices/OrderCart.slice";

function WishlistIcon() {
   const wishlisttItems = useAppSelector((state) => state.orderSlice.wishlistCount);
   const dispatch = useAppDispatch();
   const [items] = useLocalStorage<Element[]>("wishlist", []);
   useEffect(() => {
      dispatch(setWishlistCount(items.length));
   }, [items]);
   return (
      <Link href={"/wishlist"} className={styles.header__utils__item}>
         <div className={styles.header__utils__iconBody}>
            {wishlisttItems ? <span className={styles.header__utils__count}>{wishlisttItems}</span> : ""}
            <GrFavorite className={styles.header__utils__icon} />
         </div>
         <span>Избранное</span>
      </Link>
   );
}
export default WishlistIcon;
