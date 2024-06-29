import express from "express";
import "dotenv/config";
import router from "./routes/main";
const app = express();
const port = 4001;

app.use(router);

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
