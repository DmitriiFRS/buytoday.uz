"use client";
import Buy2 from "@/Components/Common/ItemCard/Buy2";
import { AirPurifiersCollection } from "@/app/catalog/air-purifiers/page";

function BuyContainer({ el }: { el: AirPurifiersCollection }) {
   return (
      <Buy2
         url={el.url}
         item={{
            id: Date.now(),
            name: "",
            url: el.url,
            company: el.company,
            image: el.imageCollection.items[0].url,
            model: el.name,
            price: el.price,
            color: undefined,
            count: 1,
         }}
      />
   );
}
export default BuyContainer;
