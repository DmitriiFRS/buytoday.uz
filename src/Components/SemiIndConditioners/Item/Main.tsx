import { SemiIndDataInner } from "@/app/catalog/col-conditioners/[item]/page";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Image from "next/image";
import Link from "next/link";
import Price from "./Price";
import Params from "./Params";

type Props = {
   outerItems: SemiIndDataInner[];
   params: {
      item: string;
   };
   dollarValue: number;
};

function Main({ outerItems, params, dollarValue }: Props) {
   return (
      <>
         {outerItems.map((el, index) => {
            if (el.semiCondModelCollection.items.find((item) => el.url + "_" + item.model.replace(/\s|\//g, "-").toLowerCase() === params.item)) {
               el.semiCondModelCollection.items.sort((a, b) => a.price - b.price);
            }
            return (
               <section key={index} className={styles.item}>
                  {el.semiCondModelCollection.items.map((el2, index2) => {
                     if (el2.model.replace(/\s|\//g, "-").toLowerCase() === params.item.split("_")[1])
                        return (
                           <div key={index2} className={styles.item__grid}>
                              <div className={styles.item__imges}>
                                 <div className={styles.item__imgBody}>
                                    <Image src={el.imageCollection.items[0].url} alt={el.name} fill style={{ objectFit: "contain" }} />
                                 </div>
                              </div>
                              <div className={styles.item__title}>
                                 <h2>
                                    {el.name} {el2.model}
                                 </h2>
                              </div>
                              <div className={styles.item__middle}>
                                 <h4 className={`${styles.item__middle__title} ${styles.item__h4title}`}>Все модели {el.name}</h4>
                                 <ul className={styles.item__models}>
                                    {el.semiCondModelCollection.items.map((models, modelIdx) => {
                                       return (
                                          <li key={modelIdx} className={index2 === modelIdx ? styles.item__models__active : ""}>
                                             <Link href={`${el.url}_${models.model.replace(/\s|\//g, "-").toLowerCase()}`}>{models.model}</Link>
                                          </li>
                                       );
                                    })}
                                 </ul>
                                 <div className={styles.item__mainParams}>
                                    <h4 className={`${styles.item__mainParams__title} ${styles.item__h4title}`}>Основные характеристики</h4>
                                    <ul className={styles.item__mainParams__list}>
                                       <li className={styles.item__mainParams__elem}>
                                          <div className={styles.item__mainParams__elemTitle}>Бренд</div>
                                          <span></span>
                                          <div className={styles.item__mainParams__elemParam}>{el.company}</div>
                                       </li>
                                       <li className={styles.item__mainParams__elem}>
                                          <div className={styles.item__mainParams__elemTitle}>Инверторный</div>
                                          <span></span>
                                          <div className={styles.item__mainParams__elemParam}>{el.isInverter ? "Да" : "Нет"}</div>
                                       </li>
                                    </ul>
                                    <p className={styles.item__description}>{el.description}</p>
                                 </div>
                              </div>
                              <div className={styles.item__prices}>
                                 <Price el2={el2} dollarValue={dollarValue} />
                                 <button className={styles.item__buy}>Купить</button>
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
