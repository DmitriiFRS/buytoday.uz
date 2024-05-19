import { MultiOuter } from "@/Data/multisplits.data";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Image from "next/image";
import Params from "./Params";

function MainOuter({ outerItems, params, dollarValue }: { outerItems: MultiOuter; params: { item: string }; dollarValue: number }) {
   return (
      <>
         {outerItems.map((el, index) => {
            if (el.url.replace(/\s|\//g, "-").toLowerCase() === params.item.replace(/\s|\//g, "-").toLowerCase()) {
               return (
                  <section key={index} className={styles.item}>
                     <div className={styles.item__grid}>
                        <div className={styles.item__imges}>
                           <div className={styles.item__imgBody}>
                              <Image src={el.img} alt={el.name} fill style={{ objectFit: "contain" }} />
                           </div>
                        </div>
                        <div className={styles.item__title}>
                           <h2>{el.name}</h2>
                        </div>
                        <div className={styles.item__middle}>
                           <div className={styles.item__mainParams}>
                              <h4 className={`${styles.item__mainParams__title} ${styles.item__h4title}`}>Основные характеристики</h4>
                              <ul className={styles.item__mainParams__list}>
                                 <li className={styles.item__mainParams__elem}>
                                    <div className={styles.item__mainParams__elemTitle}>Бренд</div>
                                    <span></span>
                                    <div className={styles.item__mainParams__elemParam}>{el.params.brand}</div>
                                 </li>
                                 <li className={styles.item__mainParams__elem}>
                                    <div className={styles.item__mainParams__elemTitle}>Инверторный</div>
                                    <span></span>
                                    <div className={styles.item__mainParams__elemParam}>{el.params.isInverter ? "Да" : "Нет"}</div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className={styles.item__prices}>
                           <div className={styles.item__price}>
                              {(el.price * dollarValue).toLocaleString("en-US")} <span>UZS</span>
                           </div>
                           <button className={styles.item__buy}>Купить</button>
                           <div className={styles.item__delivery}>Бесплатная доставка по Ташкенту</div>
                        </div>
                        <section className={styles.item__params}>
                           <h3>Все характеристики</h3>
                           <Params el={el} />
                        </section>
                     </div>
                     <div style={{ display: "flex", gap: "30px" }} key={index}></div>
                  </section>
               );
            }
         })}
      </>
   );
}
export default MainOuter;
//<Price el2={el2} dollarValue={dollarValue} />
