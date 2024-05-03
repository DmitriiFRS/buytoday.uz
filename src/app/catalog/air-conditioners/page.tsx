import Grid from "@/Components/AirConditioners/Grid";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/AirConditioners/AirConditioners.module.scss";
import fetchGraphql from "@/Functions/fetchGraphql";

type AircondDataModel = {
   price: number;
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
   imageCollection: {
      items: AicondImgCollection[];
   };
   airCondModelCollection: {
      items: AircondDataModel[];
   };
};

export type Data = {
   data: {
      airConditionersCollection: {
         items: AircondDataInner[];
      };
   };
};

async function page() {
   const data: Data = await fetchGraphql(`
   query {
      airConditionersCollection(limit: 50) {
        items {
          name
          url
          isInverter
          compressor
          temperatureRange
          imageCollection(limit: 99) {
            items {
              url
            }
          }
          airCondModelCollection(limit: 99) {
            items {
              price
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
            <Grid items={data.data.airConditionersCollection.items} />
         </div>
      </div>
   );
}
export default page;
