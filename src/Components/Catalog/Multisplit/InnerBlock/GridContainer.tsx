"use client";

import { MultiInnerDataModel, MultiInnerMain } from "@/app/catalog/multisplit-inner/page";
import { useEffect, useState } from "react";
import Grid from "./Grid";
import Loader from "@/Components/Utilities/Loader";
import styles from "../../../Utilities/Utilities.module.scss";

type Props = {
   items: MultiInnerMain[];
   currencyVal: number;
   title: string;
   uri: string;
};

function GridContainer({ items, currencyVal, title, uri }: Props) {
   const [currentItems, setCurrentItems] = useState<MultiInnerDataModel[]>([]);
   useEffect(() => {
      const temp: MultiInnerDataModel[] = [];
      items.map((el) => {
         el.multisplitModelCollection.items.map((elInner) => {
            elInner.company = el.company;
            elInner.description = el.description;
            elInner.imageCollection = el.imageCollection;
            elInner.isInverter = el.isInverter;
            elInner.name = el.name;
            elInner.temperatureRange = el.temperatureRange;
            elInner.url = el.url;
            elInner.type = el.type;
            temp.push(elInner);
         });
      });
      setCurrentItems(temp);
   }, []);
   return currentItems.length > 0 ? (
      <Grid items={currentItems} currencyVal={currencyVal} title={title} uri={uri} />
   ) : (
      <Loader className={styles.loader__aircondList} />
   );
}
export default GridContainer;
