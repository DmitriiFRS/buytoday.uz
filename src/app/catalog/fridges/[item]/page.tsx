import fetchGraphql from "@/Functions/fetchGraphql";
import { Data } from "../page";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import Main from "@/Components/Catalog/Fridges/Item/Main";

async function page({ params }: { params: { item: string } }) {
   const data: Data = await fetchGraphql(`
      query {
dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
 value
}
fridgesCollection {
 items {
   name
   url
   color
   model
   price
   company
   noFrost
   literVol
   fridgeChamber
   freezeChamber
   noiseLevel
   description
   size
   inStock
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
            <Main items={data.data.fridgesCollection.items} params={params} dollarValue={data.data.dollarValue.value} />
         </div>
      </div>
   );
}
export default page;
