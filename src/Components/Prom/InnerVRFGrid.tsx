import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import Item from "./Item";
import { VRFInner } from "../Catalog/VrfInner/VrfInner.data";

function FancoilsGrid({ items, title, uri }: { items: VRFInner; title: string; uri: string }) {
   return (
      <section className={styles.aircond__body}>
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>{title}</h2>
            <ul className={styles.aircond__list2}>
               {items.map((el, index) => {
                  return <Item key={index} el={el} title={title} uri={uri} model={el.vrfInnerModels[0].model.replace(/\s|\//g, "-").toLowerCase()} />;
               })}
            </ul>
         </div>
      </section>
   );
}
export default FancoilsGrid;
