import { client } from "../config";
import { Request, Response } from "express";
import { WashesType } from "../models/household";

export async function getWashes(req: Request, res: Response) {
   try {
      const { items } = await client.getEntries({
         content_type: "wash" as string,
      });

      let allItems: WashesType[] = [];

      const page = Number(req.query.page) || 1;
      const perPage = 10;
      const start = (page - 1) * perPage;
      const end = page * perPage;

      items.forEach((item) => {
         allItems.push(item.fields as WashesType);
      });

      const brandValues = (req.query.Brands as string)?.split(",");
      const dryingValues = (req.query.Drying as string)?.split(",");
      const colorValues = (req.query.Color as string)?.split(",");

      if (brandValues) {
         allItems = allItems.filter((item) => {
            return brandValues.includes(item.company);
         });
      }
      if (dryingValues) {
         allItems = allItems.filter((item) => {
            if ((item.isDrying && dryingValues.includes("yes")) || (!item.isDrying && dryingValues.includes("no"))) {
               return item;
            }
         });
      }
      if (colorValues) {
         allItems = allItems.filter((item) => {
            return colorValues.includes(item.filterColor);
         });
      }
      const totalItems = allItems.length;
      const totalPages = Math.ceil(totalItems / perPage);
      const paginatedItems = allItems.sort((a, b) => Number(a.price) - Number(b.price)).slice(start, end);

      res.status(200).json({
         washes: paginatedItems,
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
