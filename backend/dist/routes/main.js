"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const airconds_1 = require("../controllers/airconds");
const semiIndustrial_1 = require("../controllers/semiIndustrial");
const router = express_1.default.Router();
router.get("/api", (req, res) => {
    res.send(JSON.stringify("Buy Today API Server"));
});
router.get("/api/aircond", airconds_1.getAirconds);
router.get("/api/semi-industrial", semiIndustrial_1.getSemiIndustrial);
exports.default = router;
