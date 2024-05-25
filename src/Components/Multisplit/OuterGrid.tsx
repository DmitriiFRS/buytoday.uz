import { MultiOuter } from "@/Data/multisplits.data";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import ItemOuter from "./ItemOuter";

function OuterGrid({ items }: { items: MultiOuter }) {
   return (
      <section className={styles.aircond__body}>
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>Наружные блоки мульти-сплит систем</h2>
            <ul className={styles.aircond__list2}>
               {items.map((el, index) => {
                  return <ItemOuter key={index} el={el} />;
               })}
            </ul>
         </div>
      </section>
   );
}
export default OuterGrid;
