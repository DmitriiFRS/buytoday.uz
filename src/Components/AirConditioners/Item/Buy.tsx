"use client";

import useLocalStorage from "@/Hooks/useLocalStorage";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { AircondDataInner, AircondDataModel } from "@/app/catalog/air-conditioners/[item]/page";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
   el: AircondDataInner;
   el2: AircondDataModel;
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
   const isWifiActive = useAppSelector((state) => state.itemSlice.isWifiActive);
   function addToCart() {
      const item = {
         id: Date.now(),
         name: el.name,
         url: el.url,
         company: el.company,
         image: el.imageCollection.items[0].url,
         model: el2.model,
         price: isWifiActive ? null : el2.price,
         wifiPrice: isWifiActive ? el2.wifiPrice : null,
         count: 1,
      };
      setItem([...items, item]);
   }
   useEffect(() => {
      if (items.some((item) => item.model === el2.model && Boolean(item.wifiPrice) === isWifiActive)) {
         items.some((item) => {
            if (item.model === el2.model && Boolean(item.wifiPrice) === isWifiActive) setActiveItem(item);
         });
      } else {
         setActiveItem(null);
      }
   }, [items, isWifiActive]);

   useEffect(() => {
      const temp = items.slice();
      if (activeItem) {
         items.forEach((item, idx) => {
            if (item.model === activeItem.model && Boolean(item.wifiPrice) === isWifiActive) {
               temp[idx].count = activeItem.count;
            }
         });
         setItem(temp);
      }
   }, [activeItem?.count]);

   function addCount() {
      setActiveItem((prev: any) => ({
         ...prev,
         count: prev.count + 1,
      }));
   }
   function removeCount() {
      setActiveItem((prev: any) => ({
         ...prev,
         count: prev.count - 1,
      }));
   }
   return items && activeItem ? (
      <>
         <Link href={"/cart"} className={styles.item__buy}>
            В корзине
         </Link>
         <div className={styles.item__counter}>
            <button onClick={removeCount} className={styles.item__countBtn}>
               -
            </button>
            <div className={styles.item__count}>{activeItem.count}</div>
            <button onClick={addCount} className={styles.item__countBtn}>
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
