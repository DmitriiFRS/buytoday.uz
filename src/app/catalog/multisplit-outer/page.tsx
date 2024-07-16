import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import fetchGraphql from "@/Functions/fetchGraphql";
import Grid from "@/Components/Catalog/Multisplit/OuterBlock/Grid";
import { DollarData, ImageRest } from "@/Types/Common.type";
import { ReadonlyURLSearchParams } from "next/navigation";
import { fetchExpressApi } from "@/Functions/fetchExpressApi";
import ErrorFetchData from "@/Components/Utilities/ErrorFetchData";

type MultiOuterImgCollection = {
   url: string;
};

export type MultiOuterCollection = {
   name: string;
   url: string;
   model: string;
   price: number;
   company: string;
   imageCollection: {
      items: MultiOuterImgCollection[];
   };
   image: ImageRest[];
   compressor: string;
   description: string;
   connect: string;
   coolingCapacity: string;
   coolingOutput: string;
   coolingAmperage: string;
   eer: string;
   heatingCapacity: string;
   heatingOutput: string;
   heatingAmperage: string;
   cop: string;
   airFlow: string;
   size: string;
   inStock: boolean;
   markdownDescription: string;
   review: string;
};

export type Data = {
   data: {
      dollarValue: {
         value: number;
      };
      multisplitOuterCollection: {
         items: MultiOuterCollection[];
      };
   };
};

export const metadata = {
   title: `Наружные блоки мульти-сплит систем | ${process.env.BRAND}`,
   description: "Купить или заказать наружные блоки мульти-сплит систем по выгодным ценам в Ташкенте",
   keywords: ["мультисплит-системы", "сплит-системы", "кондиционеры"],
};

const filterFields = [
   {
      title: "Бренды",
      titleVal: "Brands",
      list: ["Midea", "Welkin"],
      filterVal: ["Midea", "Welkin"],
      id: ["Midea100", "Welkin100"],
   },
];

const url = process.env.MULTI_OUTER_LIST_URL as string;
const uri = "multisplit-outer";

const h2title = "Наружные мульти-сплит системы";

async function page({ searchParams }: { searchParams: ReadonlyURLSearchParams }) {
   const urlParams = new URLSearchParams(searchParams);
   const data = await fetchExpressApi(
      `${urlParams.size > 0 ? `${process.env.BACKEND_URL}/api/multiOuter?${urlParams}` : `${process.env.BACKEND_URL}/api/multiOuter`}`
   );
   const currencyData: DollarData = await fetchGraphql(`
         query {
            dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
               value
         }
            }
      `);
   return !data ? (
      <ErrorFetchData />
   ) : (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Grid
               title={h2title}
               filterFields={filterFields}
               items={data.multiOuter}
               pagination={data.pagination}
               url={url}
               currencyVal={currencyData.data.dollarValue.value}
               uri={uri}
            />
         </div>
      </div>
   );
}
export default page;
