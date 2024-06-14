"use client";
import Buy2 from "@/Components/Common/ItemCard/Buy2";
import { BoilersCollection } from "@/app/catalog/boilers/page";

function BuyContainer({ el }: { el: BoilersCollection }) {
   return (
      <Buy2
         url={el.url}
         item={{
            id: Date.now(),
            name: "Газовый котел",
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
