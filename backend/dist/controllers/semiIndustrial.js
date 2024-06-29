"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColConditioners = void 0;
const config_1 = require("../config");
function getColConditioners(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        try {
            const { items } = yield config_1.client.getEntries({
                content_type: "semi-industrial",
            });
            let allItems = [];
            const page = Number(req.query.page) || 1;
            const perPage = 10;
            const start = (page - 1) * perPage;
            const end = page * perPage;
            items.forEach((item) => {
                if (item.fields.type === "Колонный") {
                    item.fields.semiCondModel.forEach((innerItem) => {
                        innerItem.fields.company = item.fields.company;
                        innerItem.fields.image = item.fields.image;
                        innerItem.fields.isInverter = item.fields.isInverter;
                        innerItem.fields.name = item.fields.name;
                        innerItem.fields.type = item.fields.type;
                        innerItem.fields.url = item.fields.url;
                        allItems.push(innerItem.fields);
                    });
                }
            });
            const btuValues = (_a = req.query.Power) === null || _a === void 0 ? void 0 : _a.split(",");
            const compressorType = (_b = req.query.CompressorType) === null || _b === void 0 ? void 0 : _b.split(",");
            const brandValues = (_c = req.query.Brands) === null || _c === void 0 ? void 0 : _c.split(",");
            if (btuValues) {
                allItems = allItems.filter((item) => {
                    return btuValues.includes(item.coolingPowerBtu);
                });
            }
            if (compressorType) {
                allItems = allItems.filter((item) => {
                    if ((item.isInverter && compressorType.includes("yes")) || (!item.isInverter && compressorType.includes("no"))) {
                        return item;
                    }
                });
            }
            if (brandValues) {
                allItems = allItems.filter((item) => {
                    return brandValues.includes(item.company);
                });
            }
            const totalItems = allItems.length;
            const totalPages = Math.ceil(totalItems / perPage);
            const paginatedItems = allItems.sort((a, b) => Number(a.coolingPowerBtu) - Number(b.coolingPowerBtu)).slice(start, end);
            res.status(200).json({
                cols: paginatedItems,
                pagination: {
                    page,
                    totalPages,
                },
            });
        }
        catch (error) {
            console.error(error);
            res.send("Error fetching products");
            res.status(500).send("Error fetching products");
        }
    });
}
exports.getColConditioners = getColConditioners;
