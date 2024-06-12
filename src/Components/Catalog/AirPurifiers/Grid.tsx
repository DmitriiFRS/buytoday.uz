"use client";

import { useAppSelector } from "@/Hooks/ReduxHooks";
import { AirPurifiersCollection } from "@/app/catalog/air-purifiers/page";
import { useEffect, useState } from "react";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import MenuModalWindow from "@/Components/Utilities/MenuModalWindow";
import Pagination from "@/Components/Common/Pagination";
import Sidebar from "./Sidebar";
import Item from "./Item";

type Props = {
   items: AirPurifiersCollection[];
   currencyVal: number;
   title: string;
};

const filterFields = [
   {
      title: "Бренды",
      list: ["Welkin"],
      filterVal: ["Welkin"],
      id: ["Welkin7"],
   },
];

function Grid({ items, currencyVal, title }: Props) {
   const itemsPerPage = 10;
   const [currentPage, setCurrentPage] = useState(1);
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;

   const filters = useAppSelector((state) => state.aircondFilterSlice.airPurifiers);

   const [currentItems, setCurrentItems] = useState<AirPurifiersCollection[]>([]);
   const [totalItems, setTotalItems] = useState<number>(0);
   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
   const [brands, setBrands] = useState<string[]>([]);

   function filtration() {
      let filterItems = items.slice();
      if (brands.length > 0) {
         filterItems = filterItems.filter((brand) => {
            if (brand.company) return brands.includes(brand.company);
         });
      }
      setCurrentItems(filterItems.sort((a, b) => Number(a.price) - Number(b.price)).slice(firstItemIndex, lastItemIndex));
      setTotalItems(filterItems.length);
   }
   useEffect(() => {
      let brandTemp: string[] = [];
      if (filters.brand.some((el) => el)) {
         filters.brand.forEach((el, idx) => {
            if (el) brandTemp.push(filterFields[0].filterVal[idx]);
         });
         setBrands(brandTemp);
      } else {
         setBrands([]);
      }
   }, [filters]);

   useEffect(() => {
      filtration();
   }, [brands, currentPage]);
   useEffect(() => {
      setCurrentPage(1);
   }, [brands]);
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
            <h2 className={styles.aircond__title}>Очистители - увлажнители</h2>
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
