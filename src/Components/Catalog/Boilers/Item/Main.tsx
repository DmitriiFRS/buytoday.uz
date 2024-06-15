import { BoilersCollection } from "@/app/catalog/boilers/page";
import styles from "../../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Imges from "@/Components/Common/ItemCard/Imges";
import MobileSlider from "@/Components/Common/ItemCard/MobileSlider";
import Price from "@/Components/Common/ItemCard/Price";
import Params from "./Params";
import AddToWishlistContainer from "@/Components/Common/ItemCard/AddToWishlistContainer";
import MainParams from "@/Components/Common/ItemCard/MainParams";
import Buy2 from "@/Components/Common/ItemCard/Buy2";

type Props = {
   items: BoilersCollection[];
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
                        <div className={styles.item__imgFavorite}>
                           <AddToWishlistContainer
                              element={{
                                 img: el.imageCollection.items[0].url,
                                 name: el.name,
                                 model: el.name,
                                 brand: el.company,
                                 type: "Газовые котлы",
                                 title: "Газовый котел",
                              }}
                           />
                           <Imges images={el.imageCollection.items} name={el.name} />
                           <MobileSlider images={el.imageCollection.items} name={el.name} />
                        </div>
                        <div className={styles.item__title}>
                           <h2>{el.name}</h2>
                        </div>
                        <div className={styles.item__middle}>
                           <MainParams description={el.description}>
                              <li className={styles.item__mainParams__elem}>
                                 <div className={styles.item__mainParams__elemTitle}>Бренд</div>
                                 <span></span>
                                 <div className={styles.item__mainParams__elemParam}>{el.company}</div>
                              </li>
                              <li className={styles.item__mainParams__elem}>
                                 <div className={styles.item__mainParams__elemTitle}>Производительность макс./мин.</div>
                                 <span></span>
                                 <div className={styles.item__mainParams__elemParam}>{el.performance}</div>
                              </li>
                              <li className={styles.item__mainParams__elem}>
                                 <div className={styles.item__mainParams__elemTitle}>Расход газа макс./мин. Nm3/h</div>
                                 <span></span>
                                 <div className={styles.item__mainParams__elemParam}>{el.gasFlow}</div>
                              </li>
                           </MainParams>
                        </div>
                        <div className={styles.item__prices}>
                           <Price price={el.price} dollarValue={dollarValue} />
                           <Buy2
                              searchTitle={el.url}
                              item={{
                                 id: Date.now(),
                                 name: "Газовый котел",
                                 url: el.url,
                                 company: el.company,
                                 image: el.imageCollection.items[0].url,
                                 model: el.name,
                                 price: el.price,
                                 count: 1,
                              }}
                           />
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
