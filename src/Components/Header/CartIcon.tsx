"use client";

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./Header.module.scss";
import { useAppDispatch, useAppSelector } from "@/Hooks/ReduxHooks";
import { useEffect } from "react";
import useLocalStorage from "@/Hooks/useLocalStorage";
import { Items } from "../Cart/MainGrid";
import { setItemsCount } from "@/Redux/Slices/OrderCart.slice";

function CartIcon() {
   const cartItems = useAppSelector((state) => state.orderSlice.itemsCount);
   const dispatch = useAppDispatch();
   const [items] = useLocalStorage<Items>("cart", []);
   useEffect(() => {
      dispatch(setItemsCount(items.length));
   }, [items]);
   return (
      <Link href={"/cart"} className={styles.header__utils__item}>
         <div className={styles.header__utils__iconBody}>
            {cartItems ? <span className={styles.header__utils__count}>{cartItems}</span> : ""}
            <FiShoppingCart className={styles.header__utils__icon} />
         </div>
         <span>Корзина</span>
      </Link>
   );
}
export default CartIcon;
