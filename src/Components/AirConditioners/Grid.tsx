/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Sidebar from "./Sidebar/Sidebar";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { useEffect, useState } from "react";
import ItemModel from "./ItemModel";
import MobileFilter from "./Sidebar/Mobile/MobileFilter";
import { AircondDataModel } from "@/app/catalog/air-conditioners/page";
import Pagination from "../Common/Pagination";

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

function Grid({ items, currencyVal }: { items: AircondDataModel[]; currencyVal: number }) {
   const itemsPerPage = 10;
   const [currentPage, setCurrentPage] = useState(1);
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;

   const filters = useAppSelector((state) => state.aircondFilterSlice);
   const [currentItems, setCurrentItems] = useState<AircondDataModel[]>([]);
   const [totalItems, setTotalItems] = useState<number>(0);
   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
   const [brands, setBrands] = useState<string[]>([]);
   const [btu, setBtu] = useState<string[]>([]);

   function filtration() {
      let filterItems = items.slice();
      if (brands.length > 0) {
         filterItems = filterItems.filter((brand) => {
            if (brand.company) return brands.includes(brand.company);
         });
      }
      //btu
      if (btu.length > 0) {
         filterItems = filterItems.filter((model) => btu.includes(model.filterBtu));
      }

      //wifi last filtration
      if (filters.wifi.every((active: boolean) => active) || filters.wifi.every((active) => !active)) {
         setCurrentItems(filterItems.sort((a, b) => Number(a.coolingPowerBtu) - Number(b.coolingPowerBtu)).slice(firstItemIndex, lastItemIndex));
         setTotalItems(filterItems.length);
      } else if (filters.wifi.some((active) => active)) {
         if (filters.wifi[0]) {
            const tempItems = filterItems.slice().filter((el) => {
               return el.wifiPrice;
            });
            setCurrentItems(tempItems.sort((a, b) => Number(a.coolingPowerBtu) - Number(b.coolingPowerBtu)).slice(firstItemIndex, lastItemIndex));
            setTotalItems(tempItems.length);
         }
         if (filters.wifi[1]) {
            const tempItems = filterItems.slice().filter((el) => {
               return !el.wifiPrice;
            });
            setCurrentItems(tempItems.sort((a, b) => Number(a.coolingPowerBtu) - Number(b.coolingPowerBtu)).slice(firstItemIndex, lastItemIndex));
            setTotalItems(tempItems.length);
         }
      }
   }
   // -------------------------------
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
   }, [brands, btu, filters.wifi, currentPage]);
   useEffect(() => {
      setCurrentPage(1);
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
         {isMobileFilterOpen && <MobileFilter filterFields={filterFields} setMobileFilterOpen={setMobileFilterOpen} />}
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>Настенные сплит-системы</h2>
            <ul className={styles.aircond__list}>
               {currentItems
                  .sort((a, b) => Number(a.coolingPowerBtu) - Number(b.coolingPowerBtu))
                  .map((item, index) => {
                     return (
                        <div key={index}>
                           <ItemModel key={index} el={item} currencyVal={currencyVal} />
                        </div>
                     );
                  })}
            </ul>
            {currentItems.length > 0 && (
               <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            )}
         </div>
      </section>
   );
}
export default Grid;
