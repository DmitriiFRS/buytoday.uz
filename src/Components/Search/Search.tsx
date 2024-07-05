"use client";

import styles from "./Search.module.scss";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

function Search({ data }: any) {
   const searchParams = useSearchParams();
   const [searchValue, setSearchValue] = useState<string | null>(null);

   useEffect(() => {
      setSearchValue(searchParams.get("value"));
   }, [searchParams]);

   return (
      searchValue && (
         <div className={styles.search}>
            {data.newItems
               .filter((el: any) => {
                  const name = el.name.toLowerCase();
                  if (name.toLowerCase().replace(/\s/g, "_").includes(searchValue.toLowerCase())) {
                     return el;
                  }
               })
               .map((el2: any, index: number) => {
                  return <li key={index}>{el2.name}</li>;
               })}
         </div>
      )
   );
}
export default Search;
//.replace(/\s/g, "_")
