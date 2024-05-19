import fetchGraphql from "@/Functions/fetchGraphql";
import { Data } from "../../air-conditioners/[item]/page";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import Main from "@/Components/AirConditioners/Item/Main";
import MainOuter from "@/Components/Multisplit/Item/MainOuter";
import { multi } from "@/Data/multisplits.data";

async function page({ params }: { params: { item: string } }) {
   const data: Data = await fetchGraphql(`
   query {
      dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
         value
      }
      airConditionersCollection(limit: 50) {
        items {
          name
          url
          isInverter
          compressor
          temperatureRange
          company
          description
          imageCollection(limit: 99) {
            items {
              url
            }
          }
          airCondModelCollection(limit: 99) {
            items {
              price
              model
              wifiPrice
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
            <Main outerItems={data.data.airConditionersCollection.items} params={params} dollarValue={data.data.dollarValue.value} />
            <MainOuter outerItems={multi} params={params} dollarValue={data.data.dollarValue.value} />
         </div>
      </div>
   );
}
export default page;
