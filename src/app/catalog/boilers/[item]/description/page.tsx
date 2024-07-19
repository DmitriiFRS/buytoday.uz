import fetchGraphql from "@/Functions/fetchGraphql";
import { Data } from "../../page";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import Main from "@/Components/Catalog/Boilers/Item/Main";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";

async function page({ params }: { params: { item: string } }) {
   const data: Data = await fetchGraphql(`
         query {
         dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
   value
      }
  boilersCollection {
    items {
      name
      url
      price
      company
      imageCollection(limit: 4) {
        items {
          url
        }
      }
      performanceMax
      performanceMin
      gasFlow
      description
      gasType
      pressure
      efficiency
      heatTempaerature
      temperatureWater
      workPressure
      voltage
      heatOutput
      size
      tankSize
      literMin25
      literMin30
      maxMinGasPressure
      oxygenSupply
      chamberType
      inStock
      markdownDescription
      review
      inPromotion
      bonus
    }
  }
}
      `);
   const url = `/catalog/boilers/${params.item}`;
   const path = `${url}/description`;
   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main items={data.data.boilersCollection.items} params={params} dollarValue={data.data.dollarValue.value} url={url} path={path} />
         </div>
      </div>
   );
}
export default page;
