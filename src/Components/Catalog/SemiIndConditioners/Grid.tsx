"use client";

import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import Item from "../../Common/Item";
import { SemiIndModelCollection } from "@/app/catalog/col-conditioners/page";
import Pagination from "../../Common/Pagination";
import MenuModalWindow from "../../Utilities/MenuModalWindow";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import Sidebar from "../../Common/Filtration/Sidebar";
import { brandFilterSemi, powerFilterSemi, typeFilterSemi } from "@/Redux/Slices/AircodnFilter.slice";
import NotFound from "@/Components/Common/Filtration/NotFound";
import { openFilter } from "@/Functions/utilsFunctions";

const filterFields = [
   {
      title: "Бренды",
      list: ["Midea", "Welkin"],
      filterVal: ["Midea", "Welkin"],
      id: ["Midea3", "Welkin3"],
   },
   {
      title: "Мощность",
      list: ["12000 Btu/h до 25м²", "18000 Btu/h до 40м²", "24000 Btu/h до 50м²", "36000 Btu/h до 75м²", "48000 Btu/h до 100м²", "60000 Btu/h до 120м²"],
      filterVal: ["12000", "18000", "24000", "36000", "48000", "60000"],
      id: ["12000-semi", "18000-semi", "24000-semi", "36000-semi", "48000-semi", "60000-semi"],
   },
   {
      title: "Тип компрессора",
      list: ["Инверторный", "On/Off"],
      filterVal: [true, false],
      id: ["inverter-semi", "on-off-semi"],
   },
];

function Grid({ items, currencyVal, title, uri }: { items: SemiIndModelCollection[]; currencyVal: number; title: string; uri: string }) {
   const itemsPerPage = 10;
   const [currentPage, setCurrentPage] = useState(1);
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;

   const filters = useAppSelector((state) => state.aircondFilterSlice.semi);
   const [currentItems, setCurrentItems] = useState<SemiIndModelCollection[]>([]);
   const [totalItems, setTotalItems] = useState<number>(0);
   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
   const [brands, setBrands] = useState<string[]>([]);
   const [power, setPower] = useState<string[]>([]);
   const [type, setType] = useState<boolean[]>([]);

   function filtration() {
      let filterItems = items.slice();
      if (brands.length > 0) {
         filterItems = filterItems.filter((elem) => brands.includes(elem.company));
      }
      if (power.length > 0) {
         filterItems = filterItems.filter((elem) => power.includes(elem.coolingPowerBtu));
      }
      if (type.length > 0) {
         filterItems = filterItems.filter((elem) => type.includes(elem.isInverter));
      }
      setCurrentItems(filterItems.sort((a, b) => Number(a.price) - Number(b.price)).slice(firstItemIndex, lastItemIndex));
      setTotalItems(filterItems.length);
   }
   useEffect(() => {
      let brandTemp: string[] = [];
      let powerTemp: string[] = [];
      let typeTemp: boolean[] = [];
      if (filters.brand.some((el) => el)) {
         filters.brand.forEach((el, idx) => {
            if (el) brandTemp.push(filterFields[0].filterVal[idx] as string);
         });
         setBrands(brandTemp);
      } else {
         setBrands([]);
      }
      if (filters.power.some((el) => el)) {
         filters.power.forEach((el, idx) => {
            if (el) powerTemp.push(filterFields[1].filterVal[idx] as string);
         });
         setPower(powerTemp);
      } else {
         setPower([]);
      }
      if (filters.type.some((el) => el)) {
         filters.type.forEach((el, idx) => {
            if (el) typeTemp.push(filterFields[2].filterVal[idx] as boolean);
         });
         setType(typeTemp);
      } else {
         setType([]);
      }
   }, [filters]);

   useEffect(() => {
      filtration();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [brands, power, type, currentPage]);

   useEffect(() => {
      setCurrentPage(1);
   }, [brands, power, type]);

   return (
      <section className={styles.aircond__grid}>
         <Sidebar
            dispatchers={[brandFilterSemi, powerFilterSemi, typeFilterSemi]}
            isMobile={false}
            filters={[filters.brand, filters.power, filters.type]}
            filterFields={filterFields}
         />
         <div className={styles.aircond__mobileFilter}>
            <button onClick={() => openFilter(setMobileFilterOpen)}>Фильтры</button>
         </div>
         {isMobileFilterOpen && (
            <MenuModalWindow btnText="Найти" toggleWindow={setMobileFilterOpen}>
               <Sidebar
                  dispatchers={[brandFilterSemi, powerFilterSemi, typeFilterSemi]}
                  isMobile={true}
                  filters={[filters.brand, filters.power, filters.type]}
                  filterFields={filterFields}
               />
            </MenuModalWindow>
         )}
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>{title}</h2>
            <ul className={styles.aircond__list}>
               {currentItems.length > 0 ? (
                  currentItems.map((el, index) => {
                     return (
                        <Item key={index} el={el} currencyVal={currencyVal} uri={uri}>
                           <div className={styles.aircond__item__titles}>
                              <h5 className={styles.aircond__item__title}>{title}</h5>
                              <h3 className={styles.aircond__item__name}>
                                 {el.name} модель {el.model}
                              </h3>
                              <div className={styles.aircond__item__params}>
                                 <div className={styles.aircond__item__param}>
                                    Инверторный: <span>{el.isInverter ? "Да" : "Нет"}</span>
                                 </div>
                                 <div className={styles.aircond__item__param}>
                                    Диапазон температур: <span>{el.temperatureRange}</span>
                                 </div>
                              </div>
                           </div>
                        </Item>
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
