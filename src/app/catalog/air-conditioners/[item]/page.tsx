import Main from "@/Components/Catalog/AirConditioners/Item/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import fetchGraphql from "@/Functions/fetchGraphql";

export type AircondDataModel = {
   company?: string;
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
   inStock: boolean;
   seoTitle: string;
   seoDescription: string;
   bonus: string;
   inPromotion: boolean;
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
   description1: string;
   description2: string;
   description3: string;
   description4: string;
   inStock: boolean;
   review: string;
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

export type Seo = {
   model: string;
   seoTitle: string;
   seoDescription: string;
};

export async function generateMetadata({ params }: { params: { item: string } }) {
   const data: Data = await fetchGraphql(
      `
      query {
      airConditionersCollection(limit: 50) {
        items {
          name
          url
          airCondModelCollection(limit: 50) {
            items {
              model
              seoTitle
              seoDescription
            }
          }
        }
      }
    }
      `
   );
   let seoData: Seo | undefined;
   data.data.airConditionersCollection.items.find((el) => {
      if (el.airCondModelCollection.items.find((item) => item.model.replace(/\s|\//g, "-").toLowerCase() === params.item)) {
         el.airCondModelCollection.items.find((elInner) => {
            if (elInner.model.replace(/\s|\//g, "-").toLowerCase() === params.item) {
               seoData = elInner;
            }
         });
      }
   });
   return {
      title: `${seoData?.seoTitle} | Buy Today` || "Настенные кондиционеры с гарантией качества",
      description: `${seoData?.seoDescription}, Бесплатная доставка по г. Ташкент` || "Настенный кондиционер с бесплатной доставкой по г. Ташкент",
   };
}

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
          description1
          review
          imageCollection(limit: 4) {
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
              inStock
              bonus
              inPromotion
            }
          }
        }
      }
    }
   `);
   const outerItems = data.data.airConditionersCollection.items;
   const url = `/catalog/air-conditioners/${params.item}`;
   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main outerItems={outerItems} params={params} dollarValue={data.data.dollarValue.value} url={url} />
         </div>
      </div>
   );
}
export default page;
