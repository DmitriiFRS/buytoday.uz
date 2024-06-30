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
exports.getMultiOuter = exports.getMultiInner = void 0;
const config_1 = require("../config");
function getMultiInner(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        try {
            const { items } = yield config_1.client.getEntries({
                content_type: "multisplit",
            });
            let allItems = [];
            const page = Number(req.query.page) || 1;
            const perPage = 10;
            const start = (page - 1) * perPage;
            const end = page * perPage;
            items.forEach((item) => {
                item.fields.multisplitModel.forEach((innerItem) => {
                    innerItem.fields.company = item.fields.company;
                    innerItem.fields.image = item.fields.image;
                    innerItem.fields.name = item.fields.name;
                    innerItem.fields.type = item.fields.type;
                    innerItem.fields.url = item.fields.url;
                    innerItem.fields.isInverter = item.fields.isInverter;
                    allItems.push(innerItem.fields);
                });
            });
            const btuValues = (_a = req.query.Power) === null || _a === void 0 ? void 0 : _a.split(",");
            const typeValues = (_b = req.query.Type) === null || _b === void 0 ? void 0 : _b.split(",");
            const brandValues = (_c = req.query.Brands) === null || _c === void 0 ? void 0 : _c.split(",");
            if (btuValues) {
                allItems = allItems.filter((item) => {
                    return btuValues.includes(item.filterBtu);
                });
            }
            if (brandValues) {
                allItems = allItems.filter((item) => {
                    return brandValues.includes(item.company);
                });
            }
            if (typeValues) {
                allItems = allItems.filter((item) => {
                    return typeValues.includes(item.type);
                });
            }
            const totalItems = allItems.length;
            const totalPages = Math.ceil(totalItems / perPage);
            const paginatedItems = allItems.sort((a, b) => Number(a.coolingPowerKW) - Number(b.coolingPowerKW)).slice(start, end);
            res.status(200).json({
                multiInner: paginatedItems,
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
exports.getMultiInner = getMultiInner;
function getMultiOuter(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { items } = yield config_1.client.getEntries({
                content_type: "multisplit-outer",
            });
            let allItems = [];
            const page = Number(req.query.page) || 1;
            const perPage = 10;
            const start = (page - 1) * perPage;
            const end = page * perPage;
            res.send(items);
        }
        catch (error) {
            console.error(error);
            res.send("Error fetching products");
            res.status(500).send("Error fetching products");
        }
    });
}
exports.getMultiOuter = getMultiOuter;
