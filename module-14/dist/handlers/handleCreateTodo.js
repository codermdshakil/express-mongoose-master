"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const handleCreateTodo = (req, res) => {
    const reqData = req.body;
    const filePath = "./db/todo.json";
    const allStrTodos = fs_1.default.readFileSync(filePath, { encoding: "utf8" });
    const parsedTodos = JSON.parse(allStrTodos);
    parsedTodos.push(reqData);
    fs_1.default.writeFile(filePath, JSON.stringify(parsedTodos), { encoding: "utf8" }, (err) => {
        if (err) {
            console.log("Error Occured", err.message);
        }
        else {
            res.send(`${reqData.title} named todo added successfully!!`);
        }
    });
    // res.send("Create a new post!")
};
exports.default = handleCreateTodo;
