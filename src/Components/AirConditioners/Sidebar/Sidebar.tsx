/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import FilterBlock from "../../Common/Filtration/FilterBlock";
import { brandFilter, powerFilter, wifiFilter } from "@/Redux/Slices/AircodnFilter.slice";

type FilterFields = {
   title: string;
   list: string[];
   id: string[];
};

type Filters = {
   brand: boolean[];
   power: boolean[];
   wifi?: boolean[];
};

type Props = {
   filters: Filters;
   filterFields: FilterFields[];
};

function Sidebar({ filters, filterFields }: Props) {
   return (
      <div className={`${styles.aircond__aside} ${styles.sidebar}`}>
         <FilterBlock content={filterFields[0]} dispatcher={brandFilter} filters={filters.brand} />
         <FilterBlock content={filterFields[1]} dispatcher={powerFilter} filters={filters.power} />
         {filterFields[2] && <FilterBlock content={filterFields[2]} dispatcher={wifiFilter} filters={filters.wifi as any} />}
      </div>
   );
}
export default Sidebar;
