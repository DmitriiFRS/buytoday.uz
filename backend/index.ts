import express from "express";
import { Request, Response } from "express";
const app = express();
const port = 3001;

app.get("/", (req: Request, res: Response) => {
   res.send("Express is working!");
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
