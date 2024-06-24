import fetchGraphql from "@/Functions/fetchGraphql";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import GridContainer from "@/Components/Catalog/SemiIndConditioners/GridContainer";

type SemiIndImgCollection = {
   url: string;
};

export type SemiIndModelCollection = {
   name?: string;
   url?: string;
   company: string;
   temperatureRange?: string;
   isInverter: boolean;
   description?: string;
   type?: string;
   imageCollection?: {
      items: SemiIndImgCollection[];
   };
   price: number;
   model: string;
   coolingPowerBtu: string;
};

export type SemiIndDataInner = {
   name: string;
   url: string;
   company: string;
   temperatureRange: string;
   isInverter: boolean;
   type: string;
   description: string;
   imageCollection: {
      items: SemiIndImgCollection[];
   };
   semiCondModelCollection: {
      items: SemiIndModelCollection[];
   };
};

export type Data = {
   data: {
      dollarValue: {
         value: number;
      };
      semiIndustrialCollection: {
         items: SemiIndDataInner[];
      };
   };
};

export const metadata = {
   title: `Колонные кондиционеры по выгодным ценам | ${process.env.BRAND}`,
   description: "Купить колонные сплит системы, недорого, с гарантией и доставкой",
   keywords: ["колонные", "сплит-системы", "полупромышленные кондиционеры"],
};

const title = "Колонные сплит-системы";
const type = "Колонный";
const uri = "col-conditioners";

async function page() {
   const data: Data = await fetchGraphql(`
   query {
      dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
         value
      }
      semiIndustrialCollection(limit: 50) {
        items {
          name
          url
          company
          temperatureRange
          isInverter
          type
          description
          imageCollection(limit: 4) {
            items {
              url
            }
          }
          semiCondModelCollection(limit: 10) {
            items {
              price
              model
              coolingPowerBtu
            }
          }
        }
      }
    }
   `);
   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <GridContainer items={data.data.semiIndustrialCollection.items} currencyVal={data.data.dollarValue.value} title={title} type={type} uri={uri} />
         </div>
      </div>
   );
}
export default page;
