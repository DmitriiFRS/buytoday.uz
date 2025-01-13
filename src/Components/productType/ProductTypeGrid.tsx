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
import { Pagination } from "@mui/material";
import { ProductsPagination } from "@/Types/Common.type";

type PropTypes = {
  productType: string;
  currencyVal: CurrencyType;
};

const LIMIT = 10;

function ProductTypeGrid({ productType, currencyVal }: PropTypes) {
  const { brands, wifi, btu, compressor, colors, fridgeTypes, dries, performance, airPurifierTypes, noFrost, page, setPage } =
    useFilterContext();
  const [products, setProducts] = useState<AircondProductTypeList>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    async function getCurrentProducts() {
      setIsLoading(true);
      const response = await getProducts({
        uri: productType,
        brand: brands,
        btus: btu,
        wifis: wifi,
        compressorTypes: compressor,
        isDry: dries,
        boilerPerformance: performance,
        fridgeTypes: fridgeTypes,
        colorsTypes: colors,
        noFrosts: noFrost,
        airPurifiersTypes: airPurifierTypes,
        page: page,
        limit: LIMIT,
      });
      if (response.error) {
        console.error(response.msg);
        return;
      }
      const pagination = response.meta.pagination as ProductsPagination;
      setProducts(response.data);
      setPageCount(pagination.pageCount);
      setIsLoading(false);
      console.log(response.data);
    }
    getCurrentProducts();
  }, [page, brands, wifi, btu, compressor, colors, fridgeTypes, dries, performance, noFrost, airPurifierTypes]);

  function handlePageChange(pageValue: number, scroll = true) {
    if (page !== pageValue) {
      setPage(pageValue);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <section className={styles.aircond__grid}>
      <ProductTypeSidebar isMobile={false} productType={productType} />
      <div className={styles.aircond__main}>
        <h2 className={styles.aircond__title}>{products[0] && products[0].attributes.productType.data.attributes.title}</h2>
        <MobileFilters productType={productType} />
        <ul className={styles.aircond__list}>
          {products.length > 0 && products ? (
            products.map((item, index) => {
              return (
                <div key={index}>
                  <ProductTypeModel key={item.id} el={item} productType={productType} currencyVal={currencyVal}>
                    <div className={styles.aircond__item__titles}>
                      <h5 className={styles.aircond__item__title}>
                        {products[0] && products[0].attributes.productType.data.attributes.title}
                      </h5>
                      <h3 className={styles.aircond__item__name}>{item.attributes.name}</h3>
                      <div className={styles.aircond__item__params}>
                        <div className={styles.aircond__item__param}>
                          Бренд:{" "}
                          <span>
                            {item.attributes.product.data?.attributes.brands.data.attributes.title ||
                              item.attributes.paramsWrapper?.brands.data.attributes.title ||
                              ""}
                          </span>
                        </div>
                        {item.attributes.popularParam.length > 0 &&
                          item.attributes.popularParam.map((param, paramIdx) => {
                            return (
                              <div key={paramIdx} className={styles.aircond__item__param}>
                                {param.name}
                                <span>{param.value}</span>
                              </div>
                            );
                          })}
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
        <Pagination
          count={pageCount}
          defaultPage={Number(page)}
          siblingCount={1}
          boundaryCount={1}
          page={Number(page)}
          onChange={(e, page) => handlePageChange(page, false)}
        />
      </div>
    </section>
  );
}
export default ProductTypeGrid;
/*
<div className={styles.aircond__item__param}>
                                       Инверторный:{" "}
                                       <span>
                                          {item.attributes.product.data.attributes.compressorTypeConds.data.attributes.slug === "inverter" ? "Да" : "Нет"}
                                       </span>
                                    </div>
                                    <div className={styles.aircond__item__param}>
                                       Мощность: <span>{item.attributes.coolingBtu} btu/h</span>
                                    </div>
*/
