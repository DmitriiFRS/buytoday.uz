import express from "express";
import { getAirconds } from "../controllers/airconds";
import { Request, Response } from "express";
import { getColConditioners } from "../controllers/semiIndustrial";

const router = express.Router();

router.get("/api", (req: Request, res: Response) => {
   res.send(JSON.stringify("Buy Today API Server"));
});
router.get("/api/aircond", getAirconds);
router.get("/api/cols", getColConditioners);

export default router;
