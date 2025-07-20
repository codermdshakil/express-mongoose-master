"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const todosRouter = express_1.default.Router();
const filePath = "C:/Projects/codes/next-level/milestone-3-express-mongoose/Todo-AP/db/data.json";
// get all todos
todosRouter.get('/', (req, res) => {
    const data = (0, fs_1.readFileSync)(filePath, { encoding: "utf-8" });
    res.json(data);
});
// get a single todo
todosRouter.get('/:Id', (req, res) => {
    const id = parseInt(req.params.Id);
    // get all todos
    const data = (0, fs_1.readFileSync)(filePath, { encoding: "utf-8" });
    const todos = JSON.parse(data);
    // using id find todo from todos
    const findedItem = todos.find((item) => item.id === id);
    res.send(JSON.stringify(findedItem));
});
todosRouter.get('/health', (req, res) => {
    res.send("Todos is OK");
});
exports.default = todosRouter;
