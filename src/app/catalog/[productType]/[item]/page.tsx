import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import { getProduct } from "@/fetch/getProduct";
import ProductMain from "@/Components/productCard/ProductMain";
import { CurrencyType } from "@/Types/CurrencyType";
import { getCurrencyValue } from "@/fetch/getCurrencyValue";

async function Product({ params }: { params: { item: string } }) {
   const products = await getProduct({ product: params.item });
   const currencyVal: CurrencyType = await getCurrencyValue();
   return (
      products.data && (
         <div className={styles.aircond}>
            <div className="container">
               <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
               {<ProductMain productModel={products.data[0]} item={params.item} currencyVal={currencyVal.attributes.value} />}
            </div>
         </div>
      )
   );
}
export default Product;
