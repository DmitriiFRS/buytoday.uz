import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Item from "./Item";
import { VRF } from "../Catalog/VrfOuter/VrfOuter.data";

function FancoilsGrid({ items, title, uri }: { items: VRF; title: string; uri: string }) {
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
export default FancoilsGrid;
