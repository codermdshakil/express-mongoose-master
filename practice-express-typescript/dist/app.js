"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_route_1 = __importDefault(require("./app/todos.route"));
const app = (0, express_1.default)();
app.use("/todos", todos_route_1.default);
app.get("/", (req, res) => {
    res.send("Hello world");
});
exports.default = app;
