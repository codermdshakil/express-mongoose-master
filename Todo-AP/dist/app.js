"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const todos_route_1 = __importDefault(require("./routes/todos.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// todos router
app.use('/todos', todos_route_1.default);
const filePath = path_1.default.join(__dirname, "../db/data.json");
app.get("/", (req, res) => {
    res.send("Welcome to Todos App");
});
app.get("/health", (req, res) => {
    res.send("OK!");
});
exports.default = app;
