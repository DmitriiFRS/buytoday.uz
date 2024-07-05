"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "./Header.module.scss";
import { FaSearch } from "react-icons/fa";
import { ChangeEvent, useState } from "react";

function Search() {
   const router = useRouter();
   const [value, setValue] = useState("");

   function searchItems() {
      let validateValue = value.replace(/\s/g, "_");
      router.push(`/search?value=${validateValue}`);
   }
   return (
      <div className={styles.header__search}>
         <div className={styles.header__searchBody}>
            <input value={value} onInput={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} type="text" placeholder="Поиск..." />
            <FaSearch onClick={searchItems} className={styles.header__icon} />
         </div>
      </div>
   );
}
export default Search;

/*

*/
