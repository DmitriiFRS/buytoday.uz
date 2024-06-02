"use client";

import useLocalStorage from "@/Hooks/useLocalStorage";
import Body from "./Body";
import styles from "./Cart.module.scss";
import Order from "./Order";

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

function MainGrid({ dollarVal }: Props) {
   const [items, setItem] = useLocalStorage<Items>("cart", []);
   return (
      <section className={styles.grid}>
         <Body dollarVal={dollarVal} items={items} setItem={setItem} />
         <Order dollarVal={dollarVal} items={items} />
      </section>
   );
}
export default MainGrid;
