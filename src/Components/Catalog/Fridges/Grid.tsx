import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import { FridgeDataInner } from "@/app/catalog/fridges/page";
import NotFound from "@/Components/Common/Filters/NotFound";
import { GridProps } from "@/Types/Common.type";
import Sidebar from "@/Components/Common/Filters/Sidebar";
import MobileFilter from "@/Components/Common/MobileFilter";
import ItemModel from "@/Components/Common/ItemModel";
import PaginationController from "@/Components/Common/PaginationController";

type Props = {
   items: FridgeDataInner[];
   uri: string;
} & GridProps;

function Grid({ title, items, currencyVal, url, pagination, filterFields, uri }: Props) {
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
                           <ItemModel
                              key={index}
                              uri={uri}
                              model={item.model}
                              img={item.image[0].fields.file.url}
                              name={item.name}
                              price={item.price}
                              currencyVal={currencyVal}
                              inStock={item.inStock}
                           >
                              <div className={styles.aircond__item__titles}>
                                 <h5 className={styles.aircond__item__title}>Холодильники</h5>
                                 <h3 className={styles.aircond__item__name}>{item.name}</h3>
                                 <div className={styles.aircond__item__params}>
                                    <div className={styles.aircond__item__param}>
                                       Бренд: <span>{item.company}</span>
                                    </div>
                                    <div className={styles.aircond__item__param}>
                                       No frost: <span>{item.noFrost ? "Да" : "Нет"}</span>
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
