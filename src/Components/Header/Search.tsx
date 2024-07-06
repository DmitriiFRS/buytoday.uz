"use client";

import { useRouter } from "next/navigation";
import styles from "./Header.module.scss";
import { FaSearch } from "react-icons/fa";
import { ChangeEvent, useState } from "react";

function Search() {
   const router = useRouter();
   const [value, setValue] = useState("");

   function handleSearch() {
      let validateValue = value.replace(/\s/g, "_");
      router.push(`/search?value=${validateValue}`);
   }
   function handleKeyDown(e: KeyboardEvent) {
      console.log("key");
      if (e.key === "Enter") {
         console.log(e.key);
         handleSearch();
      }
   }
   return (
      <div className={styles.header__search}>
         <div className={styles.header__searchBody}>
            <input
               onKeyDown={(e: any) => handleKeyDown(e)}
               value={value}
               onInput={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
               type="text"
               placeholder="Поиск..."
            />
            <FaSearch onClick={handleSearch} className={styles.header__icon} />
         </div>
      </div>
   );
}
export default Search;

/*

*/
