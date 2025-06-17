"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    console.log({ req, res });
    res.send("Today I Learning Express JS with TypeScript !");
});
app.get("/todos", (req, res) => {
    const filePath = "./db/todo.json";
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf8" });
    res.send(data);
});
app.post("/todos/create-todo", (req, res) => {
    res.send("Get all todos!");
});
exports.default = app;
/**
 *
 * Basic file structure:
 *
 * Server.ts -> Handle server like starting, closing, error handleding only related to server
 * app.js -> handle routing, middleware , route related error
 * app folder -> app business logic handling like Create, Read, Update, Delete, Database related works
 *
 *
 */
