import express from "express";
import { getAirconds } from "../controllers/airconds";

const router = express.Router();

router.get("/api", (req, res) => {
   res.send(JSON.stringify("Buy today API Server"));
});
router.get("/api/aircond", getAirconds);

export default router;
