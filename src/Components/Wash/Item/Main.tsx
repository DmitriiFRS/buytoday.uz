import { WashCollection } from "@/app/catalog/wash/page";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Imges from "@/Components/Common/ItemCard/Imges";
import MobileSlider from "@/Components/Common/ItemCard/MobileSlider";
import BuyContainer from "./BuyContainer";
import Price from "@/Components/Common/ItemCard/Price";
import Params from "./Params";

type Props = {
   items: WashCollection[];
   params: {
      item: string;
   };
   dollarValue: number;
};

function Main({ items, params, dollarValue }: Props) {
   return (
      <>
         {items.map((el, index) => {
            if (el.url.replace(/\s|\//g, "-").toLowerCase() === params.item) {
               return (
                  <section key={index} className={styles.item}>
                     <div className={styles.item__grid}>
                        <Imges images={el.imageCollection.items} name={el.name} />
                        <MobileSlider images={el.imageCollection.items} name={el.name} />
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
                                    <div className={styles.item__mainParams__elemParam}>{el.company}</div>
                                 </li>
                                 <li className={styles.item__mainParams__elem}>
                                    <div className={styles.item__mainParams__elemTitle}>Сушка</div>
                                    <span></span>
                                    <div className={styles.item__mainParams__elemParam}>{el.isDrying ? "Да" : "Нет"}</div>
                                 </li>
                                 <li className={styles.item__mainParams__elem}>
                                    <div className={styles.item__mainParams__elemTitle}>Цвет</div>
                                    <span></span>
                                    <div className={styles.item__mainParams__elemParam}>{el.color}</div>
                                 </li>
                              </ul>
                              <p className={styles.item__description}>{el.description}</p>
                           </div>
                        </div>
                        <div className={styles.item__prices}>
                           <Price price={el.price} dollarValue={dollarValue} />
                           <BuyContainer el={el} />
                           <div className={styles.item__delivery}>Бесплатная доставка по Ташкенту</div>
                        </div>
                        <section className={styles.item__params}>
                           <h3>Все характеристики</h3>
                           <Params el={el} />
                        </section>
                     </div>
                  </section>
               );
            }
         })}
      </>
   );
}
export default Main;
