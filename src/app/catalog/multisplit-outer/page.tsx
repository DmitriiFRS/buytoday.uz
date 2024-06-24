import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";
import fetchGraphql from "@/Functions/fetchGraphql";
import Grid from "@/Components/Catalog/Multisplit/OuterBlock/Grid";

const title = "Наружные блоки мульти-сплит системы";
const uri = "multisplit-outer";

type MultiOuterImgCollection = {
   url: string;
};

export type MultiOuterCollection = {
   name: string;
   url: string;
   model: string;
   price: number;
   company: string;
   imageCollection: {
      items: MultiOuterImgCollection[];
   };
   compressor: string;
   description: string;
   connect: string;
   coolingCapacity: string;
   coolingOutput: string;
   coolingAmperage: string;
   eer: string;
   heatingCapacity: string;
   heatingOutput: string;
   heatingAmperage: string;
   cop: string;
   airFlow: string;
   size: string;
   inStock: boolean;
};

export type Data = {
   data: {
      dollarValue: {
         value: number;
      };
      multisplitOuterCollection: {
         items: MultiOuterCollection[];
      };
   };
};

export const metadata = {
   title: `Наружные блоки мульти-сплит систем | ${process.env.BRAND}`,
   description: "Купить или заказать наружные блоки мульти-сплит систем по выгодным ценам в Ташкенте",
   keywords: ["мультисплит-системы", "сплит-системы", "кондиционеры"],
};

async function page() {
   const data: Data = await fetchGraphql(`
   query {
   dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
    value
  }
   multisplitOuterCollection {
      items {
         name
         url
         model
         price
         company
         imageCollection(limit: 4) {
         items {
            url
         }
         }
         compressor
      }
   }
}
      `);
   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Grid items={data.data.multisplitOuterCollection.items} currencyVal={data.data.dollarValue.value} title={title} uri={uri} />
         </div>
      </div>
   );
}
export default page;
