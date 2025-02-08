import Item from "./Item";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import { Atom } from "@/Data/atomOuter.data";
import { AtomI } from "@/Data/atomInner.data";

type Props = {
     items1: Atom;
     items2: AtomI;
     title: string;
     uri: string;
};

function AtomGrid({ items1, items2, title, uri }: Props) {
     return (
          <section className={styles.aircond__body}>
               <div className={styles.aircond__main}>
                    <h2 className={styles.aircond__title}>{title}</h2>
                    <ul className={styles.aircond__list2}>
                         {items1.map((el, index) => {
                              return <Item key={index} el={el} title={title} uri={uri} model={el.models[0].model.replace(/\s|\//g, "-").toLowerCase()} />;
                         })}
                         {items2.map((el, index) => {
                              return <Item key={index} el={el} title={title} uri={uri} model={el.models[0].model.replace(/\s|\//g, "-").toLowerCase()} />;
                         })}
                    </ul>
               </div>
          </section>
     );
}
export default AtomGrid;
