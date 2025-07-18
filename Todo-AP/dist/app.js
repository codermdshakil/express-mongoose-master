"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const filePath = path_1.default.join(__dirname, "../db/data.json");
app.get("/", (req, res) => {
    res.send("Welcome to Todos App");
});
// get all todos
app.get("/todos", (req, res) => {
    const data = (0, fs_1.readFileSync)(filePath, { encoding: "utf-8" });
    // res.send(JSON.stringify(data))
    res.json(data);
});
// create a new todo
app.post("/todos/create-todo", (req, res) => {
    const data = req.body;
    const todos = (0, fs_1.readFileSync)(filePath, { encoding: "utf-8" });
    console.log(data);
    res.send("Post a todo!");
});
app.get("/health", (req, res) => {
    res.send("OK!");
});
exports.default = app;
