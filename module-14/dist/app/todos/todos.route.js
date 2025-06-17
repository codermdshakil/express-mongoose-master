"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handleCreateTodo_1 = __importDefault(require("../../handlers/handleCreateTodo"));
const handleGetTodos_1 = __importDefault(require("../../handlers/handleGetTodos"));
const handleUpdateTodo_1 = __importDefault(require("../../handlers/handleUpdateTodo"));
const todosRouter = express_1.default.Router();
// get all todos
todosRouter.get('/', handleGetTodos_1.default);
// create a new todo
todosRouter.post('/create-todo', handleCreateTodo_1.default);
// update a todo
todosRouter.patch("/:id", handleUpdateTodo_1.default);
exports.default = todosRouter;
