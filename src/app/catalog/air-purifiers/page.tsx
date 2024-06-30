import fetchGraphql from "@/Functions/fetchGraphql";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import Grid from "@/Components/Catalog/AirPurifiers/Grid";
import { DollarData, ImageRest } from "@/Types/Common.type";
import { ReadonlyURLSearchParams } from "next/navigation";

export type AirPurifiersCollection = {
   name: string;
   url: string;
   price: number;
   type: string;
   company: string;
   voltage: string;
   description: string;
   frequency: string | null;
   power: string | null;
   noiseLowSpeed: string | null;
   anions: string | null;
   particleRemovalVol: string | null;
   formaldehyde: string | null;
   m2: string | null;
   filterReplacement: string | null;
   weight: string | null;
   size: string | null;
   tankValue: string | null;
   sprayVolume: string | null;
   colors: string | null;
   cableLength: string | null;
   oscillationDegree: string | null;
   engineSpeed: string | null;
   airSpeed: string | null;
   inStock: boolean;
   imageCollection: {
      items: AirPurifiersImgCollection[];
   };
   image: ImageRest[];
};

type AirPurifiersImgCollection = {
   url: string;
};

export type Data = {
   data: {
      dollarValue: {
         value: number;
      };
      airPurifiersCollection: {
         items: AirPurifiersCollection[];
      };
   };
};

export const metadata = {
   title: `Очистители - увлажнители | ${process.env.BRAND}`,
   description: "Очистители и увлажнители воздуха для дома и офиса",
   keywords: ["очистители", "увлажнители", "чистый воздух"],
};

const filterFields = [
   {
      title: "Бренды",
      titleVal: "Brands",
      list: ["Welkin"],
      filterVal: ["Welkin"],
      id: ["Welkin7"],
   },
   {
      title: "Типы",
      titleVal: "Type",
      list: ["Увлажнитель-очиститель воздуха", "Увлажнитель воздуха", "Очиститель воздуха"],
      filterVal: ["Humidifier-cleaner", "Humidifier", "Cleaner"],
      id: ["airPurifiers1", "airPurifiers2", "airPurifiers3"],
   },
];

const h2title = "Очистители-увлажнители";
const url = process.env.AIR_PURIFIERS_LIST_URL as string;
const uri = "air-purifiers";

async function page({ searchParams }: { searchParams: ReadonlyURLSearchParams }) {
   const urlParams = new URLSearchParams(searchParams);
   const data = await fetch(`${urlParams.size > 0 ? `${process.env.BACKEND_URL}/api/purifiers?${urlParams}` : `${process.env.BACKEND_URL}/api/purifiers`}`, {
      next: {
         revalidate: 6,
      },
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
            <Grid
               title={h2title}
               filterFields={filterFields}
               items={data.purifiers}
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
