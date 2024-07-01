import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import fetchGraphql from "@/Functions/fetchGraphql";
import { ReadonlyURLSearchParams } from "next/navigation";
import Grid from "@/Components/Catalog/AirConditioners/Grid";
import { DollarData } from "@/Types/Common.type";

export type AircondDataModel = {
   company: string;
   compressor?: string;
   description?: string;
   isInverter?: boolean;
   name: string;
   temperatureRange: string;
   url: string;
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
   inStock: boolean;
};

export const metadata = {
   title: `Бытовые кондиционеры | ${process.env.BRAND}`,
   description: "Каталог бытовых кондиционеров в Ташкенте по выгодным ценам",
   keywords: ["кондиционеры", "каталог", "кондиционеры в Ташкенте", "сплит-системы", "бытовые", "air-conditioners", "conditioners"],
};
const url = process.env.AIRCONT_LIST_URL as string;

const h2title = "Настенные сплит-системы";

const filterFields = [
   {
      title: "Бренды",
      titleVal: "Brands",
      list: ["Midea", "Welkin"],
      filterVal: ["Midea", "Welkin"],
      id: ["Midea", "Welkin"],
   },
   {
      title: "Мощность",
      titleVal: "Power",
      list: ["7000 Btu/h до 25м²", "9000 Btu/h до 30м²", "12000 Btu/h до 40м²", "18000 Btu/h до 60м²", "24000 Btu/h до 75м²"],
      filterVal: ["7000", "9000", "12000", "18000", "24000"],
      id: ["7000", "9000", "12000", "18000", "24000"],
   },
   {
      title: "Управление по Wi-Fi",
      titleVal: "Wifi",
      list: ["Да", "Нет"],
      filterVal: ["yes", "no"],
      id: ["includeWifi", "notIncludeWifi"],
   },
];

async function page({ searchParams }: { searchParams: ReadonlyURLSearchParams }) {
   const urlParams = new URLSearchParams(searchParams);
   const data = await fetch(`${urlParams.size > 0 ? `${process.env.BACKEND_URL}/api/aircond?${urlParams}` : `${process.env.BACKEND_URL}/api/aircond`}`, {
      next: {
         revalidate: 30,
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
               items={data.airconds}
               pagination={data.pagination}
               url={url}
               currencyVal={currencyData.data.dollarValue.value}
            />
         </div>
      </div>
   );
}
export default page;
