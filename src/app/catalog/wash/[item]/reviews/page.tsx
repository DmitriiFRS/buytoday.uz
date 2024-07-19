import fetchGraphql from "@/Functions/fetchGraphql";
import { Data } from "../../page";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import Main from "@/Components/Catalog/Wash/Item/Main";

async function page({ params }: { params: { item: string } }) {
   const data: Data = await fetchGraphql(`
      query {
      dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
       value
     }
     washCollection {
       items {
         name
         url
         model
         color
         price
         company
         capacity
         description
         programNums
         rpm
         isDrying
         size
         inStock
         review
         inPromotion
        bonus
         imageCollection(limit: 4) {
           items {
             url
           }
         }
       }
     }
   }
         `);
   const url = `/catalog/wash/${params.item}`;
   const path = `${url}/reviews`;
   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main items={data.data.washCollection.items} params={params} dollarValue={data.data.dollarValue.value} url={url} path={path} />
         </div>
      </div>
   );
}
export default page;
