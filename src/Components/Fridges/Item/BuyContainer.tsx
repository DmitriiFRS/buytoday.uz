"use client";

import { FridgeDataInner } from "@/app/catalog/fridges/page";
import Buy2 from "@/Components/Common/ItemCard/Buy2";

function BuyContainer({ el }: { el: FridgeDataInner }) {
   return (
      <Buy2
         url={el.url}
         item={{
            id: Date.now(),
            name: el.name,
            url: el.url,
            company: el.company,
            image: el.imageCollection.items[0].url,
            model: el.model,
            price: el.price,
            color: el.color,
            count: 1,
         }}
      />
   );
}
export default BuyContainer;
