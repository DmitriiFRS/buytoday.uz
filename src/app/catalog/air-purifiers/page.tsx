import fetchGraphql from "@/Functions/fetchGraphql";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import Grid from "@/Components/Catalog/AirPurifiers/Grid";

export type AirPurifiersCollection = {
   name: string;
   url: string;
   price: number;
   company: string;
   voltage: string;
   imageCollection: {
      items: AirPurifiersImgCollection[];
   };
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

async function page() {
   const data: Data = await fetchGraphql(`
      query {
      dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
      value
      } 
         airPurifiersCollection {
      items {
         name
         url
         price
         company
         voltage
         imageCollection(limit: 4) {
         items {
            url
            }
         }
      }
  }
}
      `);
   const title = "Очистители - увлажнители";
   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Grid items={data.data.airPurifiersCollection.items} currencyVal={data.data.dollarValue.value} title={title} />
         </div>
      </div>
   );
}
export default page;
