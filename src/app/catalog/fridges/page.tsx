import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import fetchGraphql from "@/Functions/fetchGraphql";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import Grid from "@/Components/Catalog/Fridges/Grid";

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
   imageCollection: {
      items: FridgeImgCollection[];
   };
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
   title: "Холодильники по выгодным ценам | Amazon-Asia",
   description: "Купить холодильники с гарантией и доставкой по Ташкенту",
   keywords: ["холодильники", "бытовая техника", "купить холодильник"],
};

const title = "Холодильники";
const uri = "fridges";

async function page() {
   const data: Data = await fetchGraphql(`
         query {
  dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
    value
  }
  fridgesCollection {
    items {
      name
      url
      description
      color
      model
      price
      company
      noFrost
      literVol
      fridgeChamber
      freezeChamber
      noiseLevel
      size
      type
      imageCollection(limit: 4) {
        items {
          url
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
            <Grid items={data.data.fridgesCollection.items} currencyVal={data.data.dollarValue.value} title={title} uri={uri} />
         </div>
      </div>
   );
}
export default page;
