"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const airconds_1 = require("../controllers/airconds");
const semiIndustrial_1 = require("../controllers/semiIndustrial");
const multisplits_1 = require("../controllers/multisplits");
const router = express_1.default.Router();
router.get("/api", (req, res) => {
    res.send(JSON.stringify("Buy Today API Server"));
});
router.get("/api/aircond", airconds_1.getAirconds);
router.get("/api/cols", semiIndustrial_1.getColConditioners);
router.get("/api/duct", semiIndustrial_1.getDuctConditioners);
router.get("/api/cassetts", semiIndustrial_1.getCasConditioners);
router.get("/api/multiOuter", multisplits_1.getMultiOuter);
router.get("/api/multiInner", multisplits_1.getMultiInner);
exports.default = router;
