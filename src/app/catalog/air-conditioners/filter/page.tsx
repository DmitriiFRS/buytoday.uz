import fetchGraphql from "@/Functions/fetchGraphql";
import { Data } from "../[item]/page";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";

import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import Grid from "@/Components/AirConditioners/Filter/Grid";

async function page() {
   const data: Data = await fetchGraphql(`
   query {
    dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
      value
    }
    airConditionersCollection {
      items {
        name
        url
        description
        compressor
        temperatureRange
        isInverter
        company
        imageCollection(limit: 5) {
          items {
            url
          }
        }
        airCondModelCollection {
          items {
            model
            price
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
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Grid items={data.data.airConditionersCollection.items} currencyVal={data.data.dollarValue.value} />
         </div>
      </div>
   );
}
export default page;
