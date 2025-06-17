"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const handleUpdateTodo = (req, res) => {
    // get update todo id
    const id = parseInt(req.params.id);
    // get updated data
    const { title, description } = req.body;
    // get all todo
    const filePath = "./db/todo.json";
    const todos = fs_1.default.readFileSync(filePath, { encoding: "utf8" });
    // parsed todos
    const parsedTodos = JSON.parse(todos);
    // find single todo
    const findedTodo = parsedTodos.find((todo) => todo.id === id);
    // update todo with new title and description
    if (findedTodo) {
        findedTodo.title = title;
        findedTodo.description = description;
    }
    fs_1.default.writeFile(filePath, JSON.stringify(parsedTodos), { encoding: "utf8" }, (err) => {
        if (err) {
            console.log("Error Occured", err.message);
        }
        else {
            res.status(200).send(`${id} todo updated successfully!`);
        }
    });
};
exports.default = handleUpdateTodo;
