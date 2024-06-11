"use client";

import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import FilterBlock from "../../Common/Filtration/FilterBlock";
import { brandFilterFridge, colorFilterFridge } from "@/Redux/Slices/AircodnFilter.slice";

type FilterFields = {
   title: string;
   list: string[];
   id: string[];
   filterVal: string[];
};

type Filters = {
   brand: boolean[];
   color: boolean[];
};

type Props = {
   isMobile: boolean;
   filters: Filters;
   filterFields: FilterFields[];
};

function Sidebar({ isMobile, filters, filterFields }: Props) {
   return (
      <div className={`${styles.aircond__aside} ${isMobile ? styles.aircond__aside__mobile : ""}`}>
         <FilterBlock content={filterFields[0]} dispatcher={brandFilterFridge} filters={filters.brand} />
         <FilterBlock content={filterFields[1]} dispatcher={colorFilterFridge} filters={filters.color} />
      </div>
   );
}
export default Sidebar;
