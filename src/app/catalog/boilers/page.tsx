import fetchGraphql from "@/Functions/fetchGraphql";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import Grid from "@/Components/Catalog/Boilers/Grid";
import { ReadonlyURLSearchParams } from "next/navigation";
import { DollarData, ImageRest } from "@/Types/Common.type";
import { fetchExpressApi } from "@/Functions/fetchExpressApi";
import ErrorFetchData from "@/Components/Utilities/ErrorFetchData";

export type BoilersCollection = {
   name: string;
   url: string;
   price: number;
   company: string;
   performanceMax: number;
   performanceMin: number;
   performanceFilter: string;
   gasFlow: string;
   description: string;
   gasType: string;
   pressure: string;
   efficiency: string;
   heatTempaerature: string;
   temperatureWater: string;
   workPressure: string;
   voltage: string;
   heatOutput: string;
   size: string;
   tankSize: string;
   literMin25: string;
   literMin30: string;
   maxMinGasPressure: string;
   oxygenSupply: string;
   chamberType: string;
   inStock: boolean;
   markdownDescription: string;
   review: string;
   inPromotion: boolean;
   bonus: string;
   imageCollection: {
      items: BoilersImgCollection[];
   };
   image: ImageRest[];
};

type BoilersImgCollection = {
   url: string;
};

export type Data = {
   data: {
      dollarValue: {
         value: number;
      };
      boilersCollection: {
         items: BoilersCollection[];
      };
   };
};

export const metadata = {
   title: `Газовые котлы для дома и офиса | ${process.env.BRAND}`,
   description: "Газовые котлы по выгодным ценам для вашего комфортного дома или офиса",
   keywords: ["газовые котлы", "отопление", "водяное отопление"],
};

const filterFields = [
   {
      title: "Бренды",
      titleVal: "Brands",
      list: ["Welkin"],
      filterVal: ["Welkin"],
      id: ["Welkin6"],
   },
   {
      title: "Производительность",
      titleVal: "Efficiency",
      list: ["До 20кВт"],
      filterVal: ["20"],
      id: ["20kW-boilers"],
   },
];

const h2title = "Газовые котлы";
const url = process.env.BOILERS_LIST_URL as string;
const uri = "boilers";

async function page({ searchParams }: { searchParams: ReadonlyURLSearchParams }) {
   const urlParams = new URLSearchParams(searchParams);
   const data = await fetchExpressApi(
      `${urlParams.size > 0 ? `${process.env.BACKEND_URL}/api/boilers?${urlParams}` : `${process.env.BACKEND_URL}/api/boilers`}`
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
               items={data.boilers}
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
