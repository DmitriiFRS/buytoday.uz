"use client";

import { SemiIndDataInner, SemiIndModelCollection } from "@/app/catalog/col-conditioners/page";
import { useEffect, useState } from "react";
import Grid from "./Grid";

type Props = {
   type: string;
   uri: string;
   title: string;
   items: SemiIndDataInner[];
   currencyVal: number;
};

function GridContainer({ type, uri, title, items, currencyVal }: Props) {
   const [currentItems, setCurrentItems] = useState<SemiIndModelCollection[]>([]);
   useEffect(() => {
      const temp: SemiIndModelCollection[] = [];
      items.map((el) => {
         if (el.type === type) {
            el.semiCondModelCollection.items.map((elInner) => {
               elInner.company = el.company;
               elInner.description = el.description;
               elInner.imageCollection = el.imageCollection;
               elInner.isInverter = el.isInverter;
               elInner.name = el.name;
               elInner.temperatureRange = el.temperatureRange;
               elInner.url = el.url;
               temp.push(elInner);
            });
         }
      });
      setCurrentItems(temp);
   }, []);

   return currentItems.length > 0 && <Grid title={title} uri={uri} items={currentItems} currencyVal={currencyVal} />;
}
export default GridContainer;
