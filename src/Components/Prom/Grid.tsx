import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Item from "./Item";
import { Fancoils } from "../Catalog/Fancoils/Fancoils.data";

function Grid({ items, title, type, uri }: { items: Fancoils; title: string; type: string; uri: string }) {
   return (
      <section className={styles.aircond__body}>
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>{title}</h2>
            <ul className={styles.aircond__list2}>
               {items.map((el, index) => {
                  if (el.type === type) return <Item key={index} el={el} title={title} uri={uri} />;
               })}
            </ul>
         </div>
      </section>
   );
}
export default Grid;
