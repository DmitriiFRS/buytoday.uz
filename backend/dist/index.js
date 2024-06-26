"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contentful = __importStar(require("contentful"));
require("dotenv/config");
const app = (0, express_1.default)();
const port = 4001;
// comment
const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
app.get("/api", (req, res) => {
    res.send(JSON.stringify("API Server"));
});
app.get("/api/aircond", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const { items } = yield client.getEntries({
            content_type: "air-conditioners",
        });
        let allItems = [];
        items.forEach((item) => {
            item.fields.airCondModel.forEach((innerItem) => {
                innerItem.fields.company = item.fields.company;
                innerItem.fields.compressor = item.fields.compressor;
                innerItem.fields.image = item.fields.image;
                innerItem.fields.isInverter = item.fields.isInverter;
                innerItem.fields.name = item.fields.name;
                innerItem.fields.temperatureRange = item.fields.temperatureRange;
                innerItem.fields.url = item.fields.url;
                allItems.push(innerItem.fields);
            });
        });
        const btuValues = (_a = req.query.Power) === null || _a === void 0 ? void 0 : _a.split(",");
        const wifiValues = (_b = req.query["Wi-fi"]) === null || _b === void 0 ? void 0 : _b.split(",");
        const brandValues = (_c = req.query.Brands) === null || _c === void 0 ? void 0 : _c.split(",");
        if (btuValues) {
            allItems = allItems.filter((item) => {
                return btuValues.includes(item.filterBtu);
            });
        }
        if (wifiValues) {
            allItems = allItems.filter((item) => {
                if ((item.wifiPrice && wifiValues.includes("Yes")) || (!item.wifiPrice && wifiValues.includes("No"))) {
                    return item;
                }
            });
        }
        if (brandValues) {
            allItems = allItems.filter((item) => {
                return brandValues.includes(item.company);
            });
        }
        res.send(allItems);
    }
    catch (error) {
        console.error(error);
        res.send("Error fetching products");
        res.status(500).send("Error fetching products");
    }
}));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
