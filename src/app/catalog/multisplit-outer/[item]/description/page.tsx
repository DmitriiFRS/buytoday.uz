import fetchGraphql from "@/Functions/fetchGraphql";
import { Data } from "../../page";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import Main from "@/Components/Catalog/Multisplit/OuterBlock/Item/Main";

async function page({ params }: { params: { item: string } }) {
   const data: Data = await fetchGraphql(`
      query {
      dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
    value
   }
      multisplitOuterCollection {
    items {
      name
      url
      model
      price
      company
      markdownDescription
      review
      imageCollection(limit: 4) {
        items {
          url
        }
      }
      compressor
      description
      connect
      coolingCapacity
      coolingOutput
      coolingAmperage
      eer
      heatingCapacity
      heatingOutput
      heatingAmperage
      cop
      airFlow
      size
      inStock
    }
  }
}
      `);

   const url = `/catalog/multisplit-outer/${params.item}`;
   const path = `${url}/description`;

   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main items={data.data.multisplitOuterCollection.items} params={params} dollarValue={data.data.dollarValue.value} url={url} path={path} />
         </div>
      </div>
   );
}
export default page;
