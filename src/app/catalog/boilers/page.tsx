import fetchGraphql from "@/Functions/fetchGraphql";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import Grid from "@/Components/Catalog/Boilers/Grid";

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
   imageCollection: {
      items: BoilersImgCollection[];
   };
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

const title = "Газовые котлы";
const uri = "boilers";

async function page() {
   const data: Data = await fetchGraphql(`
         query {
         dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
      value
   } 
      boilersCollection {
         items {
            name
            url
            price
            company
            imageCollection(limit: 4) {
            items {
               url
            }
               }
            performanceMax
            performanceFilter
            gasFlow
       }
   }
}
      `);
   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Grid items={data.data.boilersCollection.items} currencyVal={data.data.dollarValue.value} title={title} uri={uri} />
         </div>
      </div>
   );
}
export default page;
