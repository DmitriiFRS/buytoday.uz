/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import FilterBlock from "./FilterBlock";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { brandFilter, powerFilter, wifiFilter } from "@/Redux/Slices/AircodnFilter.slice";

type FilterFields = {
   title: string;
   list: string[];
   id: string[];
};

type Props = {
   filterFields: FilterFields[];
};

function Sidebar({ filterFields }: Props) {
   const filters = useAppSelector((state) => state.aircondFilterSlice);
   return (
      <aside className={`${styles.aircond__aside} ${styles.sidebar}`}>
         <FilterBlock content={filterFields[0]} dispatcher={brandFilter} filters={filters.aircond.brand} />
         <FilterBlock content={filterFields[1]} dispatcher={powerFilter} filters={filters.aircond.power} />
         {filterFields[2] && <FilterBlock content={filterFields[2]} dispatcher={wifiFilter} filters={filters.aircond.wifi} />}
      </aside>
   );
}
export default Sidebar;
