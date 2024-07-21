import Main from "@/Components/Catalog/SemiIndConditioners/Item/Main";
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
   inStock: boolean;
   inPromotion: boolean;
   bonus: string;
   seoTitle: string;
   seoDescription: string;
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
   inStock: boolean;
   markdownDescription: string;
   review: string;
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

export type Seo = {
   model: string;
   seoTitle: string;
   seoDescription: string;
};

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
   const url = `/catalog/col-conditioners/${params.item}`;
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
