import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import fetchGraphql from "@/Functions/fetchGraphql";
import GridContainer from "@/Components/Catalog/AirConditioners/GridContainer";

export type AircondDataModel = {
   company: string;
   compressor?: string;
   description?: string;
   isInverter?: boolean;
   name: string;
   temperatureRange: string;
   url: string;
   imageCollection?: {
      items: AicondImgCollection[];
   };
   price: number;
   model: string;
   wifiPrice: number;
   filterBtu: string;
   coolingPowerBtu: string;
   coolingPowerKw: string;
   heatPowerBtu: string;
   heatPowerKw: string;
   energyOutput: string;
   aream2: string;
   aream3: string;
   freonQuantity: string;
   blockSize: string;
   outerBlockSize: string;
   airFlow: string;
   innerNoise: string;
   outerNoise: string;
   innerWeight: string;
   outerWeight: string;
   routeLength: string;
};

type AicondImgCollection = {
   url: string;
};

export type AircondDataInner = {
   name: string;
   url: string;
   isInverter: boolean;
   compressor: string;
   temperatureRange: string;
   company: string;
   description: string;
   imageCollection: {
      items: AicondImgCollection[];
   };
   airCondModelCollection: {
      items: AircondDataModel[];
   };
};

export type Data = {
   data: {
      dollarValue: {
         value: number;
      };
      airConditionersCollection: {
         items: AircondDataInner[];
      };
   };
};

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
              filterBtu
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
            <GridContainer items={data.data.airConditionersCollection.items} currencyVal={data.data.dollarValue.value} />
         </div>
      </div>
   );
}
export default page;
