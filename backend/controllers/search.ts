import { Request, Response } from "express";
import { client } from "../config";

export async function getAllItems(req: Request, res: Response) {
   try {
      let newItems: any = [];
      const { items } = await client.getEntries({
         // @ts-ignore
         "sys.contentType.sys.id[in]": ["air-conditioners", "semi-industrial", "boilers", "multisplit", "multisplit-outer", "air-purifiers", "wash", "fridges"],
         limit: 200,
      });
      items.forEach((item: any) => {
         if (item.fields.multisplitModel) {
            item.fields.multisplitModel.forEach((innerItem: any) => {
               innerItem.fields.company = item.fields.company;
               innerItem.fields.image = item.fields.image;
               innerItem.fields.name = item.fields.name;
               innerItem.fields.type = item.fields.type + " внутренний блок мульти-сплит системы";
               innerItem.fields.url = item.fields.url;
               innerItem.fields.isInverter = item.fields.isInverter;
               newItems.push(innerItem.fields);
            });
         } else if (item.fields.airCondModel) {
            item.fields.airCondModel.forEach((innerItem: any) => {
               innerItem.fields.company = item.fields.company;
               innerItem.fields.image = item.fields.image;
               innerItem.fields.isInverter = item.fields.isInverter;
               innerItem.fields.name = "Настенный кондиционер" + item.fields.model;
               innerItem.fields.url = item.fields.url;
               newItems.push(innerItem.fields);
            });
         } else if (item.fields.semiCondModel) {
            item.fields.semiCondModel.forEach((innerItem: any) => {
               innerItem.fields.company = item.fields.company;
               innerItem.fields.image = item.fields.image;
               innerItem.fields.isInverter = item.fields.isInverter;
               innerItem.fields.name = item.fields.name;
               innerItem.fields.type = item.fields.type;
               innerItem.fields.url = item.fields.url;
               newItems.push(innerItem.fields);
            });
         } else {
            newItems.push(item.fields);
         }
      });
      res.status(200).json({
         newItems,
      });
   } catch (err) {
      console.log(err);
   }
}
