import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import { Chillers } from "../Catalog/Chillers/Chillers.data";
import Item from "./Item";

function ChillersGrid({ items, title, uri }: { items: Chillers; title: string; uri: string }) {
     return (
          <section className={styles.aircond__body}>
               <div className={styles.aircond__main}>
                    <h2 className={styles.aircond__title}>{title}</h2>
                    <ul className={styles.aircond__list2}>
                         {items.map((el, index) => {
                              return <Item key={index} el={el} title={title} uri={uri} model={el.models[0].model.replace(/\s|\//g, "-").toLowerCase()} />;
                         })}
                    </ul>
               </div>
          </section>
     );
}
export default ChillersGrid;
