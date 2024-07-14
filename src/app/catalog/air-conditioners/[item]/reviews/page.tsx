import Main from "@/Components/Catalog/AirConditioners/Item/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import fetchGraphql from "@/Functions/fetchGraphql";
import { Data, Seo } from "../page";

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
          review
          imageCollection(limit: 4) {
            items {
              url
            }
          }
          airCondModelCollection(limit: 10) {
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
            }
          }
        }
      }
    }
   `);
   const outerItems = data.data.airConditionersCollection.items;
   const url = `/catalog/air-conditioners/${params.item}`;
   const path = `/catalog/air-conditioners/${params.item}/reviews`;
   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main outerItems={outerItems} params={params} dollarValue={data.data.dollarValue.value} url={url} path={path} />
         </div>
      </div>
   );
}
export default page;
