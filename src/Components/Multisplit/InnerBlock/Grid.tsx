import Sidebar from "@/Components/AirConditioners/Sidebar/Sidebar";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import Pagination from "@/Components/Common/Pagination";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { MultiInnerDataModel } from "@/app/catalog/multisplit-inner/page";
import { useEffect, useState } from "react";
import MobileFilter from "@/Components/AirConditioners/Sidebar/Mobile/MobileFilter";
import ItemModel from "./ItemModel";

const filterFields = [
   {
      title: "Бренды",
      list: ["Midea", "Welkin"],
      id: ["Midea", "Welkin"],
   },
   {
      title: "Мощность",
      list: ["7000 Btu/h", "9000 Btu/h", "12000 Btu/h", "18000 Btu/h", "24000 Btu/h"],
      id: ["7000", "9000", "12000", "18000", "24000"],
   },
];

function Grid({ items, currencyVal }: { items: MultiInnerDataModel[]; currencyVal: number }) {
   const itemsPerPage = 10;
   const [currentPage, setCurrentPage] = useState(1);
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;

   const filters = useAppSelector((state) => state.aircondFilterSlice);
   const [currentItems, setCurrentItems] = useState<MultiInnerDataModel[]>([]);
   const [totalItems, setTotalItems] = useState<number>(0);
   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
   const [brands, setBrands] = useState<string[]>([]);
   const [btu, setBtu] = useState<string[]>([]);

   function filtration() {
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
      if (filters.aircond.brand.some((el) => el)) {
         filters.aircond.brand.forEach((el, idx) => {
            if (el) brandTemp.push(filterFields[0].id[idx]);
         });
         setBrands(brandTemp);
      } else {
         setBrands([]);
      }
      if (filters.aircond.power.some((el) => el)) {
         filters.aircond.power.forEach((el, idx) => {
            if (el) powerTemp.push(filterFields[1].id[idx]);
         });
         setBtu(powerTemp);
      } else {
         setBtu([]);
      }
   }, [filters]);

   useEffect(() => {
      filtration();
   }, [brands, btu, filters.aircond.wifi, currentPage]);
   useEffect(() => {
      setCurrentPage(1);
   }, [brands, btu, filters.aircond.wifi]);
   function openFilter() {
      setMobileFilterOpen(true);
   }

   return (
      <section className={styles.aircond__grid}>
         <Sidebar filterFields={filterFields} />
         <div className={styles.aircond__mobileFilter}>
            <button onClick={openFilter}>Фильтры</button>
         </div>
         {isMobileFilterOpen && <MobileFilter filterFields={filterFields} setMobileFilterOpen={setMobileFilterOpen} />}
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
