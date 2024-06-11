"use client";

import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import FilterBlock from "../../Common/Filtration/FilterBlock";
import { brandFilterWash } from "@/Redux/Slices/AircodnFilter.slice";

type FilterFields = {
   title: string;
   list: string[];
   id: string[];
   filterVal: string[];
};

type Filters = {
   brand: boolean[];
};

type Props = {
   isMobile: boolean;
   filters: Filters;
   filterFields: FilterFields[];
};

function Sidebar({ isMobile, filters, filterFields }: Props) {
   return (
      <div className={`${styles.aircond__aside} ${isMobile ? styles.aircond__aside__mobile : ""}`}>
         <FilterBlock content={filterFields[0]} dispatcher={brandFilterWash} filters={filters.brand} />
      </div>
   );
}
export default Sidebar;
