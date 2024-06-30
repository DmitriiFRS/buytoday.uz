import { client } from "../config";
import { Request, Response } from "express";
import { AirPurifiersType } from "../models/household";

export async function getPurifiers(req: Request, res: Response) {
   try {
      const { items } = await client.getEntries({
         content_type: "air-purifiers" as string,
      });

      let allItems: AirPurifiersType[] = [];

      const page = Number(req.query.page) || 1;
      const perPage = 10;
      const start = (page - 1) * perPage;
      const end = page * perPage;

      items.forEach((item) => {
         allItems.push(item.fields as AirPurifiersType);
      });

      const brandValues = (req.query.Brands as string)?.split(",");
      const typeValues = (req.query.Type as string)?.split(",");

      if (brandValues) {
         allItems = allItems.filter((item) => {
            return brandValues.includes(item.company);
         });
      }
      if (typeValues) {
         allItems = allItems.filter((item) => {
            return typeValues.includes(item.filterType);
         });
      }

      const totalItems = allItems.length;
      const totalPages = Math.ceil(totalItems / perPage);
      const paginatedItems = allItems.sort((a, b) => Number(a.price) - Number(b.price)).slice(start, end);

      res.status(200).json({
         purifiers: paginatedItems,
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
