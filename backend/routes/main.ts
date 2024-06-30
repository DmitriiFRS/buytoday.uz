import express from "express";
import { getAirconds } from "../controllers/airconds";
import { Request, Response } from "express";
import { getCasConditioners, getColConditioners, getDuctConditioners } from "../controllers/semiIndustrial";
import { getMultiInner, getMultiOuter } from "../controllers/multisplits";

const router = express.Router();

router.get("/api", (req: Request, res: Response) => {
   res.send(JSON.stringify("Buy Today API Server"));
});
router.get("/api/aircond", getAirconds);
router.get("/api/cols", getColConditioners);
router.get("/api/duct", getDuctConditioners);
router.get("/api/cassetts", getCasConditioners);
router.get("/api/multiOuter", getMultiOuter);
router.get("/api/multiInner", getMultiInner);

export default router;
