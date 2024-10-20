"use client";

import { parseAsArrayOf, parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { PropsWithChildren, createContext, useContext } from "react";

const FilterContext = createContext<{
   brands: string[] | null;
   setBrands: (brand: string[]) => void;
   btu: string[] | null;
   setBtu: (btu: string[]) => void;
   wifi: string[] | null;
   setWifi: (wifi: string[]) => void;
   compressor: string[] | null;
   setCompressor: (compressor: string[]) => void;
   colors: string[] | null;
   setColors: (colors: string[]) => void;
   fridgeTypes: string[] | null;
   setFridgeTypes: (fridgeTypes: string[]) => void;
   dries: string[] | null;
   setDries: (dries: string[]) => void;
   performance: string[] | null;
   setPerformance: (performance: string[]) => void;
   noFrost: string[] | null;
   setNoFrost: (noFrost: string[]) => void;
   airPurifierTypes: string[] | null;
   setAirPurifierTypes: (airPurifierTypes: string[]) => void;
   page: number | null;
   setPage: (page: number | null) => void;
}>({
   brands: [],
   setBrands: () => {},
   btu: [],
   setBtu: () => {},
   wifi: [],
   setWifi: () => {},
   compressor: [],
   setCompressor: () => {},
   colors: [],
   setColors: () => {},
   fridgeTypes: [],
   setFridgeTypes: () => {},
   dries: [],
   setDries: () => {},
   performance: [],
   setPerformance: () => {},
   noFrost: [],
   setNoFrost: () => {},
   airPurifierTypes: [],
   setAirPurifierTypes: () => {},
   page: null,
   setPage: () => {},
});

export const FilterContextProvider = ({ children }: PropsWithChildren<{}>) => {
   const [brands, setBrands] = useQueryState("brands", parseAsArrayOf(parseAsString));
   const [btu, setBtu] = useQueryState("btu", parseAsArrayOf(parseAsString));
   const [wifi, setWifi] = useQueryState("wifi", parseAsArrayOf(parseAsString));
   const [compressor, setCompressor] = useQueryState("compressor", parseAsArrayOf(parseAsString));
   const [colors, setColors] = useQueryState("color", parseAsArrayOf(parseAsString));
   const [fridgeTypes, setFridgeTypes] = useQueryState("fridgeType", parseAsArrayOf(parseAsString));
   const [dries, setDries] = useQueryState("dry", parseAsArrayOf(parseAsString));
   const [performance, setPerformance] = useQueryState("performance", parseAsArrayOf(parseAsString));
   const [noFrost, setNoFrost] = useQueryState("noFrost", parseAsArrayOf(parseAsString));
   const [airPurifierTypes, setAirPurifierTypes] = useQueryState("airPurifierType", parseAsArrayOf(parseAsString));
   //
   const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

   return (
      <FilterContext.Provider
         value={{
            brands,
            setBrands,
            btu,
            setBtu,
            wifi,
            setWifi,
            compressor,
            setCompressor,
            airPurifierTypes,
            setAirPurifierTypes,
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
            page,
            setPage,
         }}
      >
         <div>{children}</div>
      </FilterContext.Provider>
   );
};

export const useFilterContext = () => {
   return useContext(FilterContext);
};
