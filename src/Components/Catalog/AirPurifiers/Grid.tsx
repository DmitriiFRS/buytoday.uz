"use client";

import { useAppSelector } from "@/Hooks/ReduxHooks";
import { AirPurifiersCollection } from "@/app/catalog/air-purifiers/page";
import { useEffect, useState } from "react";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import MenuModalWindow from "@/Components/Utilities/MenuModalWindow";
import Pagination from "@/Components/Common/Pagination";
import Sidebar from "@/Components/Common/Filtration/Sidebar";
import { brandFilterAirPurifiers, typeFilterAirPurifiers } from "@/Redux/Slices/AircodnFilter.slice";
import Item2 from "@/Components/Common/Item2";
import s from "../../Utilities/Utilities.module.scss";
import Loader from "@/Components/Utilities/Loader";
import NotFound from "@/Components/Common/Filtration/NotFound";
import { openFilter } from "@/Functions/utilsFunctions";

type Props = {
   items: AirPurifiersCollection[];
   currencyVal: number;
   title: string;
   uri: string;
};

const filterFields = [
   {
      title: "Бренды",
      list: ["Welkin"],
      filterVal: ["Welkin"],
      id: ["Welkin7"],
   },
   {
      title: "Типы",
      list: ["Увлажнитель-очиститель воздуха", "Увлажнитель воздуха", "Очиститель воздуха"],
      filterVal: ["Увлажнитель-очиститель воздуха", "Увлажнитель воздуха", "Очиститель воздуха"],
      id: ["airPurifiers1", "airPurifiers2", "airPurifiers3"],
   },
];

function Grid({ items, currencyVal, title, uri }: Props) {
   const itemsPerPage = 10;
   const [currentPage, setCurrentPage] = useState(1);
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;

   const filters = useAppSelector((state) => state.aircondFilterSlice.airPurifiers);
   const [isCLient, setIsClient] = useState(false);
   const [currentItems, setCurrentItems] = useState<AirPurifiersCollection[]>([]);
   const [totalItems, setTotalItems] = useState<number>(0);
   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
   const [brands, setBrands] = useState<string[]>([]);
   const [type, setType] = useState<string[]>([]);

   function filtration() {
      let filterItems = items.slice();
      if (brands.length > 0) {
         filterItems = filterItems.filter((elem) => {
            if (elem.company) return brands.includes(elem.company);
         });
      }
      if (type.length > 0) {
         filterItems = filterItems.filter((elem) => {
            if (elem.company) return type.includes(elem.type);
         });
      }
      setCurrentItems(filterItems.sort((a, b) => Number(a.price) - Number(b.price)).slice(firstItemIndex, lastItemIndex));
      setTotalItems(filterItems.length);
   }
   useEffect(() => {
      let brandTemp: string[] = [];
      let typeTemp: string[] = [];
      if (filters.brand.some((el) => el)) {
         filters.brand.forEach((el, idx) => {
            if (el) brandTemp.push(filterFields[0].filterVal[idx]);
         });
         setBrands(brandTemp);
      } else {
         setBrands([]);
      }
      if (filters.type.some((el) => el)) {
         filters.type.forEach((el, idx) => {
            if (el) typeTemp.push(filterFields[1].filterVal[idx]);
         });
         setType(typeTemp);
      } else {
         setType([]);
      }
   }, [filters]);

   useEffect(() => {
      filtration();
      setIsClient(true);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [brands, type, currentPage]);
   useEffect(() => {
      setCurrentPage(1);
   }, [brands, type]);

   return isCLient ? (
      <section className={styles.aircond__grid}>
         <Sidebar
            dispatchers={[brandFilterAirPurifiers, typeFilterAirPurifiers]}
            isMobile={false}
            filters={[filters.brand, filters.type]}
            filterFields={filterFields}
         />
         <div className={styles.aircond__mobileFilter}>
            <button onClick={() => openFilter(setMobileFilterOpen)}>Фильтры</button>
         </div>
         {isMobileFilterOpen && (
            <MenuModalWindow btnText="Найти" toggleWindow={setMobileFilterOpen}>
               <Sidebar
                  dispatchers={[brandFilterAirPurifiers, typeFilterAirPurifiers]}
                  isMobile={true}
                  filters={[filters.brand, filters.type]}
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
                                       Номинальное напряжени: <span>{el.voltage}</span>
                                    </div>
                                    <div className={styles.aircond__item__param}>
                                       Бренд: <span>{el.company}</span>
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
