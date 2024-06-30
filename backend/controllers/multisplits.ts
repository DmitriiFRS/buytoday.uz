import { client } from "../config";
import { Request, Response } from "express";
import { MultiInner, MultiOuter, MultiSplitModel2 } from "../models/multi";

export async function getMultiInner(req: Request, res: Response) {
   try {
      const { items } = await client.getEntries({
         content_type: "multisplit" as string,
      });
      let allItems: (MultiInner & MultiSplitModel2)[] = [];

      const page = Number(req.query.page) || 1;
      const perPage = 10;
      const start = (page - 1) * perPage;
      const end = page * perPage;

      items.forEach((item: any) => {
         item.fields.multisplitModel.forEach((innerItem: any) => {
            innerItem.fields.company = item.fields.company;
            innerItem.fields.image = item.fields.image;
            innerItem.fields.name = item.fields.name;
            innerItem.fields.type = item.fields.type;
            innerItem.fields.url = item.fields.url;
            innerItem.fields.isInverter = item.fields.isInverter;
            allItems.push(innerItem.fields as any);
         });
      });

      const btuValues = (req.query.Power as string)?.split(",");
      const typeValues = (req.query.Type as string)?.split(",");
      const brandValues = (req.query.Brands as string)?.split(",");

      if (btuValues) {
         allItems = allItems.filter((item) => {
            return btuValues.includes(item.filterBtu);
         });
      }
      if (brandValues) {
         allItems = allItems.filter((item) => {
            return brandValues.includes(item.company);
         });
      }
      if (typeValues) {
         allItems = allItems.filter((item) => {
            return typeValues.includes(item.type);
         });
      }

      const totalItems = allItems.length;
      const totalPages = Math.ceil(totalItems / perPage);
      const paginatedItems = allItems.sort((a, b) => Number(a.coolingPowerKW) - Number(b.coolingPowerKW)).slice(start, end);

      res.status(200).json({
         multiInner: paginatedItems,
         pagination: {
            page,
            totalPages,
         },
      });
   } catch (error) {
      console.error(error);
      res.send("Error fetching products");
      res.status(500).send("Error fetching products");
   }
}

export async function getMultiOuter(req: Request, res: Response) {
   try {
      const { items } = await client.getEntries({
         content_type: "multisplit-outer" as string,
      });
      let allItems: MultiOuter[] = [];

      const page = Number(req.query.page) || 1;
      const perPage = 10;
      const start = (page - 1) * perPage;
      const end = page * perPage;

      res.send(items);
   } catch (error) {
      console.error(error);
      res.send("Error fetching products");
      res.status(500).send("Error fetching products");
   }
}
