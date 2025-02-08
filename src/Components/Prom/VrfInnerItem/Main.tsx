import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { VRFInner } from "@/Components/Catalog/VrfInner/VrfInner.data";
import ProductCardProm from "@/ComponentsNew/ProductCard/ProductCardProm";

type Props = {
     outerItems: VRFInner;
     params: {
          item: string;
     };
     category: string;
};

function Main({ outerItems, category, params }: Props) {
     return (
          <>
               {outerItems.map((el, index) => {
                    if (el.models.find((item) => el.url + "_" + item.model.replace(/\s|\//g, "-").toLowerCase() === params.item)) {
                         el.models.sort((a, b) => +a.coolingPower - +b.coolingPower);
                    }

                    return (
                         el && (
                              <div key={index} className={`${styles.aircond}`}>
                                   {el.models.map((el2, index2) => {
                                        if (el2.model.replace(/\s|\//g, "-").toLowerCase() === params.item.split("_")[1])
                                             return (
                                                  <div key={index2} className="">
                                                       <ProductCardProm product={el2 as any} productOuter={el} item={params.item} category={category} />
                                                  </div>
                                             );
                                   })}
                              </div>
                         )
                    );
               })}
          </>
     );
}
export default Main;
