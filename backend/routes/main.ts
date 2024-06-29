import express from "express";
import { getAirconds } from "../controllers/airconds";
import { Request, Response } from "express";
import { getSemiIndustrial } from "../controllers/semiIndustrial";

const router = express.Router();

router.get("/api", (req: Request, res: Response) => {
   res.send(JSON.stringify("Buy Today API Server"));
});
router.get("/api/aircond", getAirconds);
router.get("/api/semi-industrial", getSemiIndustrial);

export default router;
