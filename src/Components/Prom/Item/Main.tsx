import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Image from "next/image";
import { Fancoils } from "../../Catalog/Fancoils/Fancoils.data";
import Params from "./Params";
import ModelList from "./ModelList";
import PromOrder from "../PromOrder";

type Props = {
   outerItems: Fancoils;
   params: {
      item: string;
   };
};

function Main({ outerItems, params }: Props) {
   return (
      <>
         {outerItems.map((el, index) => {
            if (el.fancoilModels.find((item) => el.url + "_" + item.model.replace(/\s|\//g, "-").toLowerCase() === params.item)) {
               el.fancoilModels.sort((a, b) => +a.coolingPower - +b.coolingPower);
            }
            return (
               <section key={index} className={styles.item}>
                  {el.fancoilModels.map((el2, index2) => {
                     if (el2.model.replace(/\s|\//g, "-").toLowerCase() === params.item.split("_")[1])
                        return (
                           <div key={index2} className={styles.item__grid}>
                              <div className={styles.item__imges}>
                                 <div className={styles.item__imgBody}>
                                    <Image src={el.imges[0]} alt={el.name} fill style={{ objectFit: "contain" }} />
                                 </div>
                              </div>
                              <div className={styles.item__title}>
                                 <h2>
                                    {el.name} / {el2.model}
                                 </h2>
                              </div>
                              <div className={styles.item__middle}>
                                 <h4 className={`${styles.item__middle__title} ${styles.item__h4title}`}>Все модели {el.name}</h4>
                                 <ModelList el={el} index2={index2} />
                                 <div className={styles.item__mainParams}>
                                    <h4 className={`${styles.item__mainParams__title} ${styles.item__h4title}`}>Основные характеристики</h4>
                                    <ul className={styles.item__mainParams__list}>
                                       <li className={styles.item__mainParams__elem}>
                                          <div className={styles.item__mainParams__elemTitle}>Бренд</div>
                                          <span></span>
                                          <div className={styles.item__mainParams__elemParam}>{el.company}</div>
                                       </li>
                                    </ul>
                                    <p className={styles.item__description}>{el.description}</p>
                                 </div>
                              </div>
                              <div className={styles.item__prices}>
                                 <PromOrder />
                                 <div className={styles.item__delivery}>Бесплатная доставка по Ташкенту</div>
                              </div>
                              <section className={styles.item__params}>
                                 <h3>Все характеристики</h3>
                                 <Params el={el} elInner={el2} />
                              </section>
                           </div>
                        );
                  })}
               </section>
            );
         })}
      </>
   );
}
export default Main;
