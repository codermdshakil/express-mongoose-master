"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const handleDeleteTodo = (req, res) => {
    const id = parseInt(req.params.id);
    // get all todo
    const filePath = "./db/todo.json";
    const todos = fs_1.default.readFileSync(filePath, { encoding: "utf8" });
    // parsed todos
    const parsedTodos = JSON.parse(todos);
    // filter todo
    const filteredTodos = parsedTodos.filter((todo) => todo.id != id);
    // insert data without deleted todo
    fs_1.default.writeFile(filePath, JSON.stringify(filteredTodos), { encoding: "utf8" }, (err) => {
        if (err) {
            console.log("Error Occured", err.message);
        }
        else {
            res.status(200).send(`${id} todo deleted successfully!`);
        }
    });
};
exports.default = handleDeleteTodo;
