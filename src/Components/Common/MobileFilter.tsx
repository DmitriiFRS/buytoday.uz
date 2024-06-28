"use client";

import { useState } from "react";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import MenuModalWindow from "../Utilities/MenuModalWindow";
import Sidebar, { FilterFields } from "./Filters/Sidebar";
import { openFilter } from "@/Functions/utilsFunctions";

type Props = {
   url: string;
   filterFields: FilterFields[];
};

function MobileFilter({ url, filterFields }: Props) {
   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);

   return (
      <>
         <div className={styles.aircond__mobileFilter}>
            <button onClick={() => openFilter(setMobileFilterOpen)}>Фильтры</button>
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
