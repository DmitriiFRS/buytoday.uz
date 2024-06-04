"use client";

import useLocalStorage from "@/Hooks/useLocalStorage";
import styles from "../../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "@/Components/Utilities/Loader";
import { MultiInnerDataModel, MultiInnerMain } from "@/app/catalog/multisplit-inner/page";

type Props = {
   el: MultiInnerMain;
   el2: MultiInnerDataModel;
};

type Item = {
   id: number;
   name: string;
   url: string;
   company: string;
   image: string;
   model: string;
   price: number | null;
   wifiPrice: number | null;
   count: number;
};

function Buy({ el, el2 }: Props) {
   const [items, setItem] = useLocalStorage<Item[]>("cart", []);
   const [activeItem, setActiveItem] = useState<null | Item>(null);
   const [isLoading, setLoading] = useState(true);
   function addToCart() {
      const item = {
         id: Date.now(),
         name: `Настенный фен мульти-сплит системы ${el.name}`,
         url: el.url,
         company: el.company,
         image: el.imageCollection.items[0].url,
         model: el2.model,
         price: el2.price,
         wifiPrice: null,
         count: 1,
      };
      setItem([...items, item]);
   }
   useEffect(() => {
      if (items.some((item) => item.model === el2.model)) {
         items.some((item) => {
            if (item.model === el2.model) setActiveItem(item);
         });
      } else {
         setActiveItem(null);
         setLoading(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [items]);

   useEffect(() => {
      const temp = items.slice();
      if (activeItem) {
         items.forEach((item, idx) => {
            if (item.model === activeItem.model) {
               temp[idx].count = activeItem.count;
            }
         });
         setItem(temp);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [activeItem?.count]);

   function addCount() {
      if (activeItem?.count === 20) return;
      setActiveItem((prev: any) => ({
         ...prev,
         count: prev.count + 1,
      }));
   }
   function removeCount() {
      if (activeItem?.count === 1) return;
      setActiveItem((prev: any) => ({
         ...prev,
         count: prev.count - 1,
      }));
   }
   return isLoading ? (
      <Loader />
   ) : items && activeItem ? (
      <>
         <Link href={"/cart"} className={`${styles.item__buy} ${styles.item__inCart}`}>
            В корзине
         </Link>
         <div className={styles.item__counter}>
            <button onClick={removeCount} className={styles.item__countBtn}>
               -
            </button>
            <div className={styles.item__count}>{activeItem.count}</div>
            <button onClick={addCount} className={`${styles.item__countBtn} ${styles.item__countBtnPlus}`}>
               +
            </button>
         </div>
      </>
   ) : (
      <button onClick={addToCart} className={styles.item__buy}>
         Добавить в корзину
      </button>
   );
}
export default Buy;
