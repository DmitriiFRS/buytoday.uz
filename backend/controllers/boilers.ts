import { client } from "../config";
import { Request, Response } from "express";
import { BoilersType } from "../models/household";

export async function getBoilers(req: Request, res: Response) {
   try {
      const { items } = await client.getEntries({
         content_type: "boilers" as string,
      });

      let allItems: BoilersType[] = [];

      const page = Number(req.query.page) || 1;
      const perPage = 10;
      const start = (page - 1) * perPage;
      const end = page * perPage;

      items.forEach((item) => {
         allItems.push(item.fields as BoilersType);
      });

      const brandValues = (req.query.Brands as string)?.split(",");
      const efficiencyValues = (req.query.Efficiency as string)?.split(",");

      if (brandValues) {
         allItems = allItems.filter((item) => {
            return brandValues.includes(item.company);
         });
      }
      if (efficiencyValues) {
         allItems = allItems.filter((item) => {
            return efficiencyValues.includes(item.performanceFilter);
         });
      }

      const totalItems = allItems.length;
      const totalPages = Math.ceil(totalItems / perPage);
      const paginatedItems = allItems.sort((a, b) => Number(a.price) - Number(b.price)).slice(start, end);

      res.status(200).json({
         boilers: paginatedItems,
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
