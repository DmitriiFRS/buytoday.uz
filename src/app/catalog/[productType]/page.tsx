import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import ProductTypeGrid from "@/Components/productType/ProductTypeGrid";
import { climateTypes } from "@/service/const";
import { AircondProductTypeList } from "@/Types/AircondProductType.type";
import { getProducts } from "@/fetch/getProducts";
import { FilterContextProvider } from "@/Context/FilterContext";
import { getCurrencyValue } from "@/fetch/getCurrencyValue";
import { CurrencyType } from "@/Types/CurrencyType";

async function page({ params }: { params: { productType: string } }) {
   const currencyVal: CurrencyType = await getCurrencyValue();
   if (climateTypes.includes(params.productType)) {
      return (
         <FilterContextProvider>
            <div className={styles.aircond}>
               <div className="container">
                  <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
                  <ProductTypeGrid productType={params.productType} currencyVal={currencyVal} />
               </div>
            </div>
         </FilterContextProvider>
      );
   } else {
      return (
         <div className={styles.aircond}>
            <div className="container">
               <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            </div>
         </div>
      );
   }
}
export default page;
