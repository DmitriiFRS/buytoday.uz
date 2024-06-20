"use client";

import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { useEffect, useState } from "react";
import Pagination from "../../Common/Pagination";
import MenuModalWindow from "../../Utilities/MenuModalWindow";
import { FridgeDataInner } from "@/app/catalog/fridges/page";
import Sidebar from "../../Common/Filtration/Sidebar";
import { brandFilterFridge, colorFilterFridge, typeFilterFridge } from "@/Redux/Slices/AircodnFilter.slice";
import Item2 from "../../Common/Item2";
import Loader from "@/Components/Utilities/Loader";
import s from "../../Utilities/Utilities.module.scss";
import NotFound from "@/Components/Common/Filtration/NotFound";
import { openFilter } from "@/Functions/utilsFunctions";

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
   {
      title: "Типы",
      list: ["Четырехдверный", "Однодверный", "Морозильная камера", "Ларь"],
      filterVal: ["Четырехдверный", "Однодверный", "Морозильная камера", "Ларь"],
      id: ["fourdoor-fridge", "onedoor-fridge", "freezer-fridge", "lar-fridge"],
   },
];

type Props = {
   items: FridgeDataInner[];
   currencyVal: number;
   title: string;
   uri: string;
};

function Grid({ items, currencyVal, title, uri }: Props) {
   const itemsPerPage = 10;
   const [currentPage, setCurrentPage] = useState(1);
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;

   const filters = useAppSelector((state) => state.aircondFilterSlice.fridge);
   const [isCLient, setIsClient] = useState(false);
   const [currentItems, setCurrentItems] = useState<FridgeDataInner[]>([]);
   const [totalItems, setTotalItems] = useState<number>(0);
   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
   const [brands, setBrands] = useState<string[]>([]);
   const [color, setColor] = useState<string[]>([]);
   const [type, setType] = useState<string[]>([]);

   function filtration() {
      let filterItems = items.slice();
      if (brands.length > 0) {
         filterItems = filterItems.filter((brand) => {
            if (brand.company) return brands.includes(brand.company);
         });
      }
      if (color.length > 0) {
         filterItems = filterItems.filter((model) => color.includes(model.color));
      }
      if (type.length > 0) {
         filterItems = filterItems.filter((model) => type.includes(model.type));
      }
      setCurrentItems(filterItems.sort((a, b) => Number(a.price) - Number(b.price)).slice(firstItemIndex, lastItemIndex));
      setTotalItems(filterItems.length);
   }

   useEffect(() => {
      let brandTemp: string[] = [];
      let colorTemp: string[] = [];
      let typeTemp: string[] = [];
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
      if (filters.type.some((el) => el)) {
         filters.type.forEach((el, idx) => {
            if (el) typeTemp.push(filterFields[2].filterVal[idx]);
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
   }, [brands, color, type, currentPage]);
   useEffect(() => {
      setCurrentPage(1);
   }, [brands, color, type]);

   return isCLient ? (
      <section className={styles.aircond__grid}>
         <Sidebar
            dispatchers={[brandFilterFridge, colorFilterFridge, typeFilterFridge]}
            isMobile={false}
            filters={[filters.brand, filters.color, filters.type]}
            filterFields={filterFields}
         />
         <div className={styles.aircond__mobileFilter}>
            <button onClick={() => openFilter(setMobileFilterOpen)}>Фильтры</button>
         </div>
         {isMobileFilterOpen && (
            <MenuModalWindow btnText="Найти" toggleWindow={setMobileFilterOpen}>
               <Sidebar
                  dispatchers={[brandFilterFridge, colorFilterFridge, typeFilterFridge]}
                  isMobile={true}
                  filters={[filters.brand, filters.color, filters.type]}
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
                                    {el.name} {el.color} {el.company}
                                 </h3>
                                 <div className={styles.aircond__item__params}>
                                    <div className={styles.aircond__item__param}>
                                       Цвет <span>{el.color}</span>
                                    </div>
                                    <div className={styles.aircond__item__param}>
                                       Бренд: <span>{el.company}</span>
                                    </div>
                                    <div className={styles.aircond__item__param}>No Frost: {el.noFrost ? <span>Да</span> : <span>Нет</span>}</div>
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
