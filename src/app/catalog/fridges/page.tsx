import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import Grid from "@/Components/Catalog/Fridges/Grid";
import { ReadonlyURLSearchParams } from "next/navigation";
import fetchGraphql from "@/Functions/fetchGraphql";
import { DollarData, ImageRest } from "@/Types/Common.type";
import { fetchExpressApi } from "@/Functions/fetchExpressApi";
import ErrorFetchData from "@/Components/Utilities/ErrorFetchData";

export type FridgeDataInner = {
   name: string;
   url: string;
   color: string;
   description: string;
   type: string;
   model: string;
   price: number;
   company: string;
   literVol: string;
   fridgeChamber: string;
   freezeChamber: string;
   noiseLevel: string;
   noFrost: boolean;
   size: string;
   inStock: boolean;
   markdownDescription: string;
   review: string;
   imageCollection: {
      items: FridgeImgCollection[];
   };
   image: ImageRest[];
};

type FridgeImgCollection = {
   url: string;
};

export type Data = {
   data: {
      dollarValue: {
         value: number;
      };
      fridgesCollection: {
         items: FridgeDataInner[];
      };
   };
};

export const metadata = {
   title: `Холодильники и морозильные камеры по выгодным ценам | ${process.env.BRAND}`,
   description: "Купить холодильники и морозильные камеры с гарантией и доставкой по Ташкенту",
   keywords: ["холодильники", "бытовая техника", "купить холодильник", "морозильные камеры", "ларь", "морозилка"],
};

const filterFields = [
   {
      title: "Бренды",
      titleVal: "Brands",
      list: ["Midea"],
      filterVal: ["Midea"],
      id: ["Midea4"],
   },
   {
      title: "Цвет",
      titleVal: "Color",
      list: ["Jazz Black", "Стальной"],
      filterVal: ["Jazz Black", "Стальной"],
      id: ["Jazz Black1", "Steel1"],
   },
   {
      title: "Типы",
      titleVal: "Type",
      list: ["Четырехдверный", "Однодверный", "Морозильная камера", "Ларь"],
      filterVal: ["Four-Door", "Single-Door", "Freezer", "Chest"],
      id: ["fourdoor-fridge", "onedoor-fridge", "freezer-fridge", "lar-fridge"],
   },
];

const h2title = "Холодильники";
const url = process.env.FRIDGES_LIST_URL as string;
const uri = "fridges";

async function page({ searchParams }: { searchParams: ReadonlyURLSearchParams }) {
   const urlParams = new URLSearchParams(searchParams);
   const data = await fetchExpressApi(
      `${urlParams.size > 0 ? `${process.env.BACKEND_URL}/api/fridges?${urlParams}` : `${process.env.BACKEND_URL}/api/fridges`}`
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
               items={data.fridges}
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
