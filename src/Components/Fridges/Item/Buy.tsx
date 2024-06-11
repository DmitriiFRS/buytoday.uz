"use client";

import Loader from "@/Components/Utilities/Loader";
import { FridgeDataInner } from "@/app/catalog/fridges/page";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import useLocalStorage from "@/Hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/Hooks/ReduxHooks";
import { setItemsCount } from "@/Redux/Slices/OrderCart.slice";
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
   color: string;
};

function Buy({ el }: { el: FridgeDataInner }) {
   const [items, setItem] = useLocalStorage<Item[]>("cart", []);
   const [activeItem, setActiveItem] = useState<null | Item>(null);
   const [isLoading, setLoading] = useState(true);
   const dispatch = useAppDispatch();
   function addToCart() {
      const item = {
         id: Date.now(),
         name: el.name,
         url: el.url,
         company: el.company,
         image: el.imageCollection.items[0].url,
         model: el.model,
         price: el.price,
         color: el.color,
         count: 1,
      };
      setItem([...items, item]);
   }

   useEffect(() => {
      dispatch(setItemsCount(items.length));
      if (items.some((item) => item.model === el.model && item.color === el.color)) {
         items.some((item) => {
            if (item.model === el.model) setActiveItem(item);
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
export default Buy;
