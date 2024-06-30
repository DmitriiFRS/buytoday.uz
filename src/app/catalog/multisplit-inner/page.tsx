import fetchGraphql from "@/Functions/fetchGraphql";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import { ReadonlyURLSearchParams } from "next/navigation";
import { DollarData, ImageRest } from "@/Types/Common.type";
import Grid from "@/Components/Catalog/Multisplit/InnerBlock/Grid";

export type MultiInnerDataModel = {
   company: string;
   description?: string;
   isInverter?: boolean;
   type: string;
   name: string;
   filterBtu: string;
   temperatureRange: string;
   url: string;
   image: ImageRest[];
   price: number;
   model: string;
   coolingPowerKW: string;
   heatPowerKw: string;
   energyOutput: string;
   aream2: string;
   aream3: string;
   freonQuantity: string;
   blockSize: string;
   innerNoise: string;
   innerWeight: string;
   inStock: boolean;
};

type MultiInnerImgCollection = {
   url: string;
};

export type MultiInnerMain = {
   name: string;
   url: string;
   isInverter: boolean;
   type: string;
   temperatureRange: string;
   company: string;
   description: string;
   compressorGuarantee: string;
   inStock: boolean;
   imageCollection: {
      items: MultiInnerImgCollection[];
   };
   multisplitModelCollection: {
      items: MultiInnerDataModel[];
   };
};

export type Data = {
   data: {
      dollarValue: {
         value: number;
      };
      multisplitCollection: {
         items: MultiInnerMain[];
      };
   };
};

export const metadata = {
   title: `Внутренние блоки мульти-сплит систем | ${process.env.BRAND}`,
   description: "Купить или заказать внутренние блоки мульти-сплит систем по выгодным ценам в Ташкенте",
   keywords: ["мультисплит-системы", "сплит-системы", "кондиционеры"],
};

const filterFields = [
   {
      title: "Бренды",
      titleVal: "Brands",
      list: ["Midea", "Welkin"],
      filterVal: ["Midea", "Welkin"],
      id: ["Midea/1", "Welkin/1"],
   },
   {
      title: "Мощность",
      titleVal: "Power",
      list: ["7000 Btu/h", "9000 Btu/h", "12000 Btu/h", "18000 Btu/h", "24000 Btu/h"],
      filterVal: ["7000", "9000", "12000", "18000", "24000"],
      id: ["7000/1", "9000/1", "12000/1", "18000/1", "24000/1"],
   },
   {
      title: "Тип фена",
      titleVal: "Type",
      list: ["Настенный", "Кассетный", "Канальный"],
      filterVal: ["Настенный", "Кассетный", "Канальный"],
      id: ["multiwm", "multicas", "multiduct"],
   },
];

const url = process.env.MULTI_INNER_LIST_URL as string;

const h2title = "Внутренние мульти-сплит системы";

async function page({ searchParams }: { searchParams: ReadonlyURLSearchParams }) {
   const urlParams = new URLSearchParams(searchParams);
   const data = await fetch(`${urlParams.size > 0 ? `${process.env.BACKEND_URL}/api/multiInner?${urlParams}` : `${process.env.BACKEND_URL}/api/multiInner`}`, {
      cache: "no-cache",
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
               items={data.multiInner}
               pagination={data.pagination}
               url={url}
               currencyVal={currencyData.data.dollarValue.value}
            />
         </div>
      </div>
   );
}
export default page;
