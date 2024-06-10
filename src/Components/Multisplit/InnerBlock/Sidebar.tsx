/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import FilterBlock from "@/Components/Common/Filtration/FilterBlock";
import { brandFilterMulti, powerFilterMulti } from "@/Redux/Slices/AircodnFilter.slice";

type FilterFields = {
   title: string;
   list: string[];
   id: string[];
   filterVal: string[];
};

type Filters = {
   brand: boolean[];
   power: boolean[];
   wifi?: boolean[];
};

type Props = {
   isMobile: boolean;
   filters: Filters;
   filterFields: FilterFields[];
};

function Sidebar({ isMobile, filters, filterFields }: Props) {
   return (
      <div className={`${styles.aircond__aside} ${isMobile ? styles.aircond__aside__mobile : ""}`}>
         <FilterBlock content={filterFields[0]} dispatcher={brandFilterMulti} filters={filters.brand} />
         <FilterBlock content={filterFields[1]} dispatcher={powerFilterMulti} filters={filters.power} />
      </div>
   );
}
export default Sidebar;
