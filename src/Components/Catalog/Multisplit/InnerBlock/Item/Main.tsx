import { MultiInnerMain } from "@/app/catalog/multisplit-inner/page";
import styles from "../../../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Params from "./Params";
import AddToWishlistContainer from "@/Components/Common/ItemCard/AddToWishlistContainer";
import Imges from "@/Components/Common/ItemCard/Imges";
import MobileSlider from "@/Components/Common/ItemCard/MobileSlider";
import ListOfModels from "@/Components/Common/ItemCard/ListOfModels";
import MainParams from "@/Components/Common/ItemCard/MainParams";
import Price from "@/Components/Common/ItemCard/Price";
import Buy from "@/Components/Common/ItemCard/Buy";
import Slider from "@/Components/Common/ItemCard/Slider";
import Cheaper from "@/Components/Common/ItemCard/Cheaper";
import IsInStock from "@/Components/Common/ItemCard/IsInStock";
import Delivery from "@/Components/Common/ItemCard/Delivery";
import MultisplitListOfModels from "@/Components/Common/ItemCard/MultisplitListOfModels";
import { getTabsArray } from "@/Components/Common/ItemCard/Tabs/tabsData";
import Tabs from "@/Components/Common/ItemCard/Tabs/Tabs";
import Description from "@/Components/Common/ItemCard/Tabs/Description";
import Reviews from "@/Components/Common/ItemCard/Tabs/Reviews";
import Bonus from "@/Components/Common/ItemCard/Bonus";
import InPromotion from "@/Components/Common/ItemCard/InPromotion";

type Props = {
   items: MultiInnerMain[];
   params: {
      item: string;
   };
   dollarValue: number;
   url: string;
   path?: string;
};

function Main({ items, params, dollarValue, url, path }: Props) {
   const tabsArray = getTabsArray(url);
   return (
      <>
         {items.map((el, index) => {
            if (el.multisplitModelCollection.items.find((item) => "multi-" + item.model.replace(/\s|\//g, "-").toLowerCase() === params.item)) {
               {
                  el.multisplitModelCollection.items.sort((a, b) => a.price - b.price);
               }
               return (
                  <section key={index} className={styles.item}>
                     {el.multisplitModelCollection.items.map((el2, index2) => {
                        if ("multi-" + el2.model.replace(/\s|\//g, "-").toLowerCase() === params.item)
                           return (
                              <div key={index2} className={styles.item__grid}>
                                 <div className={styles.item__imgFavorite}>
                                    <Bonus bonus={el2.bonus} />
                                    <AddToWishlistContainer
                                       element={{
                                          img: el.imageCollection.items[0].url,
                                          name: el.name,
                                          model: el2.model,
                                          brand: el.company,
                                          type: "Мульти-сплит внутренние блоки",
                                          title: "Настенный фен",
                                       }}
                                    />
                                    <Slider images={el.imageCollection.items} />
                                    <Imges images={el.imageCollection.items} name={el.name} />
                                    <MobileSlider images={el.imageCollection.items} name={el.name} />
                                 </div>
                                 <div className={styles.item__title}>
                                    <h2>Внутренний блок мультисплит-системы {el2.model}</h2>
                                 </div>
                                 <div className={styles.item__middle}>
                                    <h4 className={`${styles.item__middle__title} ${styles.item__h4title}`}>Все модели серии {el.name}</h4>
                                    <MultisplitListOfModels items={el.multisplitModelCollection.items} index2={index2} />
                                    <MainParams>
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
                                    <InPromotion inPromotion={el2.inPromotion} />
                                 </div>
                                 <div className={styles.item__prices}>
                                    <Price price={el2.price} dollarValue={dollarValue} />
                                    <IsInStock inStock={el2.inStock} />
                                    <Buy
                                       searchTitle={"мультисплит-" + " " + el2.model}
                                       item={{
                                          id: Date.now(),
                                          name: `Мульти-сплит внутренний блок ${el.name}`,
                                          url: "multi-" + el.url,
                                          company: el.company,
                                          image: el.imageCollection.items[0].url,
                                          model: "мультисплит-" + " " + el2.model,
                                          price: el2.price,
                                          count: 1,
                                       }}
                                    />
                                    <Cheaper />
                                    <Delivery />
                                 </div>
                                 <Tabs path={path} tabsArray={tabsArray} />
                                 <section className={styles.item__params}>
                                    {path === url + "/description" ? (
                                       <Description mainDescription={el.description} descriptions={el.markdownDescription} />
                                    ) : path === url + "/reviews" ? (
                                       <Reviews review={el.review} />
                                    ) : (
                                       <Params el={el} elInner={el2} />
                                    )}
                                 </section>
                              </div>
                           );
                     })}
                     <div style={{ display: "flex", gap: "30px" }} key={index}></div>
                  </section>
               );
            }
         })}
      </>
   );
}
export default Main;
