"use client";

function Search() {
   return <div></div>;
}
export default Search;

/*
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "./Header.module.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function Search() {
   const router = useRouter();
   const searchParams = useSearchParams();
   const newUrlParams = new URLSearchParams(searchParams.toString());
   const [value, setValue] = useState("");
   function searchItems() {
      newUrlParams.set("value", value);
      router.push(`/search?${newUrlParams.toString()}`);
   }
   return (
      <div className={styles.header__search}>
         <div className={styles.header__searchBody}>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Поиск, пока неактивен" />
            <FaSearch onClick={searchItems} className={styles.header__icon} />
         </div>
      </div>
   );
}
export default Search;
*/
