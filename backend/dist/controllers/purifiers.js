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
exports.getPurifiers = void 0;
const config_1 = require("../config");
function getPurifiers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            const { items } = yield config_1.client.getEntries({
                content_type: "air-purifiers",
            });
            let allItems = [];
            const page = Number(req.query.page) || 1;
            const perPage = 10;
            const start = (page - 1) * perPage;
            const end = page * perPage;
            items.forEach((item) => {
                allItems.push(item.fields);
            });
            const brandValues = (_a = req.query.Brands) === null || _a === void 0 ? void 0 : _a.split(",");
            const typeValues = (_b = req.query.Type) === null || _b === void 0 ? void 0 : _b.split(",");
            if (brandValues) {
                allItems = allItems.filter((item) => {
                    return brandValues.includes(item.company);
                });
            }
            if (typeValues) {
                allItems = allItems.filter((item) => {
                    return typeValues.includes(item.filterType);
                });
            }
            const totalItems = allItems.length;
            const totalPages = Math.ceil(totalItems / perPage);
            const paginatedItems = allItems.sort((a, b) => Number(a.price) - Number(b.price)).slice(start, end);
            res.status(200).json({
                purifiers: paginatedItems,
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
exports.getPurifiers = getPurifiers;
