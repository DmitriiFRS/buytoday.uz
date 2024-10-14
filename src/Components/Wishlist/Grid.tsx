"use client";

import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { clearLocalStorage, removeItem } from "@/Functions/utilsFunctions";
import styles from "./Wishlist.module.scss";
import { useEffect } from "react";
import { useAppDispatch } from "@/Hooks/ReduxHooks";
import useLocalStorage from "@/Hooks/useLocalStorage";
import { setWishlistCount } from "@/Redux/Slices/OrderCart.slice";
import { Element } from "../Common/ItemCard/AddToWishlist";
import Empty from "./Empty";
import { strapiUrl } from "@/service/const";

function Grid() {
   const dispatch = useAppDispatch();
   const [wishListItems, setWishlistItem] = useLocalStorage<Element[]>("wishlist", []);

   useEffect(() => {
      dispatch(setWishlistCount(wishListItems.length));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [wishListItems]);
   return (
      <>
         <div className={styles.title}>
            <h3 className={styles.title__title}>Избранные товары</h3>
            <button onClick={() => clearLocalStorage(setWishlistItem, dispatch, setWishlistCount)} className={styles.title__btn}>
               Удалить все
            </button>
         </div>
         {wishListItems.length < 1 ? (
            <Empty />
         ) : (
            <div className={styles.grid}>
               {wishListItems.map((el) => {
                  return (
                     <div key={el.id} className={styles.grid__item}>
                        <button onClick={() => removeItem(el, wishListItems, setWishlistItem)} className={styles.grid__remove}>
                           <IoMdClose />
                        </button>
                        <div className={styles.grid__img}>
                           <Image src={strapiUrl + el.img} alt={el.name} fill style={{ objectFit: "contain" }} />
                        </div>
                        <div className={styles.grid__title}>{el.type}</div>
                        <div className={styles.grid__name}>
                           <div>{el.model}</div>
                           <div>Бренд: {el.brand}</div>
                        </div>
                        <Link className={styles.grid__btn} href={el.url}>
                           Подробнее
                        </Link>
                     </div>
                  );
               })}
            </div>
         )}
      </>
   );
}
export default Grid;
