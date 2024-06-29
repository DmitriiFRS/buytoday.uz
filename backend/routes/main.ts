import express from "express";
import { getAirconds } from "../controllers/airconds";
import { Request, Response } from "express";

const router = express.Router();

router.get("/api", (req: Request, res: Response) => {
   res.send(JSON.stringify("Buy Today API Server"));
});
router.get("/api/aircond", getAirconds);

export default router;
