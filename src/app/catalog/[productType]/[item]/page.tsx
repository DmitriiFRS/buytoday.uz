import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import { getProduct } from "@/fetch/getProduct";
import ProductMain from "@/Components/productCard/ProductMain";
import { CurrencyType } from "@/Types/CurrencyType";
import { getCurrencyValue } from "@/fetch/getCurrencyValue";
import { AircondProductTypeModel } from "@/Types/AircondProductType.type";
import { notFound } from "next/navigation";
import ProductCard from "@/ComponentsNew/ProductCard/ProductCard";

export async function generateMetadata({ params }: { params: { item: string } }) {
     const products = await getProduct({ product: params.item });
     const product: AircondProductTypeModel = products.data.length ? products.data[0] : null;
     const productBrand =
          product.attributes.paramsWrapper?.aircond?.product?.data.attributes.brands?.data.attributes.title || product.attributes.paramsWrapper?.brands?.data.attributes.title;
     const productName = product.attributes.name;
     const productTypeSlug = product.attributes.productType?.data.attributes.slug;
     if (!product) {
          return {
               title: "Купить продукцию с бесплатной доставкой по г. Ташкент",
               description: "Купить продукцию с бесплатной доставкой по г. Ташкент",
          };
     } else {
          return {
               title: `${product.attributes.seoTitle ? product.attributes.seoTitle : `Купить ${productName} ${productBrand}`}` || "Купить с бесплатной доставкой по г. Ташкент",
               description: product.attributes.seoDescription || `Купить ${productName} ${productBrand} с бесплатной доставкой по г. Ташкент`,
               openGraph: {
                    type: "website",
                    locale: "ru_RU",
                    siteName: "Buytoday",
                    title:
                         `${product.attributes.seoTitle ? product.attributes.seoTitle : `Купить ${productName} ${productBrand}`}` || "Купить с бесплатной доставкой по г. Ташкент",
                    description: product.attributes.seoDescription || `Купить ${productName} ${productBrand} с бесплатной доставкой по г. Ташкент`,
               },
               alternates: {
                    canonical: `https://buytoday.uz/catalog/${productTypeSlug}/${product.attributes.slug}`,
               }
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
