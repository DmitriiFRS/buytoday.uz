"use client";

import { useState } from "react";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import MenuModalWindow from "../Utilities/MenuModalWindow";
import Sidebar, { FilterFields } from "./Filters/Sidebar";
import { openFilter } from "@/Functions/utilsFunctions";

type Props = {
   url: string;
   filterFields: FilterFields[];
   visibleFilterFields?: FilterFields[];
};

function MobileFilter({ url, filterFields, visibleFilterFields }: Props) {
   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);

   return (
      <>
         {visibleFilterFields && <Sidebar isMobile={true} url={url} filterFields={visibleFilterFields} />}
         <div className={styles.aircond__mobileFilter}>
            <button onClick={() => openFilter(setMobileFilterOpen)}>Все фильтры</button>
         </div>
         {isMobileFilterOpen && (
            <MenuModalWindow btnText="Найти" toggleWindow={setMobileFilterOpen}>
               <Sidebar isMobile={true} url={url} filterFields={filterFields} />
            </MenuModalWindow>
         )}
      </>
   );
}
export default MobileFilter;
