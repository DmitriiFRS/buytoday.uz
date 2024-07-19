import Main from "@/Components/Catalog/SemiIndConditioners/Item/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import fetchGraphql from "@/Functions/fetchGraphql";
import { Data } from "../../../col-conditioners/[item]/page";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";

async function page({ params }: { params: { item: string } }) {
   const data: Data = await fetchGraphql(`
   query {
      dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
         value
      }
      semiIndustrialCollection {
        items {
          name
          url
          description
          temperatureRange
          isInverter
          company
          type
          markdownDescription
          review
          imageCollection(limit: 5) {
            items {
              url
            }
          }
          semiCondModelCollection {
            items {
              model
              price
              coolingPowerBtu
              coolingPowerKw
              heatPowerBtu
              heatPowerKw
              energyOutput
              aream2
              aream3
              freonQuantity
              blockSize
              outerBlockSize
              airFlow
              innerNoise
              outerNoise
              innerWeight
              outerWeight
              routeLength
              inStock
              inPromotion
              bonus
            }
          }
        }
      }
    }
   `);
   const outerItems = data.data.semiIndustrialCollection.items;
   const url = `/catalog/duct-conditioners/${params.item}`;
   const path = `${url}/description`;
   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main items={outerItems} params={params} dollarValue={data.data.dollarValue.value} url={url} path={path} />
         </div>
      </div>
   );
}
export default page;
