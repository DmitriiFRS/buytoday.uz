import { client } from "../config";
import { AircondOuterInner, Airconds } from "../models/airconds";
import { Request, Response } from "express";

export async function getAirconds(req: Request, res: Response) {
   try {
      const { items } = await client.getEntries({
         content_type: "air-conditioners" as string,
      });
      let allItems: Airconds[] = [];

      const page = Number(req.query.page) || 1;
      const perPage = 10;
      const start = (page - 1) * perPage;
      const end = page * perPage;

      items.forEach((item: any) => {
         item.fields.airCondModel.forEach((innerItem: AircondOuterInner) => {
            innerItem.fields.company = item.fields.company;
            innerItem.fields.compressor = item.fields.compressor;
            innerItem.fields.image = item.fields.image;
            innerItem.fields.isInverter = item.fields.isInverter;
            innerItem.fields.name = item.fields.name;
            innerItem.fields.temperatureRange = item.fields.temperatureRange;
            innerItem.fields.url = item.fields.url;
            allItems.push(innerItem.fields as any);
         });
      });
      const btuValues = (req.query.Power as string)?.split(",");
      const wifiValues = (req.query.Wifi as string)?.split(",");
      const brandValues = (req.query.Brands as string)?.split(",");

      if (btuValues) {
         allItems = allItems.filter((item) => {
            return btuValues.includes(item.filterBtu);
         });
      }
      if (wifiValues) {
         allItems = allItems.filter((item) => {
            if ((item.wifiPrice && wifiValues.includes("yes")) || (!item.wifiPrice && wifiValues.includes("no"))) {
               return item;
            }
         });
      }
      if (brandValues) {
         allItems = allItems.filter((item) => {
            return brandValues.includes(item.company);
         });
      }

      const totalItems = allItems.length;
      const totalPages = Math.ceil(totalItems / perPage);
      const paginatedItems = allItems.sort((a, b) => Number(a.price) - Number(b.price)).slice(start, end);

      res.status(200).json({
         airconds: paginatedItems,
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
