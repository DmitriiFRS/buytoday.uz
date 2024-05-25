import Main from "@/Components/Multisplit/InnerBlock/Item/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import fetchGraphql from "@/Functions/fetchGraphql";
import { Data } from "../page";

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
          description
          compressor
          temperatureRange
          isInverter
          company
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
              airFlow
              innerNoise
              innerWeight
            }
          }
        }
      }
    }
   `);
   return (
      <div>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main items={data.data.multisplitCollection.items} params={params} dollarValue={data.data.dollarValue.value} />
         </div>
      </div>
   );
}
export default page;
