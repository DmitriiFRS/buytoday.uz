"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
const cardData = [
    {
        id: 0,
        title: "Alba",
        content: "9000 BTU",
        filterbtu: "24000",
        image: "alba",
        brand: "Midea",
        isWifi: true,
    },
    {
        id: 1,
        title: "Alba",
        content: "12000 BTU",
        filterbtu: "24000",
        image: "alba",
        brand: "Midea",
        isWifi: true,
    },
    {
        id: 2,
        title: "Alba",
        content: "18000 BTU",
        filterbtu: "24000",
        image: "alba",
        brand: "Midea",
        isWifi: true,
    },
    {
        id: 3,
        title: "Alba",
        content: "24000 BTU",
        filterbtu: "24000",
        image: "alba",
        brand: "Midea",
        isWifi: true,
    },
    {
        id: 4,
        title: "Zizoo",
        content: "12000 BTU",
        filterbtu: "12000",
        image: "alba",
        brand: "Welkin",
        isWifi: false,
    },
    {
        id: 5,
        title: "Zizoo",
        content: "24000 BTU",
        filterbtu: "24000",
        image: "alba",
        brand: "Welkin",
        isWifi: false,
    },
];
app.get("/", (req, res) => {
    res.send("Express is work!");
});
app.get("/products", (req, res) => {
    console.log(req.query);
    res.send(JSON.stringify(cardData));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
