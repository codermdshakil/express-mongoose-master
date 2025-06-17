"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const handleTodosRoute = (req, res) => {
    const filePath = "./db/todo.json";
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf8" });
    res.send(data);
};
exports.default = handleTodosRoute;
