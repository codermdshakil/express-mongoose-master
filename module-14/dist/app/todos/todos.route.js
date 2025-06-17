"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handleCreateTodo_1 = __importDefault(require("../../handlers/handleCreateTodo"));
const handleGetTodos_1 = __importDefault(require("../../handlers/handleGetTodos"));
const todosRouter = express_1.default.Router();
todosRouter.get('/', handleGetTodos_1.default);
todosRouter.post('/create-todo', handleCreateTodo_1.default);
exports.default = todosRouter;
