import { client } from "../config";
import { Request, Response } from "express";
import { SemiInd } from "../models/semiInd";

export async function getSemiIndustrial(req: Request, res: Response) {
   try {
      const { items } = await client.getEntries({
         content_type: "semi-industrial" as string,
      });
      let allItems: SemiInd[] = [];

      const page = Number(req.query.page) || 1;
      const perPage = 10;
      const start = (page - 1) * perPage;
      const end = page * perPage;

      res.status(200).json(items[0].fields);
   } catch (error) {
      console.error(error);
      res.send("Error fetching products");
      res.status(500).send("Error fetching products");
   }
}
