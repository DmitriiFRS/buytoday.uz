import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import fetchGraphql from "@/Functions/fetchGraphql";
import Grid from "@/Components/Catalog/AirConditioners/Grid";
import { ReadonlyURLSearchParams } from "next/navigation";

export type AircondDataModel = {
   company: string;
   compressor?: string;
   description?: string;
   isInverter?: boolean;
   name: string;
   temperatureRange: string;
   url: string;
   imageCollection?: {
      items: AicondImgCollection[];
   };
   image: {
      fields: {
         file: {
            url: string;
         };
      };
   }[];
   price: number;
   model: string;
   wifiPrice: number;
   filterBtu: string;
   coolingPowerBtu: string;
   coolingPowerKw: string;
   heatPowerBtu: string;
   heatPowerKw: string;
   energyOutput: string;
   aream2: string;
   aream3: string;
   freonQuantity: string;
   blockSize: string;
   outerBlockSize: string;
   airFlow: string;
   innerNoise: string;
   outerNoise: string;
   innerWeight: string;
   outerWeight: string;
   routeLength: string;
};

type AicondImgCollection = {
   url: string;
};

export type AircondDataInner = {
   name: string;
   url: string;
   isInverter: boolean;
   compressor: string;
   temperatureRange: string;
   company: string;
   description: string;
   imageCollection: {
      items: AicondImgCollection[];
   };
   airCondModelCollection: {
      items: AircondDataModel[];
   };
};

export type Data = {
   data: {
      dollarValue: {
         value: number;
      };
      airConditionersCollection: {
         items: AircondDataInner[];
      };
   };
};

export type DollarData = {
   data: {
      dollarValue: {
         value: number;
      };
   };
};

export const metadata = {
   title: `Бытовые кондиционеры | ${process.env.BRAND}`,
   description: "Каталог бытовых кондиционеров в Ташкенте по выгодным ценам",
   keywords: ["кондиционеры", "каталог", "кондиционеры в Ташкенте", "сплит-системы", "бытовые", "air-conditioners", "conditioners"],
};
const url = "http://buytoday.uz/catalog/air-conditioners";

async function page({ searchParams }: { searchParams: ReadonlyURLSearchParams }) {
   const urlParams = new URLSearchParams(searchParams);
   const data = await fetch(`${urlParams.size > 0 ? `https://buytoday.uz/api/aircond?${urlParams}` : "https://buytoday.uz/api/aircond"}`, {
      cache: "no-cache",
   }).then((res) => res.json());
   const currencyData: DollarData = await fetchGraphql(`
         query {
            dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
               value
         }
            }
      `);
   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Grid items={data} url={url} currencyVal={currencyData.data.dollarValue.value} />
         </div>
      </div>
   );
}
export default page;
