import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Item from "./InnerBlock/Item";
import Sidebar from "../AirConditioners/Sidebar/Sidebar";
import { MultiInnerMain } from "@/app/catalog/multisplit-inner/page";

function Grid({ items, currencyVal }: { items: MultiInnerMain[]; currencyVal: number }) {
   return (
      <section className={styles.aircond__grid}>
         <Sidebar />
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
