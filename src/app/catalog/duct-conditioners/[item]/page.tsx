import Main from "@/Components/Catalog/SemiIndConditioners/Item/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import fetchGraphql from "@/Functions/fetchGraphql";
import { Data, Seo } from "../../col-conditioners/[item]/page";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";

export async function generateMetadata({ params }: { params: { item: string } }) {
   const data: Data = await fetchGraphql(
      `
    query {
    semiIndustrialCollection(limit: 50) {
      items {
        name
        url
        semiCondModelCollection(limit: 50) {
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
   data.data.semiIndustrialCollection.items.find((el) => {
      if (el.semiCondModelCollection.items.find((item) => item.model.replace(/\s|\//g, "-").toLowerCase() === params.item)) {
         el.semiCondModelCollection.items.find((elInner) => {
            if (elInner.model.replace(/\s|\//g, "-").toLowerCase() === params.item) {
               seoData = elInner;
            }
         });
      }
   });
   return {
      title: `${seoData?.seoTitle} | Buy Today` || "Полупромышленные кондиционеры с гарантией качества",
      description: `${seoData?.seoDescription}, Бесплатная доставка по г. Ташкент` || "Полупромышленный кондиционер с бесплатной доставкой по г. Ташкент",
   };
}

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
   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main items={outerItems} params={params} dollarValue={data.data.dollarValue.value} url={url} />
         </div>
      </div>
   );
}
export default page;
