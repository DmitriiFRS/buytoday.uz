import Main from "@/Components/Catalog/Multisplit/InnerBlock/Item/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import fetchGraphql from "@/Functions/fetchGraphql";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import { Data } from "../../page";

async function page({ params }: { params: { item: string } }) {
   const data: Data = await fetchGraphql(`
   query {
      dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
         value
      }
      multisplitCollection(limit: 50) {
        items{
          name
          url
          type
          description
          temperatureRange
          isInverter
          company
          markdownDescription
          review
          imageCollection(limit: 4) {
            items {
              url
            }
          }
          multisplitModelCollection(limit: 99) {
            items {
              model
              price
              coolingPowerKw
              heatPowerKw
              energyOutput
              aream2
              aream3
              freonQuantity
              blockSize
              innerNoise
              innerWeight
              inStock
              inPromotion
              bonus
            }
          }
        }
      }
    }
   `);
   const url = `/catalog/multisplit-inner/${params.item}`;
   const path = `${url}/description`;
   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main items={data.data.multisplitCollection.items} params={params} dollarValue={data.data.dollarValue.value} url={url} path={path} />
         </div>
      </div>
   );
}
export default page;
