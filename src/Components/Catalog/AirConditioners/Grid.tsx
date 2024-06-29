import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import ItemModel from "./ItemModel";
import { AircondDataModel, FilterFields } from "@/app/catalog/air-conditioners/page";
import NotFound from "@/Components/Common/Filtration/NotFound";
import Sidebar from "@/Components/Common/Filters/Sidebar";
import MobileFilter from "@/Components/Common/MobileFilter";
import PaginationController from "@/Components/Common/PaginationController";

function Grid({
   title,
   items,
   currencyVal,
   url,
   pagination,
   filterFields,
}: {
   title: string;
   items: AircondDataModel[];
   currencyVal: number;
   url: string;
   pagination: { page: number; totalPages: number };
   filterFields: FilterFields[];
}) {
   // -------------------------------
   return (
      <section className={styles.aircond__grid}>
         <Sidebar isMobile={false} url={url} filterFields={filterFields} />
         <MobileFilter url={url} filterFields={filterFields} />
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>{title}</h2>
            <ul className={styles.aircond__list}>
               {items.length > 0 ? (
                  items.map((item, index) => {
                     return (
                        <div key={index}>
                           <ItemModel key={index} el={item} currencyVal={currencyVal}>
                              <div className={styles.aircond__item__titles}>
                                 <h5 className={styles.aircond__item__title}>Сплит-системы</h5>
                                 <h3 className={styles.aircond__item__name}>
                                    Настенный кондиционер {item.name} {item.coolingPowerBtu} BTU
                                 </h3>
                                 <div className={styles.aircond__item__params}>
                                    <div className={styles.aircond__item__param}>
                                       Инверторный: <span>{item.isInverter ? "Да" : "Нет"}</span>
                                    </div>
                                    <div className={styles.aircond__item__param}>
                                       Компрессор: <span>{item.compressor}</span>
                                    </div>
                                    <div className={styles.aircond__item__param}>
                                       Мощность: <span>{item.coolingPowerBtu} btu/h</span>
                                    </div>
                                 </div>
                              </div>
                           </ItemModel>
                        </div>
                     );
                  })
               ) : (
                  <NotFound />
               )}
            </ul>
            <PaginationController pagination={pagination} url={url} />
         </div>
      </section>
   );
}
export default Grid;
