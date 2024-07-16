import { client } from "../config";
import { Request, Response } from "express";
import { SemiInd } from "../models/semiInd";

export async function getColConditioners(req: Request, res: Response) {
   try {
      const { items } = await client.getEntries({
         content_type: "semi-industrial" as string,
      });
      let allItems: SemiInd[] = [];

      const page = Number(req.query.page) || 1;
      const perPage = 10;
      const start = (page - 1) * perPage;
      const end = page * perPage;

      items.forEach((item: any) => {
         if (item.fields.type === "Колонный") {
            item.fields.semiCondModel.forEach((innerItem: any) => {
               innerItem.fields.company = item.fields.company;
               innerItem.fields.image = item.fields.image;
               innerItem.fields.isInverter = item.fields.isInverter;
               innerItem.fields.name = item.fields.name;
               innerItem.fields.type = item.fields.type;
               innerItem.fields.url = item.fields.url;
               allItems.push(innerItem.fields as any);
            });
         }
      });

      const btuValues = (req.query.Power as string)?.split(",");
      const compressorType = (req.query.CompressorType as string)?.split(",");
      const brandValues = (req.query.Brands as string)?.split(",");

      if (btuValues) {
         allItems = allItems.filter((item) => {
            return btuValues.includes(item.coolingPowerBtu);
         });
      }
      if (compressorType) {
         allItems = allItems.filter((item) => {
            if ((item.isInverter && compressorType.includes("yes")) || (!item.isInverter && compressorType.includes("no"))) {
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
         cols: paginatedItems,
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

export async function getDuctConditioners(req: Request, res: Response) {
   try {
      const { items } = await client.getEntries({
         content_type: "semi-industrial" as string,
      });
      let allItems: SemiInd[] = [];

      const page = Number(req.query.page) || 1;
      const perPage = 10;
      const start = (page - 1) * perPage;
      const end = page * perPage;

      items.forEach((item: any) => {
         if (item.fields.type === "Канальный") {
            item.fields.semiCondModel.forEach((innerItem: any) => {
               innerItem.fields.company = item.fields.company;
               innerItem.fields.image = item.fields.image;
               innerItem.fields.isInverter = item.fields.isInverter;
               innerItem.fields.name = item.fields.name;
               innerItem.fields.type = item.fields.type;
               innerItem.fields.url = item.fields.url;
               allItems.push(innerItem.fields as any);
            });
         }
      });

      const btuValues = (req.query.Power as string)?.split(",");
      const compressorType = (req.query.CompressorType as string)?.split(",");
      const brandValues = (req.query.Brands as string)?.split(",");

      if (btuValues) {
         allItems = allItems.filter((item) => {
            return btuValues.includes(item.coolingPowerBtu);
         });
      }
      if (compressorType) {
         allItems = allItems.filter((item) => {
            if ((item.isInverter && compressorType.includes("yes")) || (!item.isInverter && compressorType.includes("no"))) {
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
         cols: paginatedItems,
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

export async function getCasConditioners(req: Request, res: Response) {
   try {
      const { items } = await client.getEntries({
         content_type: "semi-industrial" as string,
      });
      let allItems: SemiInd[] = [];

      const page = Number(req.query.page) || 1;
      const perPage = 10;
      const start = (page - 1) * perPage;
      const end = page * perPage;

      items.forEach((item: any) => {
         if (item.fields.type === "Кассетный") {
            item.fields.semiCondModel.forEach((innerItem: any) => {
               innerItem.fields.company = item.fields.company;
               innerItem.fields.image = item.fields.image;
               innerItem.fields.isInverter = item.fields.isInverter;
               innerItem.fields.name = item.fields.name;
               innerItem.fields.type = item.fields.type;
               innerItem.fields.url = item.fields.url;
               allItems.push(innerItem.fields as any);
            });
         }
      });

      const btuValues = (req.query.Power as string)?.split(",");
      const compressorType = (req.query.CompressorType as string)?.split(",");
      const brandValues = (req.query.Brands as string)?.split(",");

      if (btuValues) {
         allItems = allItems.filter((item) => {
            return btuValues.includes(item.coolingPowerBtu);
         });
      }
      if (compressorType) {
         allItems = allItems.filter((item) => {
            if ((item.isInverter && compressorType.includes("yes")) || (!item.isInverter && compressorType.includes("no"))) {
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
         cols: paginatedItems,
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
