/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { useEffect, useState } from "react";
import ItemModel from "./ItemModel";
import { AircondDataModel } from "@/app/catalog/air-conditioners/page";
import Pagination from "../../Common/Pagination";
import MenuModalWindow from "../../Utilities/MenuModalWindow";
import NotFound from "@/Components/Common/Filtration/NotFound";
import { openFilter } from "@/Functions/utilsFunctions";
import Sidebar from "@/Components/Common/Filters/Sidebar";

const filterFields = [
   {
      title: "Бренды",
      titleVal: "Brands",
      list: ["Midea", "Welkin"],
      filterVal: ["Midea", "Welkin"],
      id: ["Midea", "Welkin"],
   },
   {
      title: "Мощность",
      titleVal: "Power",
      list: ["7000 Btu/h до 25м²", "9000 Btu/h до 30м²", "12000 Btu/h до 40м²", "18000 Btu/h до 60м²", "24000 Btu/h до 75м²"],
      filterVal: ["7000", "9000", "12000", "18000", "24000"],
      id: ["7000", "9000", "12000", "18000", "24000"],
   },
   {
      title: "Управление по Wi-Fi",
      titleVal: "Wifi",
      list: ["Да", "Нет"],
      filterVal: ["yes", "no"],
      id: ["includeWifi", "notIncludeWifi"],
   },
];

function Grid({ items, currencyVal, url }: { items: AircondDataModel[]; currencyVal: number; url: string }) {
   const itemsPerPage = 10;
   const [currentPage, setCurrentPage] = useState(1);
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;
   //.slice(firstItemIndex, lastItemIndex)
   const [currentItems, setCurrentItems] = useState<AircondDataModel[]>([]);
   const [totalItems, setTotalItems] = useState<number>(0);
   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);

   useEffect(() => {
      const filteredItems = items
         .slice()
         .sort((a, b) => Number(a.coolingPowerBtu) - Number(b.coolingPowerBtu))
         .slice(firstItemIndex, lastItemIndex);
      setCurrentItems(filteredItems);
      setCurrentPage(1);
      setTotalItems(items.length);
   }, [items]);

   useEffect(() => {
      const filteredItems = items
         .slice()
         .sort((a, b) => Number(a.coolingPowerBtu) - Number(b.coolingPowerBtu))
         .slice(firstItemIndex, lastItemIndex);
      setCurrentItems(filteredItems);
   }, [currentPage]);

   // -------------------------------
   return (
      <section className={styles.aircond__grid}>
         <Sidebar isMobile={false} url={url} filterFields={filterFields} />
         <div className={styles.aircond__mobileFilter}>
            <button onClick={() => openFilter(setMobileFilterOpen)}>Фильтры</button>
         </div>
         {isMobileFilterOpen && (
            <MenuModalWindow btnText="Найти" toggleWindow={setMobileFilterOpen}>
               <Sidebar isMobile={true} url={url} filterFields={filterFields} />
            </MenuModalWindow>
         )}
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>Настенные сплит-системы</h2>
            <ul className={styles.aircond__list}>
               {currentItems.length > 0 ? (
                  currentItems
                     .sort((a, b) => Number(a.coolingPowerBtu) - Number(b.coolingPowerBtu))
                     .map((item, index) => {
                        return (
                           <div key={index}>
                              <ItemModel key={index} el={item} currencyVal={currencyVal} />
                           </div>
                        );
                     })
               ) : (
                  <NotFound />
               )}
            </ul>
            {currentItems.length > 0 && (
               <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            )}
         </div>
      </section>
   );
}
export default Grid;
