"use client";

import Buy2 from "@/Components/Common/ItemCard/Buy2";
import { setItemsCount } from "@/Redux/Slices/OrderCart.slice";
import { WashCollection } from "@/app/catalog/wash/page";

function BuyContainer({ el }: { el: WashCollection }) {
   return (
      <Buy2
         url={el.url}
         dispatcher={setItemsCount}
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
