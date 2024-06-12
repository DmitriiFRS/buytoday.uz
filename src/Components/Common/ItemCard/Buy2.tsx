"use client";

import Loader from "@/Components/Utilities/Loader";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import useLocalStorage from "@/Hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/Hooks/ReduxHooks";
import ItemInCart from "@/Components/Common/ItemInCart";

type Item = {
   id: number;
   name: string;
   url: string;
   company: string;
   image: string;
   model: string;
   price: number | null;
   count: number;
   color?: string;
};

type Props = {
   dispatcher: Function;
   url: string;
   item: {
      id: number;
      name: string;
      url: string;
      company: string;
      image: string;
      model: string;
      price: number;
      color?: string;
      count: number;
   };
};

function Buy2({ url, dispatcher, item }: Props) {
   const [items, setItem] = useLocalStorage<Item[]>("cart", []);
   const [activeItem, setActiveItem] = useState<null | Item>(null);
   const [isLoading, setLoading] = useState(true);
   const dispatch = useAppDispatch();
   function addToCart() {
      setItem([...items, item]);
   }

   useEffect(() => {
      dispatch(dispatcher(items.length));
      if (items.some((item) => item.url === url)) {
         items.some((item) => {
            if (item.url === url) setActiveItem(item);
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
            if (item.url === activeItem.url) {
               temp[idx].count = activeItem.count;
            }
         });
         setItem(temp);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [activeItem?.count]);

   return isLoading ? (
      <Loader />
   ) : items && activeItem ? (
      <ItemInCart activeItem={activeItem} setActiveItem={setActiveItem} />
   ) : (
      <button onClick={addToCart} className={styles.item__buy}>
         Добавить в корзину
      </button>
   );
}
export default Buy2;
