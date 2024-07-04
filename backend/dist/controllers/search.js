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
                        innerItem.fields.name = item.fields.name;
                        innerItem.fields.type = item.fields.type;
                        innerItem.fields.url = item.fields.url;
                        innerItem.fields.isInverter = item.fields.isInverter;
                        newItems.push(innerItem.fields);
                    });
                }
                else if (item.fields.airCondModel) {
                    item.fields.airCondModel.forEach((innerItem) => {
                        innerItem.fields.company = item.fields.company;
                        innerItem.fields.image = item.fields.image;
                        innerItem.fields.isInverter = item.fields.isInverter;
                        innerItem.fields.name = item.fields.name;
                        innerItem.fields.url = item.fields.url;
                        newItems.push(innerItem.fields);
                    });
                }
                else if (item.fields.semiCondModel) {
                    item.fields.semiCondModel.forEach((innerItem) => {
                        innerItem.fields.company = item.fields.company;
                        innerItem.fields.image = item.fields.image;
                        innerItem.fields.isInverter = item.fields.isInverter;
                        innerItem.fields.name = item.fields.name;
                        innerItem.fields.type = item.fields.type;
                        innerItem.fields.url = item.fields.url;
                        newItems.push(innerItem.fields);
                    });
                }
                else {
                    newItems.push(item);
                }
            });
            res.status(200).json({
                newItems,
            });
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.getAllItems = getAllItems;
