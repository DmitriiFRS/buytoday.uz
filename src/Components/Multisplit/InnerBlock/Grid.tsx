import Sidebar from "./Sidebar";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import Pagination from "@/Components/Common/Pagination";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { MultiInnerDataModel } from "@/app/catalog/multisplit-inner/page";
import { useEffect, useState } from "react";
import ItemModel from "./ItemModel";
import MenuModalWindow from "@/Components/Utilities/MenuModalWindow";

const filterFields = [
   {
      title: "Бренды",
      list: ["Midea", "Welkin"],
      filterVal: ["Midea", "Welkin"],
      id: ["Midea/1", "Welkin/1"],
   },
   {
      title: "Мощность",
      list: ["7000 Btu/h", "9000 Btu/h", "12000 Btu/h", "18000 Btu/h", "24000 Btu/h"],
      filterVal: ["7000", "9000", "12000", "18000", "24000"],
      id: ["7000/1", "9000/1", "12000/1", "18000/1", "24000/1"],
   },
];

function Grid({ items, currencyVal }: { items: MultiInnerDataModel[]; currencyVal: number }) {
   const itemsPerPage = 10;
   const [currentPage, setCurrentPage] = useState(1);
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;

   const filters = useAppSelector((state) => state.aircondFilterSlice.multi);
   const [currentItems, setCurrentItems] = useState<MultiInnerDataModel[]>([]);
   const [totalItems, setTotalItems] = useState<number>(0);
   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
   const [brands, setBrands] = useState<string[]>([]);
   const [btu, setBtu] = useState<string[]>([]);

   function filtration() {
      console.log(items);
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
      setCurrentItems(filterItems.sort((a, b) => Number(a.coolingPowerKw) - Number(b.coolingPowerKw)).slice(firstItemIndex, lastItemIndex));
      setTotalItems(filterItems.length);
   }

   useEffect(() => {
      let brandTemp: string[] = [];
      let powerTemp: string[] = [];
      if (filters.brand.some((el) => el)) {
         filters.brand.forEach((el, idx) => {
            if (el) brandTemp.push(filterFields[0].filterVal[idx]);
         });
         setBrands(brandTemp);
      } else {
         setBrands([]);
      }
      if (filters.power.some((el) => el)) {
         filters.power.forEach((el, idx) => {
            if (el) powerTemp.push(filterFields[1].filterVal[idx]);
         });
         setBtu(powerTemp);
      } else {
         setBtu([]);
      }
   }, [filters]);

   useEffect(() => {
      filtration();
   }, [brands, btu, currentPage]);
   useEffect(() => {
      setCurrentPage(1);
   }, [brands, btu]);
   function openFilter() {
      setMobileFilterOpen(true);
   }

   return (
      <section className={styles.aircond__grid}>
         <Sidebar filters={filters} filterFields={filterFields} />
         <div className={styles.aircond__mobileFilter}>
            <button onClick={openFilter}>Фильтры</button>
         </div>
         {isMobileFilterOpen && (
            <MenuModalWindow btnText="Найти" toggleWindow={setMobileFilterOpen}>
               <Sidebar filters={filters} filterFields={filterFields} />
            </MenuModalWindow>
         )}
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>Настенные сплит-системы</h2>
            <ul className={styles.aircond__list}>
               {currentItems
                  .sort((a, b) => Number(a.coolingPowerKw) - Number(b.coolingPowerKw))
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
