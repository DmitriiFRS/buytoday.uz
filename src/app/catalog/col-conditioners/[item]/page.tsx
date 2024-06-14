import Main from "@/Components/SemiIndConditioners/Item/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import fetchGraphql from "@/Functions/fetchGraphql";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";

export type SemiIndDataModel = {
   model: string;
   price: number;
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

export type SemiIndImgCollection = {
   url: string;
};

export type SemiIndDataInner = {
   name: string;
   url: string;
   description: string;
   temperatureRange: string;
   isInverter: boolean;
   company: string;
   type: string;
   imageCollection: {
      items: SemiIndImgCollection[];
   };
   semiCondModelCollection: {
      items: SemiIndDataModel[];
   };
};

export type Data = {
   data: {
      dollarValue: {
         value: number;
      };
      semiIndustrialCollection: {
         items: SemiIndDataInner[];
      };
   };
};

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
            }
          }
        }
      }
    }
   `);
   const outerItems = data.data.semiIndustrialCollection.items;
   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main items={outerItems} params={params} dollarValue={data.data.dollarValue.value} />
         </div>
      </div>
   );
}
export default page;
