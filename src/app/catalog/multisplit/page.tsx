import fetchGraphql from "@/Functions/fetchGraphql";
import { Data } from "../air-conditioners/page";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import Grid from "@/Components/Multisplit/Grid";
import { multi } from "@/Data/multisplits.data";

async function page() {
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
          imageCollection(limit: 99) {
            items {
              url
            }
          }
          airCondModelCollection(limit: 99) {
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
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Grid innerItems={data.data.airConditionersCollection.items} outerItems={multi} currencyVal={data.data.dollarValue.value} />
         </div>
      </div>
   );
}
export default page;
