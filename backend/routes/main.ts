import express from "express";
import { getAirconds } from "../controllers/airconds";

const router = express.Router();

router.get("/api/aircond", getAirconds);

export default router;
