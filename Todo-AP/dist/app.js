"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importStar(require("fs"));
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
    // get all todo
    const todo = (0, fs_1.readFileSync)(filePath, { encoding: "utf-8" });
    const todos = JSON.parse(todo);
    // add new todo
    todos.push(data);
    fs_1.default.appendFile(filePath, JSON.stringify(todos), (err) => {
        if (err)
            throw err;
        res.send(`Successfully ${data.title} named todo created!`);
    });
});
app.get("/health", (req, res) => {
    res.send("OK!");
});
exports.default = app;
