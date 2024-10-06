"use client";

import { getFilters } from "@/fetch/getFilters";
import { AircondFilterList } from "@/Types/AircondFilters.type";
import { useEffect, useState } from "react";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import { openFilter } from "@/Functions/utilsFunctions";
import MenuModalWindow from "../Utilities/MenuModalWindow";
import ProductTypeSidebar from "./ProductTypeSidebar";

function MobileFilters({ productType }: { productType: string }) {
   const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
   return (
      <>
         <div className={styles.aircond__mobileFilter}>
            <button onClick={() => openFilter(setMobileFilterOpen)}>Все фильтры</button>
         </div>
         {isMobileFilterOpen && (
            <MenuModalWindow btnText="Найти" toggleWindow={setMobileFilterOpen}>
               <ProductTypeSidebar isMobile={true} productType={productType} />
            </MenuModalWindow>
         )}
      </>
   );
}
export default MobileFilters;
