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
exports.getBoilers = void 0;
const config_1 = require("../config");
function getBoilers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            const { items } = yield config_1.client.getEntries({
                content_type: "boilers",
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
            const efficiencyValues = (_b = req.query.Efficiency) === null || _b === void 0 ? void 0 : _b.split(",");
            if (brandValues) {
                allItems = allItems.filter((item) => {
                    return brandValues.includes(item.company);
                });
            }
            if (efficiencyValues) {
                allItems = allItems.filter((item) => {
                    return efficiencyValues.includes(item.performanceFilter);
                });
            }
            const totalItems = allItems.length;
            const totalPages = Math.ceil(totalItems / perPage);
            const paginatedItems = allItems.sort((a, b) => Number(a.price) - Number(b.price)).slice(start, end);
            res.status(200).json({
                boilers: paginatedItems,
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
exports.getBoilers = getBoilers;
