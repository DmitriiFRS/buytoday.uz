import fetchGraphql from "@/Functions/fetchGraphql";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import Grid from "@/Components/SemiIndConditioners/Grid";

type SemiIndImgCollection = {
   url: string;
};

type SemiIndModelCollection = {
   price: number;
   model: string;
};

export type SemiIndDataInner = {
   name: string;
   url: string;
   company: string;
   temperatureRange: string;
   isInverter: boolean;
   type: string;
   imageCollection: {
      items: SemiIndImgCollection[];
   };
   semiCondModelCollection: {
      items: SemiIndModelCollection[];
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

const title = "Кассетные сплит-системы";
const type = "Кассетный";
const uri = "cassette-conditioners";

async function page() {
   const data: Data = await fetchGraphql(`
   query {
      dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
         value
      }
      semiIndustrialCollection(limit: 50) {
        items {
          name
          url
          company
          temperatureRange
          isInverter
          type
          imageCollection(limit: 99) {
            items {
              url
            }
          }
          semiCondModelCollection(limit: 99) {
            items {
              price
              model
            }
          }
        }
      }
    }
   `);
   return (
      <div className={styles.semi}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Grid items={data.data.semiIndustrialCollection.items} currencyVal={data.data.dollarValue.value} title={title} type={type} uri={uri} />
         </div>
      </div>
   );
}
export default page;
