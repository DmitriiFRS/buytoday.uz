/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { AircondDataInner } from "@/app/catalog/air-conditioners/[item]/page";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Item from "./Item";
import Sidebar from "./Sidebar/Sidebar";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { useEffect, useState } from "react";
import ItemModel from "./ItemModel";
import MobileFilter from "./Sidebar/Mobile/MobileFilter";
function Grid({ items, currencyVal }: { items: AircondDataInner[]; currencyVal: number }) {
   const filters = useAppSelector((state) => state.aircondFilterSlice);
   const [currentItems, setCurrentitems] = useState(items);
   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
   function filtration() {
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
   useEffect(() => {
      filtration();
   }, [filters]);
   function openFilter() {
      setMobileFilterOpen(true);
   }
   return (
      <section className={styles.aircond__grid}>
         <Sidebar filtration={filtration} />
         <div className={styles.aircond__mobileFilter}>
            <button onClick={openFilter}>Фильтры</button>
         </div>
         {isMobileFilterOpen && <MobileFilter isMobileFilterOpen={isMobileFilterOpen} filtration={filtration} setMobileFilterOpen={setMobileFilterOpen} />}
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>Настенные сплит-системы</h2>
            <ul className={styles.aircond__list}>
               {filters.power.find((el) => el) || filters.wifi.find((el) => el)
                  ? currentItems.map((el, index) => {
                       return (
                          <div key={index}>
                             {el.airCondModelCollection.items.map((innerEl, index2) => {
                                return <ItemModel key={index2} el={el} innerEl={innerEl} currencyVal={currencyVal} />;
                             })}
                          </div>
                       );
                    })
                  : currentItems.map((el, index) => {
                       return <Item key={index} el={el} currencyVal={currencyVal} />;
                    })}
            </ul>
         </div>
      </section>
   );
}
export default Grid;
