import express from "express";
import { Response } from "express";
import "dotenv/config";
import router from "./routes/main";
const app = express();
const port = 4001;

app.get("/api", (res: Response) => {
   res.send(JSON.stringify("API Server"));
});

app.use(router);

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
