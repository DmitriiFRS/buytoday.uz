"use client";

import { BoilersCollection } from "@/app/catalog/boilers/page";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { useEffect, useState } from "react";
import Pagination from "../../Common/Pagination";
import MenuModalWindow from "../../Utilities/MenuModalWindow";
import { brandFilterBoilers } from "@/Redux/Slices/AircodnFilter.slice";
import Sidebar from "@/Components/Common/Filtration/Sidebar";
import Item2 from "@/Components/Common/Item2";

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
];

function Grid({ items, currencyVal, title, uri }: Props) {
   const itemsPerPage = 10;
   const [currentPage, setCurrentPage] = useState(1);
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;

   const filters = useAppSelector((state) => state.aircondFilterSlice.boilers);

   const [currentItems, setCurrentItems] = useState<BoilersCollection[]>([]);
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [brands, currentPage]);
   useEffect(() => {
      setCurrentPage(1);
   }, [brands]);
   function openFilter() {
      setMobileFilterOpen(true);
   }

   return (
      <section className={styles.aircond__grid}>
         <Sidebar dispatchers={[brandFilterBoilers]} isMobile={false} filters={[filters.brand]} filterFields={filterFields} />
         <div className={styles.aircond__mobileFilter}>
            <button onClick={openFilter}>Фильтры</button>
         </div>
         {isMobileFilterOpen && (
            <MenuModalWindow btnText="Найти" toggleWindow={setMobileFilterOpen}>
               <Sidebar dispatchers={[brandFilterBoilers]} isMobile={false} filters={[filters.brand]} filterFields={filterFields} />
            </MenuModalWindow>
         )}
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>{title}</h2>
            <ul className={styles.aircond__list}>
               {currentItems
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
                                    Производительность макс./мин. <span>{el.performance}</span>
                                 </div>
                              </div>
                           </div>
                        </Item2>
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
