import express from "express";
import { getAirconds } from "../controllers/airconds";
import { Response } from "express";

const router = express.Router();

router.get("/api", (res: Response) => {
   res.send(JSON.stringify("Buy today API Server"));
});
router.get("/api/aircond", getAirconds);

export default router;
