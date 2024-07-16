import Link from "next/link";
import styles from "../../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { AircondDataInner } from "@/app/catalog/air-conditioners/[item]/page";
import Params from "./Params";
import Price from "./Price";
import WifiOptionBody from "./WifiOptionBody";
import Imges from "../../../Common/ItemCard/Imges";
import Buy from "./Buy";
import MobileSlider from "../../../Common/ItemCard/MobileSlider";
import AddToWishlistContainer from "@/Components/Common/ItemCard/AddToWishlistContainer";
import Slider from "@/Components/Common/ItemCard/Slider";
import Cheaper from "@/Components/Common/ItemCard/Cheaper";
import IsInStock from "@/Components/Common/ItemCard/IsInStock";
import Delivery from "@/Components/Common/ItemCard/Delivery";
import Tabs from "../../../Common/ItemCard/Tabs/Tabs";
import React from "react";
import Reviews from "../../../Common/ItemCard/Tabs/Reviews";
import Description from "../../../Common/ItemCard/Tabs/Description";
import { getTabsArray } from "@/Components/Common/ItemCard/Tabs/tabsData";

type Props = {
   outerItems: AircondDataInner[];
   params: {
      item: string;
   };
   dollarValue: number;
   url: string;
   path?: string;
};

function Main({ outerItems, params, dollarValue, url, path }: Props) {
   const tabsArray = getTabsArray(url);
   return (
      <>
         {outerItems.map((el, index) => {
            if (el.airCondModelCollection.items.find((item) => item.model.replace(/\s|\//g, "-").toLowerCase() === params.item)) {
               {
                  el.airCondModelCollection.items.sort((a, b) => a.price - b.price);
               }
               return (
                  <section key={index} className={styles.item}>
                     {el.airCondModelCollection.items.map((el2, index2) => {
                        if (el2.model.replace(/\s|\//g, "-").toLowerCase() === params.item)
                           return (
                              <div key={index2} className={styles.item__grid}>
                                 <div className={styles.item__imgFavorite}>
                                    <AddToWishlistContainer
                                       element={{
                                          img: el.imageCollection.items[0].url,
                                          name: el.name,
                                          model: el2.model,
                                          brand: el.company,
                                          type: "Настенные сплит-системы",
                                          title: "Бытовой кондиционер",
                                       }}
                                    />
                                    <Slider images={el.imageCollection.items} />
                                    <Imges images={el.imageCollection.items} name={el.name} />
                                    <MobileSlider images={el.imageCollection.items} name={el.name} />
                                 </div>
                                 <div className={styles.item__title}>
                                    <h2>
                                       Настенная сплит-система {el.company} {el2.model}
                                    </h2>
                                 </div>
                                 <div className={styles.item__middle}>
                                    <h4 className={`${styles.item__middle__title} ${styles.item__h4title}`}>Все модели серии {el.name}</h4>
                                    <ul className={styles.item__models}>
                                       {el.airCondModelCollection.items.map((models, modelIdx) => {
                                          return (
                                             <li key={modelIdx} className={index2 === modelIdx ? styles.item__models__active : ""}>
                                                <Link href={`/catalog/air-conditioners/${models.model.replace(/\s|\//g, "-").toLowerCase()}`}>
                                                   {models.model}
                                                </Link>
                                             </li>
                                          );
                                       })}
                                    </ul>
                                    <WifiOptionBody el2={el2} params={params.item} />
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
                                          <li className={styles.item__mainParams__elem}>
                                             <div className={styles.item__mainParams__elemTitle}>Компрессор</div>
                                             <span></span>
                                             <div className={styles.item__mainParams__elemParam}>{el.compressor}</div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div className={styles.item__prices}>
                                    <Price el2={el2} dollarValue={dollarValue} />
                                    <IsInStock inStock={el2.inStock} />
                                    <Buy el={el} el2={el2} />
                                    <Cheaper />
                                    <Delivery />
                                 </div>
                                 <Tabs path={path} tabsArray={tabsArray} />
                                 <section className={styles.item__params}>
                                    {path === url + "/description" ? (
                                       <Description mainDescription={el.description} descriptions={el.description1} />
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
//<h3>Все характеристики</h3>
