import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import fetchGraphql from "@/Functions/fetchGraphql";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import Grid from "@/Components/Catalog/Wash/Grid";
import { DollarData, ImageRest } from "@/Types/Common.type";
import { ReadonlyURLSearchParams } from "next/navigation";

export type WashCollection = {
   name: string;
   url: string;
   model: string;
   color: string;
   price: number;
   company: string;
   capacity: number;
   description: string;
   programNums: number;
   rpm: number;
   isDrying: boolean;
   size: string;
   inStock: boolean;
   imageCollection: {
      items: WashImgCollection[];
   };
   image: ImageRest[];
};

type WashImgCollection = {
   url: string;
};

export type Data = {
   data: {
      dollarValue: {
         value: number;
      };
      washCollection: {
         items: WashCollection[];
      };
   };
};

export const metadata = {
   title: `Стиральные машины по выгодным ценам | ${process.env.BRAND}`,
   description: "Купить стиральные машины недорого в Ташкенте",
   keywords: ["стиральные машины", "стиральные машины цены"],
};

const filterFields = [
   {
      title: "Бренды",
      titleVal: "Brands",
      list: ["Midea"],
      filterVal: ["Midea"],
      id: ["Midea5"],
   },
   {
      title: "Сушка",
      titleVal: "Drying",
      list: ["Есть", "Нет"],
      filterVal: ["yes", "no"],
      id: ["drying-true-wash", "drying-false-wash"],
   },
   {
      title: "Цвет",
      titleVal: "Color",
      list: ["Черный", "Белый"],
      filterVal: ["Black", "White"],
      id: ["black-wash", "white-wash"],
   },
];

const h2title = "Стиральные машины";
const url = process.env.WASHES_LIST_URL as string;
const uri = "wash";

async function page({ searchParams }: { searchParams: ReadonlyURLSearchParams }) {
   const urlParams = new URLSearchParams(searchParams);
   const data = await fetch(`${urlParams.size > 0 ? `${process.env.BACKEND_URL}/api/washes?${urlParams}` : `${process.env.BACKEND_URL}/api/washes`}`, {
      next: {
         revalidate: 600,
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
               items={data.washes}
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
