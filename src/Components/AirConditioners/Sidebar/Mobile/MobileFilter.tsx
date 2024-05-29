import MenuModalWindow from "@/Components/Utilities/MenuModalWindow";
import styles from "./Mobile.module.scss";
import { useAppDispatch, useAppSelector } from "@/Hooks/ReduxHooks";
import { wifiFilter, brandFilter, powerFilter } from "@/Redux/Slices/AircodnFilter.slice";
import { useState, useEffect } from "react";
import FilterBtn from "../FilterBtn";
import FilterBlock from "../FilterBlock";

type Props = {
   isMobileFilterOpen: boolean;
   filtration: Function;
   setMobileFilterOpen: (bool: boolean) => void;
};

const brands = {
   title: "Бренды",
   list: ["Midea", "Welkin"],
   id: ["mideaSearchm", "welkinSearchm"],
};
const Btu = {
   title: "Мощность",
   list: ["7000 Btu/h", "9000 Btu/h", "12000 Btu/h", "18000 Btu/h", "24000 Btu/h"],
   id: ["id7000m", "id9000m", "id12000m", "id18000m", "id24000m"],
};
const price = {
   title: "Цена",
   list: ["От 4 000 000 до 6 000 000", "От 6 000 000 до 8 000 000", "От 8 000 000 до 10 000 000"],
   id: ["price1m", "price2m", "price3m"],
};
const wifi = {
   title: "Управление по Wi-Fi",
   list: ["Да", "Нет"],
   id: ["includeWifim", "notIncludeWifim"],
};

function MobileFilter({ isMobileFilterOpen, setMobileFilterOpen, filtration }: Props) {
   const filters = useAppSelector((state) => state.aircondFilterSlice);
   return (
      <MenuModalWindow toggleWindow={setMobileFilterOpen}>
         <div className={`${styles.aircond__aside} ${styles.sidebar}`}>
            <FilterBlock content={brands} dispatcher={brandFilter} filters={filters.brand} />
            <FilterBlock content={Btu} dispatcher={powerFilter} filters={filters.power} />
            <FilterBlock content={wifi} dispatcher={wifiFilter} filters={filters.wifi} />
         </div>
      </MenuModalWindow>
   );
}
export default MobileFilter;
