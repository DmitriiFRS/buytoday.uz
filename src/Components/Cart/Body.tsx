"use client";

import styles from "./Cart.module.scss";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { Item, Items } from "./MainGrid";
import EmptyCart from "./EmptyCart";
import { useEffect } from "react";
import { useAppDispatch } from "@/Hooks/ReduxHooks";
import { setItemsCount } from "@/Redux/Slices/OrderCart.slice";
import { removeItem } from "@/Functions/utilsFunctions";

type Props = {
   dollarVal: number;
   items: Items;
   setItem: Function;
};

function Body({ dollarVal, items, setItem }: Props) {
   const dispatch = useAppDispatch();
   function addCount(index: number) {
      if (items[index].count === 20) return;
      const tempItems = items.slice();
      tempItems[index].count = tempItems[index].count + 1;
      setItem(tempItems);
   }
   function removeCount(index: number) {
      if (items[index].count === 1) return;
      const tempItems = items.slice();
      tempItems[index].count = tempItems[index].count - 1;
      setItem(tempItems);
   }
   useEffect(() => {
      dispatch(setItemsCount(items.length));
   }, [items]);
   return (
      items &&
      (items.length < 1 ? (
         <EmptyCart />
      ) : (
         <div className={styles.bodyContainer}>
            {items.map((el, index) => {
               return (
                  <div key={index} className={styles.body}>
                     <div className={styles.body__img}>
                        <Image src={el.image} alt={el.name} fill style={{ objectFit: "contain" }} />
                     </div>
                     <div className={styles.body__title}>
                        <div className={styles.body__title__main}>
                           {el.name} / Модель: {el.model} {el.wifiPrice ? "с модулем wi-fi" : ""}
                        </div>
                        <div className={styles.body__title__brand}>Бренд: {el.company}</div>
                     </div>
                     <div className={styles.body__count}>
                        <button onClick={() => removeCount(index)} className={styles.body__btns}>
                           <FiMinus />
                        </button>
                        <div className={styles.body__countInput}>{el.count}</div>
                        <button onClick={() => addCount(index)} className={styles.body__btns}>
                           <FaPlus />
                        </button>
                     </div>
                     <div className={styles.body__price}>
                        {el.price
                           ? (el.price * dollarVal * el.count).toLocaleString("en")
                           : el.wifiPrice && (el.wifiPrice * dollarVal * el.count).toLocaleString("en")}{" "}
                        сум
                     </div>
                     <div className={styles.body__utils}>
                        <button onClick={() => removeItem(el, items, setItem)} className={styles.body__utils__delete}>
                           Удалить
                        </button>
                     </div>
                  </div>
               );
            })}
         </div>
      ))
   );
}
export default Body;
