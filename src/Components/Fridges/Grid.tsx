"use client";

import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Sidebar from "./Sidebar/Sidebar";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { useEffect, useState } from "react";
import Pagination from "../Common/Pagination";
import MenuModalWindow from "../Utilities/MenuModalWindow";
import { FridgeDataInner } from "@/app/catalog/fridges/page";
import Item from "./Item";

const filterFields = [
   {
      title: "Бренды",
      list: ["Midea"],
      filterVal: ["Midea"],
      id: ["Midea4"],
   },
   {
      title: "Цвет",
      list: ["Jazz Black", "Стальной"],
      filterVal: ["Jazz Black", "Стальной"],
      id: ["Jazz Black1", "Steel1"],
   },
];

type Props = {
   items: FridgeDataInner[];
   currencyVal: number;
   title: string;
};

function Grid({ items, currencyVal, title }: Props) {
   const itemsPerPage = 10;
   const [currentPage, setCurrentPage] = useState(1);
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;

   const filters = useAppSelector((state) => state.aircondFilterSlice.fridge);
   const [currentItems, setCurrentItems] = useState<FridgeDataInner[]>([]);
   const [totalItems, setTotalItems] = useState<number>(0);
   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
   const [brands, setBrands] = useState<string[]>([]);
   const [color, setColor] = useState<string[]>([]);

   function filtration() {
      let filterItems = items.slice();
      if (brands.length > 0) {
         filterItems = filterItems.filter((brand) => {
            if (brand.company) return brands.includes(brand.company);
         });
      }
      //btu
      if (color.length > 0) {
         filterItems = filterItems.filter((model) => color.includes(model.color));
      }
      setCurrentItems(filterItems.sort((a, b) => Number(a.price) - Number(b.price)).slice(firstItemIndex, lastItemIndex));
      setTotalItems(filterItems.length);
   }

   useEffect(() => {
      let brandTemp: string[] = [];
      let colorTemp: string[] = [];
      if (filters.brand.some((el) => el)) {
         filters.brand.forEach((el, idx) => {
            if (el) brandTemp.push(filterFields[0].filterVal[idx]);
         });
         setBrands(brandTemp);
      } else {
         setBrands([]);
      }
      if (filters.color.some((el) => el)) {
         filters.color.forEach((el, idx) => {
            if (el) colorTemp.push(filterFields[1].filterVal[idx]);
         });
         setColor(colorTemp);
      } else {
         setColor([]);
      }
   }, [filters]);

   useEffect(() => {
      filtration();
   }, [brands, color, currentPage]);
   useEffect(() => {
      setCurrentPage(1);
   }, [brands, color]);
   function openFilter() {
      setMobileFilterOpen(true);
   }

   return (
      <section className={styles.aircond__grid}>
         <Sidebar isMobile={false} filters={filters} filterFields={filterFields} />
         <div className={styles.aircond__mobileFilter}>
            <button onClick={openFilter}>Фильтры</button>
         </div>
         {isMobileFilterOpen && (
            <MenuModalWindow btnText="Найти" toggleWindow={setMobileFilterOpen}>
               <Sidebar isMobile={true} filters={filters} filterFields={filterFields} />
            </MenuModalWindow>
         )}
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>Холодильники</h2>
            <ul className={styles.aircond__list}>
               {currentItems
                  .sort((a, b) => Number(a.price) - Number(b.price))
                  .map((item, index) => {
                     return (
                        <div key={index}>
                           <Item key={index} el={item} currencyVal={currencyVal} title={title} />
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
