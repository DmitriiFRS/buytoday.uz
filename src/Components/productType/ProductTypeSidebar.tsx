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

function ProductTypeSidebar({ isMobile, productType }: Props) {
   const {
      brands,
      setBrands,
      wifi,
      setWifi,
      btu,
      setBtu,
      compressor,
      setCompressor,
      colors,
      setColors,
      fridgeTypes,
      setFridgeTypes,
      dries,
      setDries,
      performance,
      setPerformance,
      noFrost,
      setNoFrost,
      airPurifierTypes,
      setAirPurifierTypes,
   } = useFilterContext();
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
            {filters[0].attributes.compressor_types.data.length > 0 && (
               <ProductTypeFilterBlock
                  title={"Тип компрессора"}
                  content={filters[0].attributes.compressor_types.data}
                  values={compressor}
                  setValue={setCompressor as () => void}
               />
            )}
            {filters[0].attributes.colors.data.length > 0 && (
               <ProductTypeFilterBlock title={"Цвет"} content={filters[0].attributes.colors.data} values={colors} setValue={setColors as () => void} />
            )}
            {filters[0].attributes.fridgeTypes.data.length > 0 && (
               <ProductTypeFilterBlock
                  title={"Тип"}
                  content={filters[0].attributes.fridgeTypes.data}
                  values={fridgeTypes}
                  setValue={setFridgeTypes as () => void}
               />
            )}
            {filters[0].attributes.dries.data.length > 0 && (
               <ProductTypeFilterBlock title={"Сушка"} content={filters[0].attributes.dries.data} values={dries} setValue={setDries as () => void} />
            )}
            {filters[0].attributes.performance.data.length > 0 && (
               <ProductTypeFilterBlock
                  title={"Производительность"}
                  content={filters[0].attributes.performance.data}
                  values={performance}
                  setValue={setPerformance as () => void}
               />
            )}
            {filters[0].attributes.airPurifierTypes.data.length > 0 && (
               <ProductTypeFilterBlock
                  title={"Типы"}
                  content={filters[0].attributes.airPurifierTypes.data}
                  values={airPurifierTypes}
                  setValue={setAirPurifierTypes as () => void}
               />
            )}
            {filters[0].attributes.noFrost.data.length > 0 && (
               <ProductTypeFilterBlock title={"No Frost"} content={filters[0].attributes.noFrost.data} values={noFrost} setValue={setNoFrost as () => void} />
            )}
         </div>
      )
   );
}
export default ProductTypeSidebar;
/*

 */
