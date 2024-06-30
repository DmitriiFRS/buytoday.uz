import styles from "../../../Aircond&SemiInd/AircondSemi.module.scss";
import { MultiInnerDataModel } from "@/app/catalog/multisplit-inner/page";
import Sidebar from "@/Components/Common/Filters/Sidebar";
import NotFound from "@/Components/Common/Filtration/NotFound";
import MobileFilter from "@/Components/Common/MobileFilter";
import { FilterFields } from "@/Types/Common.type";
import ItemModel from "./ItemModel";
import PaginationController from "@/Components/Common/PaginationController";

type Props = {
   title: string;
   items: MultiInnerDataModel[];
   currencyVal: number;
   url: string;
   pagination: { page: number; totalPages: number };
   filterFields: FilterFields[];
};

function Grid({ title, items, currencyVal, url, pagination, filterFields }: Props) {
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
                                 <h5 className={styles.aircond__item__title}>Мульти-сплит системы</h5>
                                 <h3 className={styles.aircond__item__name}>
                                    {item.name} {item.filterBtu} BTU
                                 </h3>
                                 <div className={styles.aircond__item__params}>
                                    <div className={styles.aircond__item__param}>
                                       Бренд: <span>{item.company}</span>
                                    </div>
                                    <div className={styles.aircond__item__param}>
                                       Инверторный: <span>{item.isInverter ? "Да" : "Нет"}</span>
                                    </div>
                                    <div className={styles.aircond__item__param}>
                                       Мощность охлаждения: <span>{item.coolingPowerKW} kW</span>
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
