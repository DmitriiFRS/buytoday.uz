import fetchGraphql from "@/Functions/fetchGraphql";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import Grid from "@/Components/Multisplit/Grid";

export type MultiInnerDataModel = {
   price: number;
   model: string;
   coolingPowerKw: string;
   heatPowerKw: string;
   energyOutput: string;
   aream2: string;
   aream3: string;
   freonQuantity: string;
   blockSize: string;
   airFlow: string;
   innerNoise: string;
   innerWeight: string;
};

type MultiInnerImgCollection = {
   url: string;
};

export type MultiInnerMain = {
   name: string;
   url: string;
   isInverter: boolean;
   compressor: string;
   temperatureRange: string;
   company: string;
   description: string;
   imageCollection: {
      items: MultiInnerImgCollection[];
   };
   multisplitModelCollection: {
      items: MultiInnerDataModel[];
   };
};

export type Data = {
   data: {
      dollarValue: {
         value: number;
      };
      multisplitCollection: {
         items: MultiInnerMain[];
      };
   };
};

async function page() {
   const data: Data = await fetchGraphql(`
   query {
      dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
         value
      }
      multisplitCollection(limit: 50) {
        items{
          name
          url
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
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Grid items={data.data.multisplitCollection.items} currencyVal={data.data.dollarValue.value} />
         </div>
      </div>
   );
}
export default page;
