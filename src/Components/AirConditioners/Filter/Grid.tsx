"use client";

import { AircondDataInner } from "@/app/catalog/air-conditioners/[item]/page";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Item from "./Item";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Grid({ items, currencyVal }: { items: AircondDataInner[]; currencyVal: number }) {
   const router = useRouter();
   const filters = useAppSelector((state) => state.aircondFilterSlice);
   const [currentItems, setCurrentitems] = useState(items);
   function filtration() {
      router.push("/catalog/air-conditioners/filter");
      if (filters.power.find((el) => el)) {
         setCurrentitems([items[0], items[1]]);
         return;
      }
      if (filters.wifi[0]) {
         const tempItems = currentItems.slice().filter((el) => {
            return el.airCondModelCollection.items[0].wifiPrice;
         });
         setCurrentitems(tempItems);
      }
   }
   return (
      <section className={styles.aircond__grid}>
         <Sidebar filtration={filtration} />
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>Настенные сплит-системы</h2>
            <ul className={styles.aircond__list}>
               {currentItems.map((el, index) => {
                  return <Item key={index} el={el} currencyVal={currencyVal} />;
               })}
            </ul>
         </div>
      </section>
   );
}
export default Grid;
