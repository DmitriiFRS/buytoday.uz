import { AircondDataInner } from "@/app/catalog/air-conditioners/page";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Item from "./Item";
import Sidebar from "./Sidebar/Sidebar";

function Grid({ items, currencyVal }: { items: AircondDataInner[]; currencyVal: number }) {
   return (
      <section className={styles.aircond__grid}>
         <Sidebar />
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>Настенные сплит-системы</h2>
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