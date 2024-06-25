import express from "express";
import { Request, Response } from "express";
import * as contentful from "contentful";
import "dotenv/config";
const app = express();
const port = 4001;

app.get("/api", (req: Request, res: Response) => {
   console.log(process.env.CONTENTFUL_SPACE_ID as string);
   res.send(JSON.stringify("API Server"));
});
app.get("/api/aircond", async (req: Request, res: Response) => {
   console.log(process.env.CONTENTFUL_SPACE_ID as string);
   try {
      const client = contentful.createClient({
         space: process.env.CONTENTFUL_SPACE_ID as string,
         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
      });
      const { items }: any = await client.getEntries({
         content_type: "air-conditioners" as string,
      });
      let allItems: any = [];
      items.forEach((item: any) => {
         item.fields.airCondModel.forEach((innerItem: any) => {
            innerItem.fields.company = item.fields.company;
            allItems.push(innerItem.fields);
         });
      });

      const btuValues = (req.query.BTU as string)?.split(",");
      const wifiValues = (req.query["Wi-fi"] as string)?.split(",");
      const brandValues = (req.query.Brand as string)?.split(",");

      if (btuValues) {
         allItems = allItems.filter((item: any) => {
            return btuValues.includes(item.filterBtu);
         });
      }
      if (wifiValues) {
         allItems = allItems.filter((item: any) => {
            if ((item.wifiPrice && wifiValues.includes("Yes")) || (!item.wifiPrice && wifiValues.includes("No"))) {
               return item;
            }
         });
      }
      if (brandValues) {
         allItems = allItems.filter((item: any) => {
            return brandValues.includes(item.company);
         });
      }
      console.log(allItems);
      res.send(allItems);
   } catch (error) {
      console.error(error);
      res.send("Error");
      res.status(500).send("Error fetching products");
   }
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
