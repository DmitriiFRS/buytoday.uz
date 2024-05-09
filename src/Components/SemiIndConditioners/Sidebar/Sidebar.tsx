"use client";

import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import FilterBlock from "./FilterBlock";

const brands = {
   title: "Бренды",
   list: ["Midea", "Welkin"],
   id: ["mideaSearch2", "welkinSearch2"],
};

function Sidebar() {
   return (
      <aside className={`${styles.aircond__aside} ${styles.sidebar}`}>
         <FilterBlock content={brands} />
      </aside>
   );
}
export default Sidebar;
