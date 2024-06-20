"use client";

import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { useEffect, useState } from "react";
import Pagination from "../../Common/Pagination";
import MenuModalWindow from "../../Utilities/MenuModalWindow";
import { WashCollection } from "@/app/catalog/wash/page";
import Sidebar from "../../Common/Filtration/Sidebar";
import { brandFilterWash, colorFilterWash, dryingFilterWash } from "@/Redux/Slices/AircodnFilter.slice";
import Item2 from "../../Common/Item2";
import s from "../../Utilities/Utilities.module.scss";
import Loader from "@/Components/Utilities/Loader";
import NotFound from "@/Components/Common/Filtration/NotFound";
import { openFilter } from "@/Functions/utilsFunctions";

type Props = {
   items: WashCollection[];
   currencyVal: number;
   title: string;
   uri: string;
};

const filterFields = [
   {
      title: "Бренды",
      list: ["Midea"],
      filterVal: ["Midea"],
      id: ["Midea5"],
   },
   {
      title: "Сушка",
      list: ["Есть", "Нет"],
      filterVal: [true, false],
      id: ["drying-true-wash", "drying-false-wash"],
   },
   {
      title: "Цвет",
      list: ["Черный", "Белый"],
      filterVal: ["Черный", "Белый"],
      id: ["black-wash", "white-wash"],
   },
];

function Grid({ items, currencyVal, title, uri }: Props) {
   const itemsPerPage = 10;
   const [currentPage, setCurrentPage] = useState(1);
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;

   const filters = useAppSelector((state) => state.aircondFilterSlice.wash);
   const [isCLient, setIsClient] = useState(false);
   const [currentItems, setCurrentItems] = useState<WashCollection[]>([]);
   const [totalItems, setTotalItems] = useState<number>(0);
   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
   const [brands, setBrands] = useState<string[]>([]);
   const [drying, setDrying] = useState<boolean[]>([]);
   const [color, setColor] = useState<string[]>([]);

   function filtration() {
      let filterItems = items.slice();
      if (brands.length > 0) {
         filterItems = filterItems.filter((brand) => {
            if (brand.company) return brands.includes(brand.company);
         });
      }
      if (drying.length > 0) {
         filterItems = filterItems.filter((elem) => {
            if (elem.isDrying) return drying.includes(elem.isDrying);
         });
      }
      if (color.length > 0) {
         filterItems = filterItems.filter((elem) => color.includes(elem.color));
      }
      setCurrentItems(filterItems.sort((a, b) => Number(a.price) - Number(b.price)).slice(firstItemIndex, lastItemIndex));
      setTotalItems(filterItems.length);
   }

   useEffect(() => {
      let brandTemp: string[] = [];
      let dryingTemp: boolean[] = [];
      let colorTemp: string[] = [];
      if (filters.brand.some((el) => el)) {
         filters.brand.forEach((el, idx) => {
            if (el) brandTemp.push(filterFields[0].filterVal[idx] as string);
         });
         setBrands(brandTemp);
      } else {
         setBrands([]);
      }
      if (filters.drying.some((el) => el)) {
         filters.drying.forEach((el, idx) => {
            if (el) dryingTemp.push(filterFields[1].filterVal[idx] as boolean);
         });
         setDrying(dryingTemp);
      } else {
         setDrying([]);
      }
      if (filters.color.some((el) => el)) {
         filters.color.forEach((el, idx) => {
            if (el) colorTemp.push(filterFields[2].filterVal[idx] as string);
         });
         setColor(colorTemp);
      } else {
         setColor([]);
      }
   }, [filters]);

   useEffect(() => {
      filtration();
      setIsClient(true);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [brands, drying, color, currentPage]);
   useEffect(() => {
      setCurrentPage(1);
   }, [brands, drying, color]);

   return isCLient ? (
      <section className={styles.aircond__grid}>
         <Sidebar
            dispatchers={[brandFilterWash, dryingFilterWash, colorFilterWash]}
            isMobile={false}
            filters={[filters.brand, filters.drying, filters.color]}
            filterFields={filterFields}
         />
         <div className={styles.aircond__mobileFilter}>
            <button onClick={() => openFilter(setMobileFilterOpen)}>Фильтры</button>
         </div>
         {isMobileFilterOpen && (
            <MenuModalWindow btnText="Найти" toggleWindow={setMobileFilterOpen}>
               <Sidebar
                  dispatchers={[brandFilterWash, dryingFilterWash, colorFilterWash]}
                  isMobile={true}
                  filters={[filters.brand, filters.drying, filters.color]}
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
                                       Цвет <span>{el.color}</span>
                                    </div>
                                    <div className={styles.aircond__item__param}>
                                       Бренд: <span>{el.company}</span>
                                    </div>
                                    <div className={styles.aircond__item__param}>Сушка: {el.isDrying ? <span>Есть</span> : <span>Нет</span>}</div>
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
