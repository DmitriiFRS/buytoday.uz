import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import { getProduct } from "@/fetch/getProduct";
import ProductMain from "@/Components/productCard/ProductMain";
import { CurrencyType } from "@/Types/CurrencyType";
import { getCurrencyValue } from "@/fetch/getCurrencyValue";
import { AircondProductTypeModel } from "@/Types/AircondProductType.type";
import { notFound } from "next/navigation";
import ProductBanner from "@/Components/productCard/productBanner/ProductBanner";
import ProductCard from "@/ComponentsNew/ProductCard/ProductCard";

export async function generateMetadata({ params }: { params: { item: string } }) {
     const products = await getProduct({ product: params.item });
     const product: AircondProductTypeModel = products.data ? products.data[0] : null;
     if (!product) {
          return {
               title: "Купить с бесплатной доставкой по г. Ташкент",
               description: "Купить с бесплатной доставкой по г. Ташкент",
          };
     } else {
          return {
               title:
                    `${product.attributes.seoTitle ? product.attributes.seoTitle + "." : ""} Купить кондиционер с бесплатной доставкой по г. Ташкент` ||
                    "Купить с бесплатной доставкой по г. Ташкент",
               description: product.attributes.seoDescription || "Купить с бесплатной доставкой по г. Ташкент",
          };
     }
}

async function Product({ params }: { params: { item: string } }) {
     const products = await getProduct({ product: params.item });
     const currencyVal: CurrencyType = await getCurrencyValue();
     if (!products || products.data.length === 0) {
          notFound();
     }
     return (
          products.data.length && (
               <div className={`${styles.aircond}`}>
                    <div className="container">
                         <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
                         <ProductCard product={products.data[0]} currencyVal={currencyVal.attributes.value} item={params.item} />
                    </div>
               </div>
          )
     );
}
export default Product;
