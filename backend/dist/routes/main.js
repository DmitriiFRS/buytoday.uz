"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const airconds_1 = require("../controllers/airconds");
const router = express_1.default.Router();
router.get("/api", (res) => {
    res.send(JSON.stringify("Buy today API Server"));
});
router.get("/api/aircond", airconds_1.getAirconds);
exports.default = router;
