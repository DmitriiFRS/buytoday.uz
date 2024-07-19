import styles from "../../../Aircond&SemiInd/AircondSemi.module.scss";
import NotFound from "@/Components/Common/Filters/NotFound";
import { MultiOuterCollection } from "@/app/catalog/multisplit-outer/page";
import { GridProps } from "@/Types/Common.type";
import MobileFilter from "@/Components/Common/MobileFilter";
import ItemModel from "../../../Common/ItemModel";
import Sidebar from "@/Components/Common/Filters/Sidebar";
import PaginationController from "@/Components/Common/PaginationController";

type Props = {
   items: MultiOuterCollection[];
   uri: string;
} & GridProps;
const filterFields = [
   {
      title: "Бренды",
      list: ["Midea"],
      filterVal: ["Midea"],
      id: ["Midea100"],
   },
];

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
                              inPromotion={item.inPromotion}
                              bonus={item.bonus}
                           >
                              <div className={styles.aircond__item__titles}>
                                 <h5 className={styles.aircond__item__title}>Наружные мульти-сплит системы</h5>
                                 <h3 className={styles.aircond__item__name}>{item.name}</h3>
                                 <div className={styles.aircond__item__params}>
                                    <div className={styles.aircond__item__param}>
                                       Бренд: <span>{item.company}</span>
                                    </div>
                                    <div className={styles.aircond__item__param}>
                                       Компрессор: <span>{item.compressor}</span>
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
