"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_route_1 = __importDefault(require("./app/todos/todos.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// give permission that specific route to use todosRouter
app.use('/todos', todos_route_1.default);
app.get('/', (req, res) => {
    res.send("Root Home Page");
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
