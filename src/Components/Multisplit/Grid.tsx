import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Item from "./InnerBlock/Item";
import Sidebar from "../AirConditioners/Sidebar/Sidebar";
import { MultiInnerMain } from "@/app/catalog/multisplit-inner/page";

const filterFields = [
   {
      title: "Бренды",
      list: ["Midea", "Welkin"],
      id: ["Midea", "Welkin"],
   },
   {
      title: "Мощность",
      list: ["7000 Btu/h", "9000 Btu/h", "12000 Btu/h", "18000 Btu/h", "24000 Btu/h"],
      id: ["7000", "9000", "12000", "18000", "24000"],
   },
   {
      title: "Управление по Wi-Fi",
      list: ["Да", "Нет"],
      id: ["includeWifi", "notIncludeWifi"],
   },
];

function Grid({ items, currencyVal }: { items: MultiInnerMain[]; currencyVal: number }) {
   return (
      <section className={styles.aircond__grid}>
         <Sidebar filterFields={filterFields} />
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>Мульти-сплит системы</h2>
            <ul className={styles.aircond__list}>
               {items.map((el, index) => {
                  return <Item key={index} el={el} currencyVal={currencyVal} />;
               })}
            </ul>
         </div>
      </section>
   );
}
export default Grid;
