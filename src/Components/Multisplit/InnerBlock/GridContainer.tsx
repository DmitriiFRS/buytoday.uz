"use client";

import { MultiInnerDataModel, MultiInnerMain } from "@/app/catalog/multisplit-inner/page";
import { useEffect, useState } from "react";
import Grid from "./Grid";

function GridContainer({ items, currencyVal }: { items: MultiInnerMain[]; currencyVal: number }) {
   const [currentItems, setCurrentItems] = useState<MultiInnerDataModel[]>([]);
   useEffect(() => {
      const temp: MultiInnerDataModel[] = [];
      items.map((el) => {
         el.multisplitModelCollection.items.map((elInner) => {
            elInner.company = el.company;
            elInner.compressor = el.compressor;
            elInner.description = el.description;
            elInner.imageCollection = el.imageCollection;
            elInner.isInverter = el.isInverter;
            elInner.name = el.name;
            elInner.temperatureRange = el.temperatureRange;
            elInner.url = el.url;
            temp.push(elInner);
         });
      });
      setCurrentItems(temp);
   }, []);
   return currentItems.length > 0 && <Grid items={currentItems} currencyVal={currencyVal} />;
}
export default GridContainer;
