/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import FilterBlock from "./FilterBlock";
import { useAppDispatch } from "@/Hooks/ReduxHooks";
import { brandFilter, powerFilter, wifiFilter } from "@/Redux/Slices/AircodnFilter.slice";
import FilterBtn from "./FilterBtn";

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

function Sidebar({ filtration }: { filtration?: Function }) {
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
      <aside className={`${styles.aircond__aside} ${styles.sidebar}`}>
         <FilterBlock content={brands} setState={setBrands} dispatcher={brandFilter} />
         <FilterBlock content={Btu} setState={setPower} dispatcher={powerFilter} />
         <FilterBlock content={wifi} setState={setWifi} dispatcher={wifiFilter} />
         <FilterBtn filtration={filtration} />
      </aside>
   );
}
export default Sidebar;
