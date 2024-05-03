"use client";

import styles from "../AirConditioners.module.scss";
import FilterBlock from "./FilterBlock";

const brands = {
   title: "Бренды",
   list: ["Midea", "Welkin"],
   id: ["mideaSearch", "welkinSearch"],
};

function Sidebar() {
   return (
      <aside className={`${styles.aircond__aside} ${styles.sidebar}`}>
         <FilterBlock content={brands} />
      </aside>
   );
}
export default Sidebar;
