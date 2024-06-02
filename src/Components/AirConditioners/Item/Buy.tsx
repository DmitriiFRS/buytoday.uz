"use client";

import useLocalStorage from "@/Hooks/useLocalStorage";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { AircondDataInner, AircondDataModel } from "@/app/catalog/air-conditioners/[item]/page";
import { useAppSelector } from "@/Hooks/ReduxHooks";

type Props = {
   el: AircondDataInner;
   el2: AircondDataModel;
};

type Item = {
   name: string;
   url: string;
   company: string;
   image: string;
   model: string;
   price: number;
};

function Buy({ el, el2 }: Props) {
   const [items, setItem] = useLocalStorage<Item[]>("cart", []);
   const isWifiActive = useAppSelector((state) => state.itemSlice.isWifiActive);
   function addToCart() {
      const item = {
         name: el.name,
         url: el.url,
         company: el.company,
         image: el.imageCollection.items[0].url,
         model: el2.model,
         price: isWifiActive ? el2.wifiPrice : el2.price,
      };
      setItem([...items, item]);
   }
   return (
      <button onClick={addToCart} className={styles.item__buy}>
         Купить
      </button>
   );
}
export default Buy;
