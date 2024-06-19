/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import FilterBlock from "./FilterBlock";

type FilterFields = {
   title: string;
   list: string[];
   id: string[];
   filterVal: string[] | boolean[];
};

type Props = {
   dispatchers: Function[];
   isMobile: boolean;
   filters: Array<boolean[]>;
   filterFields: FilterFields[];
};

function Sidebar({ dispatchers, isMobile, filters, filterFields }: Props) {
   return (
      <div className={`${styles.aircond__aside} ${isMobile ? styles.aircond__aside__mobile : ""}`}>
         {filterFields.map((el, index) => {
            return <FilterBlock key={index} content={el} dispatcher={dispatchers[index]} filters={filters[index]} />;
         })}
      </div>
   );
}
export default Sidebar;
