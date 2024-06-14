import { SemiIndDataInner } from "@/app/catalog/col-conditioners/[item]/page";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Params from "./Params";
import MobileSlider from "@/Components/Common/ItemCard/MobileSlider";
import Imges from "@/Components/Common/ItemCard/Imges";
import AddToWishlistContainer from "@/Components/Common/ItemCard/AddToWishlistContainer";
import Price from "@/Components/Common/ItemCard/Price";
import Buy from "@/Components/Common/ItemCard/Buy";
import MainParams from "@/Components/Common/ItemCard/MainParams";
import ListOfModels from "@/Components/Common/ItemCard/ListOfModels";

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
                              <div className={styles.item__imgFavorite}>
                                 <AddToWishlistContainer
                                    element={{
                                       img: el.imageCollection.items[0].url,
                                       name: el.name,
                                       model: el2.model,
                                       brand: el.company,
                                       type: "Полупромышленные сплит-системы",
                                       title: el.type + " " + "кондиционер",
                                    }}
                                 />
                                 <Imges images={el.imageCollection.items} name={el.name} />
                                 <MobileSlider images={el.imageCollection.items} name={el.name} />
                              </div>
                              <div className={styles.item__title}>
                                 <h2>
                                    {el.name} / {el2.model}
                                 </h2>
                              </div>
                              <div className={styles.item__middle}>
                                 <h4 className={`${styles.item__middle__title} ${styles.item__h4title}`}>Все модели {el.name}</h4>
                                 <ListOfModels items={el.semiCondModelCollection.items} url={el.url} index2={index2} />
                                 <MainParams description={el.description}>
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
                                 </MainParams>
                              </div>
                              <div className={styles.item__prices}>
                                 <Price price={el2.price} dollarValue={dollarValue} />
                                 <Buy
                                    searchTitle={el2.model}
                                    item={{
                                       id: Date.now(),
                                       name: el.name,
                                       url: el.url,
                                       company: el.company,
                                       image: el.imageCollection.items[0].url,
                                       model: el2.model,
                                       price: el2.price,
                                       count: 1,
                                    }}
                                 />
                                 <div className={styles.item__delivery}>Бесплатная доставка по Ташкенту</div>
                              </div>
                              <Params el={el} elInner={el2} />
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
