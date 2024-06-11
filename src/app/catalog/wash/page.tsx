import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import fetchGraphql from "@/Functions/fetchGraphql";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import Grid from "@/Components/Wash/Grid";

export type WashCollection = {
   name: string;
   url: string;
   model: string;
   color: string;
   price: number;
   company: string;
   capacity: number;
   description: string;
   programNums: number;
   rpm: number;
   isDrying: string;
   size: string;
   imageCollection: {
      items: WashImgCollection[];
   };
};

type WashImgCollection = {
   url: string;
};

type Data = {
   data: {
      dollarValue: {
         value: number;
      };
      washCollection: {
         items: WashCollection[];
      };
   };
};

async function page() {
   const data: Data = await fetchGraphql(`
   query {
   dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
    value
  }
  washCollection {
    items {
      name
      url
      model
      color
      price
      company
      capacity
      description
      programNums
      rpm
      isDrying
      size
      imageCollection(limit: 4) {
        items {
          url
        }
      }
    }
  }
}
      `);
   const title = "Стиральные машины";
   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Grid items={data.data.washCollection.items} currencyVal={data.data.dollarValue.value} title={title} />
         </div>
      </div>
   );
}
export default page;
