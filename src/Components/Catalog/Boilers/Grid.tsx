"use client";

import { BoilersCollection } from "@/app/catalog/boilers/page";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { useEffect, useState } from "react";
import Pagination from "../../Common/Pagination";
import MenuModalWindow from "../../Utilities/MenuModalWindow";
import { brandFilterBoilers, performanceFilterBoilers } from "@/Redux/Slices/AircodnFilter.slice";
import Sidebar from "@/Components/Common/Filtration/Sidebar";
import Item2 from "@/Components/Common/Item2";
import s from "../../Utilities/Utilities.module.scss";
import Loader from "@/Components/Utilities/Loader";
import NotFound from "@/Components/Common/Filtration/NotFound";
import { openFilter } from "@/Functions/utilsFunctions";

type Props = {
   items: BoilersCollection[];
   currencyVal: number;
   title: string;
   uri: string;
};

const filterFields = [
   {
      title: "Бренды",
      list: ["Welkin"],
      filterVal: ["Welkin"],
      id: ["Welkin6"],
   },
   {
      title: "Производительность",
      list: ["До 20кВт"],
      filterVal: ["20"],
      id: ["20kW-boilers"],
   },
];

function Grid({ items, currencyVal, title, uri }: Props) {
   const itemsPerPage = 10;
   const [currentPage, setCurrentPage] = useState(1);
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;

   const filters = useAppSelector((state) => state.aircondFilterSlice.boilers);
   const [isCLient, setIsClient] = useState(false);
   const [currentItems, setCurrentItems] = useState<BoilersCollection[]>([]);
   const [totalItems, setTotalItems] = useState<number>(0);
   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
   const [brands, setBrands] = useState<string[]>([]);
   const [performance, setPerformance] = useState<string[]>([]);

   function filtration() {
      let filterItems = items.slice();
      if (brands.length > 0) {
         filterItems = filterItems.filter((brand) => {
            if (brand.company) return brands.includes(brand.company);
         });
      }
      if (performance.length > 0) {
         filterItems = filterItems.filter((elem) => {
            return performance.includes(elem.performanceFilter);
         });
      }
      setCurrentItems(filterItems.sort((a, b) => Number(a.price) - Number(b.price)).slice(firstItemIndex, lastItemIndex));
      setTotalItems(filterItems.length);
   }
   useEffect(() => {
      let brandTemp: string[] = [];
      let performanceTemp: string[] = [];
      if (filters.brand.some((el) => el)) {
         filters.brand.forEach((el, idx) => {
            if (el) brandTemp.push(filterFields[0].filterVal[idx]);
         });
         setBrands(brandTemp);
      } else {
         setBrands([]);
      }
      if (filters.performance.some((el) => el)) {
         filters.performance.forEach((el, idx) => {
            if (el) performanceTemp.push(filterFields[1].filterVal[idx]);
         });
         setPerformance(performanceTemp);
      } else {
         setPerformance([]);
      }
   }, [filters]);

   useEffect(() => {
      filtration();
      setIsClient(true);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [brands, currentPage]);
   useEffect(() => {
      setCurrentPage(1);
   }, [brands, performance]);

   return isCLient ? (
      <section className={styles.aircond__grid}>
         <Sidebar
            dispatchers={[brandFilterBoilers, performanceFilterBoilers]}
            isMobile={false}
            filters={[filters.brand, filters.performance]}
            filterFields={filterFields}
         />
         <div className={styles.aircond__mobileFilter}>
            <button onClick={() => openFilter(setMobileFilterOpen)}>Фильтры</button>
         </div>
         {isMobileFilterOpen && (
            <MenuModalWindow btnText="Найти" toggleWindow={setMobileFilterOpen}>
               <Sidebar
                  dispatchers={[brandFilterBoilers, performanceFilterBoilers]}
                  isMobile={true}
                  filters={[filters.brand, filters.performance]}
                  filterFields={filterFields}
               />
            </MenuModalWindow>
         )}
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>{title}</h2>
            <ul className={styles.aircond__list}>
               {currentItems.length > 0 ? (
                  currentItems
                     .sort((a, b) => Number(a.price) - Number(b.price))
                     .map((el, index) => {
                        return (
                           <Item2 key={index} el={el} currencyVal={currencyVal} uri={uri}>
                              <div className={styles.aircond__item__titles}>
                                 <h5 className={styles.aircond__item__title}>{title}</h5>
                                 <h3 className={styles.aircond__item__name}>
                                    {el.name} {el.company}
                                 </h3>
                                 <div className={styles.aircond__item__params}>
                                    <div className={styles.aircond__item__param}>
                                       Расход газа Nm3/h <span>{el.gasFlow}</span>
                                    </div>
                                    <div className={styles.aircond__item__param}>
                                       Бренд: <span>{el.company}</span>
                                    </div>
                                    <div className={styles.aircond__item__param}>
                                       Производительность макс. <span>{el.performanceMax} кВт</span>
                                    </div>
                                 </div>
                              </div>
                           </Item2>
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
   ) : (
      <Loader className={s.loader__aircondList} />
   );
}
export default Grid;
