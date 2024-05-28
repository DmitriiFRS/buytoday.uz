import MenuModalWindow from "@/Components/Utilities/MenuModalWindow";
import styles from "./Mobile.module.scss";
import { useAppDispatch } from "@/Hooks/ReduxHooks";
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
   id: ["mideaSearch", "welkinSearch"],
};
const Btu = {
   title: "Мощность",
   list: ["7000 Btu/h", "9000 Btu/h", "12000 Btu/h", "18000 Btu/h", "24000 Btu/h"],
   id: ["id7000", "id9000", "id12000", "id18000", "id24000"],
};
const price = {
   title: "Цена",
   list: ["От 4 000 000 до 6 000 000", "От 6 000 000 до 8 000 000", "От 8 000 000 до 10 000 000"],
   id: ["price1", "price2", "price3"],
};
const wifi = {
   title: "Управление по Wi-Fi",
   list: ["Да", "Нет"],
   id: ["includeWifi", "notIncludeWifi"],
};

function MobileFilter({ isMobileFilterOpen, setMobileFilterOpen, filtration }: Props) {
   const dispatch = useAppDispatch();
   const [toggleWifi, setWifi] = useState([false, false]);
   const [toggleBrands, setBrands] = useState([false, false]);
   const [togglePower, setPower] = useState([false, false, false, false, false]);

   useEffect(() => {
      dispatch(wifiFilter(toggleWifi));
   }, [toggleWifi]);
   useEffect(() => {
      dispatch(brandFilter(toggleBrands));
   }, [toggleBrands]);
   useEffect(() => {
      dispatch(powerFilter(togglePower));
   }, [togglePower]);
   return (
      <MenuModalWindow toggleWindow={setMobileFilterOpen}>
         <div className={`${styles.aircond__aside} ${styles.sidebar}`}>
            <FilterBlock content={brands} setState={setBrands} dispatcher={brandFilter} />
            <FilterBlock content={Btu} setState={setPower} dispatcher={powerFilter} />
            <FilterBlock content={wifi} setState={setWifi} dispatcher={wifiFilter} />
            <FilterBtn filtration={filtration} />
         </div>
      </MenuModalWindow>
   );
}
export default MobileFilter;
