import { AircondDataInner } from "@/app/catalog/air-conditioners/page";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Item from "./Item";
import Sidebar from "../AirConditioners/Sidebar/Sidebar";
import { MultiOuter } from "@/Data/multisplits.data";
import ItemOuter from "./ItemOuter";

function Grid({ innerItems, outerItems, currencyVal }: { innerItems: AircondDataInner[]; outerItems: MultiOuter; currencyVal: number }) {
   return (
      <section className={styles.aircond__grid}>
         <Sidebar />
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>Мульти-сплит системы</h2>
            <ul className={styles.aircond__list}>
               {innerItems.map((el, index) => {
                  return <Item key={index} el={el} currencyVal={currencyVal} />;
               })}
               {outerItems.map((el, index) => {
                  return <ItemOuter key={index} el={el} currencyVal={currencyVal} />;
               })}
            </ul>
         </div>
      </section>
   );
}
export default Grid;
