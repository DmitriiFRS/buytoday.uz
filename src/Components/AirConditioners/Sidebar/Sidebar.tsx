"use client";

import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import FilterBlock from "./FilterBlock";

const brands = {
   title: "Бренды",
   list: ["Midea", "Welkin"],
   id: ["mideaSearch", "welkinSearch"],
};
const Btu = {
   title: "Мощность",
   list: ["7000 Btu/h / до 20кв2", "9000 Btu/h / до 30кв2", "12000 Btu/h / до 40кв2", "18000 Btu/h", "24000 Btu/h"],
   id: ["id7000", "id9000", "id12000", "id18000", "id24000"],
};
const price = {
   title: "Цена",
   list: ["От 4 000 000 до 6 000 000", "От 6 000 000 до 8 000 000", "От 8 000 000 до 10 000 000"],
   id: ["price1", "price2", "price3"],
};
const wifi = {
   title: "Управление по Wi-Fi",
   list: ["Да", "Нет"],
   id: ["includeWifi", "notIncludeWifi"],
};

function Sidebar() {
   return (
      <aside className={`${styles.aircond__aside} ${styles.sidebar}`}>
         <FilterBlock content={brands} />
         <FilterBlock content={Btu} />
         <FilterBlock content={wifi} />
      </aside>
   );
}
export default Sidebar;
