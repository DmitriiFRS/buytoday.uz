import express from "express";
import { Request, Response } from "express";
const app = express();
const port = 3001;

const cardData = [
   {
      id: 0,
      title: "Alba",
      content: "9000 BTU",
      filterbtu: "24000",
      image: "alba",
      brand: "Midea",
      isWifi: true,
   },
   {
      id: 1,
      title: "Alba",
      content: "12000 BTU",
      filterbtu: "24000",
      image: "alba",
      brand: "Midea",
      isWifi: true,
   },
   {
      id: 2,
      title: "Alba",
      content: "18000 BTU",
      filterbtu: "24000",
      image: "alba",
      brand: "Midea",
      isWifi: true,
   },
   {
      id: 3,
      title: "Alba",
      content: "24000 BTU",
      filterbtu: "24000",
      image: "alba",
      brand: "Midea",
      isWifi: true,
   },
   {
      id: 4,
      title: "Zizoo",
      content: "12000 BTU",
      filterbtu: "12000",
      image: "alba",
      brand: "Welkin",
      isWifi: false,
   },
   {
      id: 5,
      title: "Zizoo",
      content: "24000 BTU",
      filterbtu: "24000",
      image: "alba",
      brand: "Welkin",
      isWifi: false,
   },
];

app.get("/", (req: Request, res: Response) => {
   res.send("Express is work!");
});
app.get("/products", (req: Request, res: Response) => {
   console.log(req.query);
   res.send(JSON.stringify(cardData));
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
