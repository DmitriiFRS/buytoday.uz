"use client";

import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import { useEffect, useState } from "react";
import ProductTypeFilterBlock from "./ProductTypeFilterBlock";
import { AircondFilterList } from "@/Types/AircondFilters.type";
import { getFilters } from "@/fetch/getFilters";
import { useFilterContext } from "@/Context/FilterContext";

type Props = {
   isMobile: boolean;
   productType: string;
};

export type FilterFields = {
   title: string;
   titleVal: string;
   list: string[];
   id: string[];
   filterVal: string[];
};

function ProductTypeSidebar({ isMobile, productType }: Props) {
   const { brands, setBrands, wifi, setWifi, btu, setBtu } = useFilterContext();
   const [isLoading, setIsLoading] = useState(true);
   const [filters, setFilters] = useState<AircondFilterList>([]);
   useEffect(() => {
      async function getData() {
         const response = await getFilters({ uri: productType });
         if (response.error) {
            console.error(response.msg);
            return;
         }
         setFilters(response);
         console.log(response);
      }
      getData();

      setIsLoading(false);
   }, []);

   return (
      filters.length > 0 && (
         <div className={`${styles.aircond__aside} ${isMobile ? styles.aircond__aside__mobile : ""}`}>
            {filters[0].attributes.brands.data.length > 0 && (
               <ProductTypeFilterBlock title={"Бренды"} content={filters[0].attributes.brands.data} values={brands} setValue={setBrands as () => void} />
            )}
            {filters[0].attributes.btuFilters.data.length > 0 && (
               <ProductTypeFilterBlock title={"Мощность"} content={filters[0].attributes.btuFilters.data} values={btu} setValue={setBtu as () => void} />
            )}
            {filters[0].attributes.wifis.data.length > 0 && (
               <ProductTypeFilterBlock
                  title={"Управление по Wi-Fi"}
                  content={filters[0].attributes.wifis.data}
                  values={wifi}
                  setValue={setWifi as () => void}
               />
            )}
         </div>
      )
   );
}
export default ProductTypeSidebar;
/*

 */
