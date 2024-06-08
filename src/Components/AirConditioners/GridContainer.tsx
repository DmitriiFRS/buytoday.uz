"use client";

import { AircondDataInner, AircondDataModel } from "@/app/catalog/air-conditioners/page";
import Grid from "./Grid";
import { useEffect, useState } from "react";

function GridContainer({ items, currencyVal }: { items: AircondDataInner[]; currencyVal: number }) {
   const [currentItems, setCurrentItems] = useState<AircondDataModel[]>([]);
   useEffect(() => {
      const temp: AircondDataModel[] = [];
      items.map((el) => {
         el.airCondModelCollection.items.map((elInner) => {
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
