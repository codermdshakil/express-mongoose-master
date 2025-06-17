"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const handleRootRoute_1 = __importDefault(require("./handlers/handleRootRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// create app router 
const todosRouter = express_1.default.Router();
// give permission that specific route to use todosRouter
app.use('/', todosRouter);
app.use('/todos', todosRouter);
// todosRouter.get('/', handleRootRoute);
todosRouter.get('/', handleRootRoute_1.default);
// handle todos route
todosRouter.get("/todos/:id/:id2/:id3", (req, res) => {
    // console.log(req.params);
    // console.log(req.query); //
    const filePath = "./db/todo.json";
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf8" });
    // res.send(data);
    res.send("Todos!");
});
todosRouter.post("/todos/create-todo", (req, res) => {
    // 1: get request data
    const reqData = req.body;
    try {
        // 2. get all data
        const filePath = "./db/todo.json";
        const allStrTodos = fs_1.default.readFileSync(filePath, { encoding: "utf8" });
        const parsedTodos = JSON.parse(allStrTodos);
        // 3 push reqData in all todos
        parsedTodos.push(reqData);
        // update with all new todos 
        fs_1.default.writeFileSync(filePath, JSON.stringify(parsedTodos, null, 2), 'utf8');
    }
    catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Failed to write to file' });
    }
    res.send("Post a new Todo!");
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
