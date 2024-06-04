"use client";

import useLocalStorage from "@/Hooks/useLocalStorage";
import Body from "./Body";
import styles from "./Cart.module.scss";
import Order from "./Order";
import Loader from "../Utilities/Loader";
import { useEffect, useState } from "react";
import OrderPopup from "./OrderPopup";

type Props = {
   dollarVal: number;
};
export type Items = Item[];
export type Item = {
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

const title = "Оформление заказа";
const comment = "Комментарии к заказу";

function MainGrid({ dollarVal }: Props) {
   const [items, setItem] = useLocalStorage<Items>("cart", []);
   const [isLoading, setLoading] = useState(true);
   const [isOrderActive, setOrderActive] = useState(false);
   useEffect(() => {
      setLoading(false);
   }, []);
   return (
      <section className={styles.grid}>
         {!isLoading ? <Body dollarVal={dollarVal} items={items} setItem={setItem} /> : <Loader />}
         <Order isOrderActive={isOrderActive} setOrderActive={setOrderActive} dollarVal={dollarVal} items={items} />
         <OrderPopup isOrderActive={isOrderActive} setOrderActive={setOrderActive} title={title} comment={comment} />
      </section>
   );
}
export default MainGrid;
