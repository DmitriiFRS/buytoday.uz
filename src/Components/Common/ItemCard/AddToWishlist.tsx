"use client";

import useLocalStorage from "@/Hooks/useLocalStorage";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { GrFavorite } from "react-icons/gr";

function AddToWishlist() {
   const [wishListItems, setWishlistItem] = useLocalStorage("wishlist", []);

   function addToWishlist() {}

   return (
      <button onClick={addToWishlist} className={styles.favorite}>
         <GrFavorite className={styles.favorite__icon} />
         <div className={styles.favorite__title}>В избранное</div>
      </button>
   );
}
export default AddToWishlist;
