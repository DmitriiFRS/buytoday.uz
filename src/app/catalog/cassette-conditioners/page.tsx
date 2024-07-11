import fetchGraphql from "@/Functions/fetchGraphql";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import { ReadonlyURLSearchParams } from "next/navigation";
import { DollarData } from "@/Types/Common.type";
import Grid from "@/Components/Catalog/SemiIndConditioners/Grid";
import { fetchExpressApi } from "@/Functions/fetchExpressApi";
import ErrorFetchData from "@/Components/Utilities/ErrorFetchData";

export const metadata = {
   title: `Кассетные кондиционеры для вашего дома | ${process.env.BRAND}`,
   description: "Кассетные сплит-системы для офисов, коттеджей и частных домов по выгодным ценам",
   keywords: ["кассетные", "сплит-системы", "полупромышленные кондиционеры"],
};

const url = process.env.CAS_LIST_URL as string;

const h2title = "Кассетные сплит-системы";

const filterFields = [
   {
      title: "Бренды",
      titleVal: "Brands",
      list: ["Midea", "Welkin"],
      filterVal: ["Midea", "Welkin"],
      id: ["Midea3", "Welkin3"],
   },
   {
      title: "Мощность",
      titleVal: "Power",
      list: ["12000 Btu/h до 25м²", "18000 Btu/h до 40м²", "24000 Btu/h до 50м²", "36000 Btu/h до 75м²", "48000 Btu/h до 100м²", "60000 Btu/h до 120м²"],
      filterVal: ["12000", "18000", "24000", "36000", "48000", "60000"],
      id: ["12000-semi", "18000-semi", "24000-semi", "36000-semi", "48000-semi", "60000-semi"],
   },
   {
      title: "Тип компрессора",
      titleVal: "CompressorType",
      list: ["Инверторный", "On/Off"],
      filterVal: ["yes", "no"],
      id: ["inverter-semi", "on-off-semi"],
   },
];

const visibleFilterFields = [
   {
      title: "Мощность",
      titleVal: "Power",
      list: ["12000 Btu/h до 25м²", "18000 Btu/h до 40м²", "24000 Btu/h до 50м²", "36000 Btu/h до 75м²", "48000 Btu/h до 100м²", "60000 Btu/h до 120м²"],
      filterVal: ["12000", "18000", "24000", "36000", "48000", "60000"],
      id: ["12000-semi", "18000-semi", "24000-semi", "36000-semi", "48000-semi", "60000-semi"],
   },
];

async function page({ searchParams }: { searchParams: ReadonlyURLSearchParams }) {
   const urlParams = new URLSearchParams(searchParams);
   const data = await fetchExpressApi(
      `${urlParams.size > 0 ? `${process.env.BACKEND_URL}/api/cassetts?${urlParams}` : `${process.env.BACKEND_URL}/api/cassetts`}`
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
               visibleFilterFields={visibleFilterFields}
               items={data.cols}
               pagination={data.pagination}
               url={url}
               currencyVal={currencyData.data.dollarValue.value}
            />
         </div>
      </div>
   );
}
export default page;
