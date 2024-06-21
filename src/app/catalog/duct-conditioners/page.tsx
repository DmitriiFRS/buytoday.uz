import fetchGraphql from "@/Functions/fetchGraphql";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import GridContainer from "@/Components/Catalog/SemiIndConditioners/GridContainer";
import { Data } from "../col-conditioners/page";

export const metadata = {
   title: "Канальные сплит-системы по выгодным ценам | Amazon-Asia",
   description: "Купить канальные сплит системы, недорого, с гарантией и доставкой",
   keywords: ["канальные", "сплит-системы", "полупромышленные кондиционеры"],
};

const title = "Канальные сплит-системы";
const type = "Канальный";
const uri = "duct-conditioners";

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
             description
             imageCollection(limit: 4) {
               items {
                 url
               }
             }
             semiCondModelCollection(limit: 10) {
               items {
                 price
                 model
                 coolingPowerBtu
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
            <GridContainer items={data.data.semiIndustrialCollection.items} currencyVal={data.data.dollarValue.value} title={title} type={type} uri={uri} />
         </div>
      </div>
   );
}
export default page;
