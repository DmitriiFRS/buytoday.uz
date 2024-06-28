/* eslint-disable react-hooks/exhaustive-deps */

import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import ItemModel from "./ItemModel";
import { AircondDataModel } from "@/app/catalog/air-conditioners/page";
import Pagination from "../../Common/Pagination";
import NotFound from "@/Components/Common/Filtration/NotFound";
import Sidebar from "@/Components/Common/Filters/Sidebar";
import MobileFilter from "@/Components/Common/MobileFilter";

const filterFields = [
   {
      title: "Бренды",
      titleVal: "Brands",
      list: ["Midea", "Welkin"],
      filterVal: ["Midea", "Welkin"],
      id: ["Midea", "Welkin"],
   },
   {
      title: "Мощность",
      titleVal: "Power",
      list: ["7000 Btu/h до 25м²", "9000 Btu/h до 30м²", "12000 Btu/h до 40м²", "18000 Btu/h до 60м²", "24000 Btu/h до 75м²"],
      filterVal: ["7000", "9000", "12000", "18000", "24000"],
      id: ["7000", "9000", "12000", "18000", "24000"],
   },
   {
      title: "Управление по Wi-Fi",
      titleVal: "Wifi",
      list: ["Да", "Нет"],
      filterVal: ["yes", "no"],
      id: ["includeWifi", "notIncludeWifi"],
   },
];

function Grid({
   items,
   currencyVal,
   url,
   pagination,
}: {
   items: AircondDataModel[];
   currencyVal: number;
   url: string;
   pagination: { page: number; totalPages: number };
}) {
   // -------------------------------
   return (
      <section className={styles.aircond__grid}>
         <Sidebar isMobile={false} url={url} filterFields={filterFields} />
         <MobileFilter url={url} filterFields={filterFields} />
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>Настенные сплит-системы</h2>
            <ul className={styles.aircond__list}>
               {items.length > 0 ? (
                  items
                     .sort((a, b) => Number(a.coolingPowerBtu) - Number(b.coolingPowerBtu))
                     .map((item, index) => {
                        return (
                           <div key={index}>
                              <ItemModel key={index} el={item} currencyVal={currencyVal} />
                           </div>
                        );
                     })
               ) : (
                  <NotFound />
               )}
            </ul>
            {<Pagination pagination={pagination} url={url} />}
         </div>
      </section>
   );
}
export default Grid;
