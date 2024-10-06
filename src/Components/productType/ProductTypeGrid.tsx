"use client";

import { AircondProductTypeList } from "@/Types/AircondProductType.type";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import NotFound from "@/Components/Common/Filters/NotFound";
import MobileFilters from "./MobileFilters";
import ProductTypeSidebar from "./ProductTypeSidebar";
import { useFilterContext } from "@/Context/FilterContext";
import { useEffect, useState } from "react";
import { getProducts } from "@/fetch/getProducts";
import ProductTypeModel from "./ProductTypeModel";
import { CurrencyType } from "@/Types/CurrencyType";

type PropTypes = {
   productType: string;
   currencyVal: CurrencyType;
};

function ProductTypeGrid({ productType, currencyVal }: PropTypes) {
   const { brands, setBrands, wifi, setWifi, btu, setBtu, page } = useFilterContext();
   const [products, setProducts] = useState<AircondProductTypeList>([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      async function getCurrentProducts() {
         setIsLoading(true);
         const response = await getProducts({ uri: productType, brand: brands, btus: btu, wifis: wifi });
         if (response.error) {
            console.error(response.msg);
            return;
         }
         setProducts(response);
         setIsLoading(false);
      }
      getCurrentProducts();
   }, [page, brands, wifi, btu]);

   return (
      <section className={styles.aircond__grid}>
         <ProductTypeSidebar isMobile={false} productType={productType} />
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>{products[0] && products[0].attributes.productType.data.attributes.title}</h2>
            {<MobileFilters productType={productType} />}
            <ul className={styles.aircond__list}>
               {products.length > 0 ? (
                  products.map((item, index) => {
                     return (
                        <div key={index}>
                           <ProductTypeModel key={item.id} el={item} productType={productType} currencyVal={currencyVal}>
                              <div className={styles.aircond__item__titles}>
                                 <h5 className={styles.aircond__item__title}>{products[0] && products[0].attributes.productType.data.attributes.title}</h5>
                                 <h3 className={styles.aircond__item__name}>
                                    {item.attributes.name} | {item.attributes.coolingBtu} BTU
                                 </h3>
                                 <div className={styles.aircond__item__params}>
                                    <div className={styles.aircond__item__param}>
                                       Бренд: <span>{item.attributes.product.data.attributes.brands.data.attributes.title}</span>
                                    </div>
                                    <div className={styles.aircond__item__param}>
                                       Инверторный:{" "}
                                       <span>
                                          {item.attributes.product.data.attributes.compressorTypeConds.data.attributes.slug === "inverter" ? "Да" : "Нет"}
                                       </span>
                                    </div>
                                    <div className={styles.aircond__item__param}>
                                       Мощность: <span>{item.attributes.coolingBtu} btu/h</span>
                                    </div>
                                 </div>
                              </div>
                           </ProductTypeModel>
                        </div>
                     );
                  })
               ) : (
                  <NotFound />
               )}
            </ul>
            {/*<PaginationController pagination={pagination} url={url} />*/}
         </div>
      </section>
   );
}
export default ProductTypeGrid;
