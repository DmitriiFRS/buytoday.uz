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
exports.getAllItems = void 0;
const config_1 = require("../config");
function getAllItems(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let newItems = [];
            const page = Number(req.query.page) || 1;
            const perPage = 8;
            const end = page * perPage;
            const { items } = yield config_1.client.getEntries({
                // @ts-ignore
                "sys.contentType.sys.id[in]": ["air-conditioners", "semi-industrial", "boilers", "multisplit", "multisplit-outer", "air-purifiers", "wash", "fridges"],
                limit: 200,
            });
            items.forEach((item) => {
                if (item.fields.multisplitModel) {
                    item.fields.multisplitModel.forEach((innerItem) => {
                        innerItem.fields.company = item.fields.company;
                        innerItem.fields.image = item.fields.image;
                        innerItem.fields.name = "Внутренний блок мульти-сплит системы" + " " + innerItem.fields.model;
                        innerItem.fields.type = item.fields.type;
                        innerItem.fields.url = item.fields.url;
                        innerItem.fields.isInverter = item.fields.isInverter;
                        innerItem.fields.category = "Мульти-сплит системы";
                        innerItem.fields.path = "/catalog/multisplit-inner";
                        newItems.push(innerItem.fields);
                    });
                }
                else if (item.fields.airCondModel) {
                    item.fields.airCondModel.forEach((innerItem) => {
                        innerItem.fields.company = item.fields.company;
                        innerItem.fields.image = item.fields.image;
                        innerItem.fields.isInverter = item.fields.isInverter;
                        innerItem.fields.name = "Настенный кондиционер" + " " + innerItem.fields.model;
                        innerItem.fields.url = item.fields.url;
                        innerItem.fields.category = "Настенные кондиционеры";
                        innerItem.fields.path = "/catalog/air-conditioners";
                        newItems.push(innerItem.fields);
                    });
                }
                else if (item.fields.semiCondModel) {
                    item.fields.semiCondModel.forEach((innerItem) => {
                        innerItem.fields.company = item.fields.company;
                        innerItem.fields.image = item.fields.image;
                        innerItem.fields.isInverter = item.fields.isInverter;
                        innerItem.fields.name = item.fields.name + " " + innerItem.fields.model.replace(/[a-z,A-Z]/g, "");
                        innerItem.fields.type = item.fields.type;
                        innerItem.fields.url = item.fields.url;
                        innerItem.fields.category = "Полупромышленные кондиционеры";
                        if (item.fields.type === "Колонный") {
                            innerItem.fields.path = "/catalog/col-conditioners";
                        }
                        else if (item.fields.type === "Кассетный") {
                            innerItem.fields.path = "/catalog/cassette-conditioners";
                        }
                        else {
                            innerItem.fields.path = "/catalog/duct-conditioners";
                        }
                        newItems.push(innerItem.fields);
                    });
                }
                else if (item.sys.contentType.sys.id === "fridges") {
                    item.fields.category = "Холодильники";
                    item.fields.path = "/catalog/fridges";
                    newItems.push(item.fields);
                }
                else if (item.sys.contentType.sys.id === "boilers") {
                    item.fields.category = "Газовые котлы";
                    item.fields.path = "/catalog/boilers";
                    newItems.push(item.fields);
                }
                else if (item.sys.contentType.sys.id === "wash") {
                    item.fields.category = "Стиральные машины";
                    item.fields.path = "/catalog/wash";
                    newItems.push(item.fields);
                }
                else if (item.sys.contentType.sys.id === "multisplit-outer") {
                    item.fields.category = "Мульти-сплит системы";
                    item.fields.path = "/catalog/multisplit-outer";
                    newItems.push(item.fields);
                }
                else if (item.sys.contentType.sys.id === "air-purifiers") {
                    item.fields.category = "Очистители воздуха";
                    item.fields.path = "/catalog/air-purifiers";
                    newItems.push(item.fields);
                }
                else {
                    newItems.push(item.fields);
                }
            });
            console.log(req.query.value);
            newItems = newItems.filter((el) => {
                const name = el.name.toLowerCase();
                if (req.query.value &&
                    name
                        .toLowerCase()
                        .replace(/\s/g, "_")
                        .includes(req.query.value.toLowerCase())) {
                    return el;
                }
            });
            const totalItems = newItems.length;
            const totalPages = Math.ceil(totalItems / perPage);
            const paginatedItems = newItems.slice(0, end);
            res.status(200).json({
                paginatedItems,
                pagination: {
                    page,
                    totalPages,
                },
            });
        }
        catch (err) {
            console.error(err);
            res.send("Error fetching products");
            res.status(500).send("Error fetching products");
        }
    });
}
exports.getAllItems = getAllItems;
