import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import ProductTypeGrid from "@/Components/productType/ProductTypeGrid";
import { FilterContextProvider } from "@/Context/FilterContext";
import { getCurrencyValue } from "@/fetch/getCurrencyValue";
import { CurrencyType } from "@/Types/CurrencyType";

async function page({ params }: { params: { productType: string } }) {
   const currencyVal: CurrencyType = await getCurrencyValue();
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
}
export default page;
