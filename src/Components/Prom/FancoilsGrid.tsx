import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Item from "./Item";
import { Fancoils } from "../Catalog/Fancoils/Fancoils.data";

function FancoilsGrid({ items, title, type, uri }: { items: Fancoils; title: string; type?: string; uri: string }) {
   return (
      <section className={styles.aircond__body}>
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>{title}</h2>
            <ul className={styles.aircond__list2}>
               {items.map((el, index) => {
                  if (el.type === type)
                     return <Item key={index} el={el} title={title} uri={uri} model={el.fancoilModels[0].model.replace(/\s|\//g, "-").toLowerCase()} />;
               })}
            </ul>
         </div>
      </section>
   );
}
export default FancoilsGrid;
