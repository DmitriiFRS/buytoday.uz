/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { AircondDataInner } from "@/app/catalog/air-conditioners/[item]/page";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Item from "./Item";
import Sidebar from "./Sidebar/Sidebar";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { useEffect, useMemo, useState } from "react";
import ItemModel from "./ItemModel";
import MobileFilter from "./Sidebar/Mobile/MobileFilter";

const filterFields = [
   {
      title: "Бренды",
      list: ["Midea", "Welkin"],
      id: ["Midea", "Welkin"],
   },
   {
      title: "Мощность",
      list: ["7000 Btu/h", "9000 Btu/h", "12000 Btu/h", "18000 Btu/h", "24000 Btu/h"],
      id: ["7000", "9000", "12000", "18000", "24000"],
   },
   {
      title: "Управление по Wi-Fi",
      list: ["Да", "Нет"],
      id: ["includeWifi", "notIncludeWifi"],
   },
];

function Grid({ items, currencyVal }: { items: AircondDataInner[]; currencyVal: number }) {
   const filters = useAppSelector((state) => state.aircondFilterSlice);
   const [currentItems, setCurrentItems] = useState(items);
   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
   const [brands, setBrands] = useState<string[]>([]);
   const [btu, setBtu] = useState<string[]>([]);
   function filtration() {
      let filterItems = items.slice();
      if (brands.length > 0) {
         filterItems = filterItems.filter((brand) => {
            return brands.includes(brand.company);
         });
      }
      if (btu.length > 0) {
         filterItems = filterItems.map((el) => ({
            ...el,
            airCondModelCollection: {
               items: el.airCondModelCollection.items.filter((model) => btu.includes(model.coolingPowerBtu)),
            },
         }));
      }
      setCurrentItems(filterItems);
      //wifi
      /*if (filters.wifi.every((active) => active) || filters.wifi.every((active) => !active)) {
         setCurrentItems(items);
      } else if (filters.wifi.some((active) => active)) {
         if (filters.wifi[0]) {
            const tempItems = currentItems.slice().filter((el) => {
               return el.airCondModelCollection.items[0].wifiPrice;
            });
            setCurrentItems(tempItems);
         }
         if (filters.wifi[1]) {
            const tempItems = currentItems.slice().filter((el) => {
               return !el.airCondModelCollection.items[0].wifiPrice;
            });
            setCurrentItems(tempItems);
         }
      }*/
      //brands
   }
   useEffect(() => {
      let brandTemp: string[] = [];
      let powerTemp: string[] = [];
      if (filters.brand.some((el) => el)) {
         filters.brand.forEach((el, idx) => {
            if (el) brandTemp.push(filterFields[0].id[idx]);
         });
         setBrands(brandTemp);
      } else {
         setBrands([]);
      }
      if (filters.power.some((el) => el)) {
         filters.power.forEach((el, idx) => {
            if (el) powerTemp.push(filterFields[1].id[idx]);
         });
         setBtu(powerTemp);
      } else {
         setBtu([]);
      }
   }, [filters]);

   useEffect(() => {
      filtration();
   }, [brands, btu, filters.wifi]);
   function openFilter() {
      setMobileFilterOpen(true);
   }
   return (
      <section className={styles.aircond__grid}>
         <Sidebar filterFields={filterFields} />
         <div className={styles.aircond__mobileFilter}>
            <button onClick={openFilter}>Фильтры</button>
         </div>
         {isMobileFilterOpen && <MobileFilter isMobileFilterOpen={isMobileFilterOpen} filtration={filtration} setMobileFilterOpen={setMobileFilterOpen} />}
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>Настенные сплит-системы</h2>
            <ul className={styles.aircond__list}>
               {filters.power.find((el) => el)
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
