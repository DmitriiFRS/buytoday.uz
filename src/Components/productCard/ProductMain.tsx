import Link from "next/link";
import styles from "../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Bonus from "../Common/ItemCard/Bonus";
import { AircondProductTypeModel } from "@/Types/AircondProductType.type";
import AddToWishlistContainer from "../Common/ItemCard/AddToWishlistContainer";
import Imges from "../Common/ItemCard/Imges";
import MobileSlider from "../Common/ItemCard/MobileSlider";
import Slider from "../Common/ItemCard/Slider";
import WifiOptionBody from "../Catalog/AirConditioners/Item/WifiOptionBody";
import InPromotion from "../Common/ItemCard/InPromotion";
import Price from "../Catalog/AirConditioners/Item/Price";
import ProductPrice from "./ProductPrice";
import IsInStock from "../Common/ItemCard/IsInStock";
import ProductBuy from "./ProductBuy";
import Cheaper from "../Common/ItemCard/Cheaper";
import Delivery from "../Common/ItemCard/Delivery";
import ProductTabsPanel from "./ProductTabsPanel";

type PropTypes = {
   productModel: AircondProductTypeModel;
   item: string;
   currencyVal: number;
};

function ProductMain({ productModel, item, currencyVal }: PropTypes) {
   console.log(productModel.attributes.paramsWrapper.brands);
   return (
      <section className={styles.item}>
         <div className={styles.item__grid}>
            <div className={styles.item__imgFavorite}>
               <Bonus bonus={productModel.attributes.bonus || ""} />
               <AddToWishlistContainer
                  element={{
                     img:
                        productModel.attributes.product.data?.attributes.previewImage.data.attributes.url ||
                        productModel.attributes.paramsWrapper.previewImage.data.attributes.url,
                     name: productModel.attributes.product.data?.attributes.name || productModel.attributes.name,
                     model: productModel.attributes.name,
                     brand: productModel.attributes.product.data?.attributes.brands.data.attributes.title || "",
                     type: "Настенные сплит-системы",
                     title: "Бытовой кондиционер",
                  }}
               />
               <Slider images={productModel.attributes.product.data?.attributes.images.data || productModel.attributes.paramsWrapper.images.data} />
               <Imges
                  images={productModel.attributes.product.data?.attributes.images.data || productModel.attributes.paramsWrapper.images.data}
                  name={productModel.attributes.product.data?.attributes.name || productModel.attributes.name}
               />
               <MobileSlider
                  images={productModel.attributes.product.data?.attributes.images.data || productModel.attributes.paramsWrapper.images.data}
                  name={productModel.attributes.product.data?.attributes.name || productModel.attributes.name}
               />
            </div>
            <div className={styles.item__title}>
               <h2>
                  {productModel.attributes.product.data?.attributes.brands.data.attributes.title || ""} {productModel.attributes.name}
               </h2>
            </div>
            <div className={styles.item__middle}>
               {productModel.attributes.product.data && (
                  <h4 className={`${styles.item__middle__title} ${styles.item__h4title}`}>
                     Все модели серии {productModel.attributes.product.data.attributes.name}
                  </h4>
               )}
               {productModel.attributes.product.data && (
                  <ul className={styles.item__models}>
                     {productModel.attributes.product.data.attributes.models.data.map((model, modelIdx) => {
                        return (
                           <li key={model.id} className={productModel.attributes.slug === model.attributes.slug ? styles.item__models__active : ""}>
                              <Link href={`/catalog/air-conditioners/${model.attributes.slug}`}>{model.attributes.name}</Link>
                           </li>
                        );
                     })}
                  </ul>
               )}
               {productModel.attributes.product.data && <WifiOptionBody model={productModel} params={item} />}
               <InPromotion inPromotion={productModel.attributes.isPromoted} />
               <div className={styles.item__mainParams}>
                  <h4 className={`${styles.item__mainParams__title} ${styles.item__h4title}`}>Основные характеристики</h4>
                  <ul className={styles.item__mainParams__list}>
                     <li className={styles.item__mainParams__elem}>
                        <div className={styles.item__mainParams__elemTitle}>Бренд</div>
                        <span></span>
                        <div className={styles.item__mainParams__elemParam}>
                           {productModel.attributes.product.data?.attributes.brands.data.attributes.title ||
                              productModel.attributes.paramsWrapper.brands.data.attributes.title}
                        </div>
                     </li>
                     {productModel.attributes.popularParam.length > 0 &&
                        productModel.attributes.popularParam.map((param, paramIdx) => {
                           return (
                              <li key={paramIdx} className={styles.item__mainParams__elem}>
                                 <div className={styles.item__mainParams__elemTitle}>{param.name}</div>
                                 <span></span>
                                 <div className={styles.item__mainParams__elemParam}>{param.value}</div>
                              </li>
                           );
                        })}
                  </ul>
               </div>
            </div>
            <div className={styles.item__prices}>
               <ProductPrice model={productModel} dollarValue={currencyVal} />
               <IsInStock inStock={productModel.attributes.isInStock} />
               <ProductBuy model={productModel} />
               <Cheaper />
               <Delivery />
            </div>
            <ProductTabsPanel model={productModel} />
         </div>
      </section>
   );
}
export default ProductMain;
