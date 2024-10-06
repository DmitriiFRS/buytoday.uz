"use client";

import { parseAsArrayOf, parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useEffect, useState } from "react";

const FilterContext = createContext<{
   brands: string[] | null;
   setBrands: (brand: string[]) => void;
   btu: string[] | null;
   setBtu: (btu: string[]) => void;
   wifi: string[] | null;
   setWifi: (wifi: string[]) => void;
   page: number | null;
   setPage: (page: number) => void;
}>({
   brands: [],
   setBrands: () => {},
   btu: [],
   setBtu: () => {},
   wifi: [],
   setWifi: () => {},
   page: null,
   setPage: () => {},
});

export const FilterContextProvider = ({ children }: PropsWithChildren<{}>) => {
   const [brands, setBrands] = useQueryState("brands", parseAsArrayOf(parseAsString));
   const [btu, setBtu] = useQueryState("btu", parseAsArrayOf(parseAsString));
   const [wifi, setWifi] = useQueryState("wifi", parseAsArrayOf(parseAsString));
   const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

   return (
      <FilterContext.Provider value={{ brands, setBrands, btu, setBtu, wifi, setWifi, page, setPage }}>
         <div>{children}</div>
      </FilterContext.Provider>
   );
};

export const useFilterContext = () => {
   return useContext(FilterContext);
};
