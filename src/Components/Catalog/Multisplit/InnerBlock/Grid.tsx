import styles from "../../../Aircond&SemiInd/AircondSemi.module.scss";
import Pagination from "@/Components/Common/Pagination";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { MultiInnerDataModel } from "@/app/catalog/multisplit-inner/page";
import { useEffect, useState } from "react";
import MenuModalWindow from "@/Components/Utilities/MenuModalWindow";
import { brandFilterMulti, powerFilterMulti, typeFilterMulti } from "@/Redux/Slices/AircodnFilter.slice";
import Sidebar from "@/Components/Common/Filtration/Sidebar";
import Item from "@/Components/Common/Item";

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
   {
      title: "Тип фена",
      list: ["Настенный", "Кассетный", "Канальный"],
      filterVal: ["Настенный", "Кассетный", "Канальный"],
      id: ["multiwm", "multicas", "multiduct"],
   },
];

function Grid({ items, currencyVal, title, uri }: { items: MultiInnerDataModel[]; currencyVal: number; title: string; uri: string }) {
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
   const [type, setType] = useState<string[]>([]);

   function filtration() {
      let filterItems = items.slice();
      if (brands.length > 0) {
         filterItems = filterItems.filter((brand) => brands.includes(brand.company));
      }
      if (btu.length > 0) {
         filterItems = filterItems.filter((model) => btu.includes(model.filterBtu));
      }
      if (type.length > 0) {
         filterItems = filterItems.filter((model) => type.includes(model.type));
      }
      setCurrentItems(filterItems.sort((a, b) => Number(a.coolingPowerKw) - Number(b.coolingPowerKw)).slice(firstItemIndex, lastItemIndex));
      setTotalItems(filterItems.length);
   }

   useEffect(() => {
      let brandTemp: string[] = [];
      let powerTemp: string[] = [];
      let typeTemp: string[] = [];
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
   }, [brands, btu, currentPage, type]);
   useEffect(() => {
      setCurrentPage(1);
   }, [brands, btu, type]);
   function openFilter() {
      setMobileFilterOpen(true);
   }

   return (
      <section className={styles.aircond__grid}>
         <Sidebar
            dispatchers={[brandFilterMulti, powerFilterMulti, typeFilterMulti]}
            isMobile={false}
            filters={[filters.brand, filters.power, filters.type]}
            filterFields={filterFields}
         />
         <div className={styles.aircond__mobileFilter}>
            <button onClick={openFilter}>Фильтры</button>
         </div>
         {isMobileFilterOpen && (
            <MenuModalWindow btnText="Найти" toggleWindow={setMobileFilterOpen}>
               <Sidebar
                  dispatchers={[brandFilterMulti, powerFilterMulti, typeFilterMulti]}
                  isMobile={false}
                  filters={[filters.brand, filters.power, filters.type]}
                  filterFields={filterFields}
               />
            </MenuModalWindow>
         )}
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>{title}</h2>
            <ul className={styles.aircond__list}>
               {currentItems.map((el, index) => {
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
