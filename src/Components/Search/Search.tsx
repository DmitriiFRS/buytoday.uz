"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function Search({ data }: any) {
   const searchParams = useSearchParams();
   const value = searchParams.get("value");
   useEffect(() => {
      console.log(data);
   }, []);
   return (
      <div>
         {data.newItems
            .filter((el: any) => {
               return el;
            })
            .map((el2: any, index: number) => {
               return (
                  <li key={index}>
                     {el2.name} {el2.model}
                  </li>
               );
            })}
      </div>
   );
}
export default Search;
