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
               innerItem.fields.name = "Внутренний блок мульти-сплит системы" + " " + innerItem.fields.model;
               innerItem.fields.type = item.fields.type;
               innerItem.fields.url = item.fields.url;
               innerItem.fields.isInverter = item.fields.isInverter;
               innerItem.fields.category = "Мульти-сплит системы";
               innerItem.fields.path = "/catalog/multisplit-inner";
               newItems.push(innerItem.fields);
            });
         } else if (item.fields.airCondModel) {
            item.fields.airCondModel.forEach((innerItem: any) => {
               innerItem.fields.company = item.fields.company;
               innerItem.fields.image = item.fields.image;
               innerItem.fields.isInverter = item.fields.isInverter;
               innerItem.fields.name = "Настенный кондиционер" + " " + innerItem.fields.model;
               innerItem.fields.url = item.fields.url;
               innerItem.fields.category = "Настенные кондиционеры";
               innerItem.fields.path = "/catalog/air-conditioners";
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
               innerItem.fields.category = "Полупромышленные кондиционеры";
               if (item.fields.type === "Колонный") {
                  innerItem.fields.path = "/catalog/col-conditioners";
               } else if (item.fields.type === "Кассетный") {
                  innerItem.fields.path = "/catalog/cassette-conditioners";
               } else {
                  innerItem.fields.path = "/catalog/duct-conditioners";
               }
               newItems.push(innerItem.fields);
            });
         } else if (item.sys.contentType.sys.id === "fridges") {
            item.fields.category = "Холодильники";
            item.fields.path = "/catalog/fridges";
            newItems.push(item.fields);
         } else if (item.sys.contentType.sys.id === "boilers") {
            item.fields.category = "Газовые котлы";
            item.fields.path = "/catalog/boilers";
            newItems.push(item.fields);
         } else if (item.sys.contentType.sys.id === "wash") {
            item.fields.category = "Стиральные машины";
            item.fields.path = "/catalog/wash";
            newItems.push(item.fields);
         } else if (item.sys.contentType.sys.id === "multisplit-outer") {
            item.fields.category = "Мульти-сплит системы";
            item.fields.path = "/catalog/multisplit-outer";
            newItems.push(item.fields);
         } else if (item.sys.contentType.sys.id === "air-purifiers") {
            item.fields.category = "Очистители воздуха";
            item.fields.path = "/catalog/air-purifiers";
            newItems.push(item.fields);
         } else {
            newItems.push(item.fields);
         }
      });
      res.status(200).json({
         newItems,
      });
   } catch (err) {
      console.error(err);
      res.send("Error fetching products");
      res.status(500).send("Error fetching products");
   }
}
