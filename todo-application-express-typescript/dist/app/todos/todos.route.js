"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const mongodb_2 = require("../../config/mongodb");
const app = (0, express_1.default)();
const todosRouter = express_1.default.Router();
// home route
// get all todos
todosRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongodb_2.client.db("todosDB");
    const collection = yield db.collection("todos");
    const cursor = collection.find({});
    const todos = yield cursor.toArray();
    res.json(todos);
}));
// create todo route
todosRouter.post("/create-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, priority, isComplete } = req.body;
    // title - string
    // description - string
    // priority - "High", "Medium", "Low"
    // isComplete - true, false
    const db = yield mongodb_2.client.db("todosDB");
    const collection = yield db.collection("todos");
    // create a new todo
    yield collection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isComplete: isComplete,
    });
    const cursor = collection.find({});
    const todos = yield cursor.toArray();
    res.json(todos);
}));
// get single todo
todosRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // get single todo id from param
    const id = req.params.id;
    const db = yield mongodb_2.client.db("todosDB");
    const collection = yield db.collection("todos");
    // get single todo using id
    const singleTodo = yield collection.findOne({ _id: new mongodb_1.ObjectId(id) });
    // send response single todo
    res.json(singleTodo);
}));
todosRouter.patch("/update-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { title, description } = req.body;
    const db = yield mongodb_2.client.db("todosDB");
    const collection = yield db.collection("todos");
    const updatedData = {
        title,
        description
    };
    const result = yield collection.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: updatedData });
    if (result.modifiedCount > 0) {
        res.status(201).send(`${title} todo updated successfully!`);
    }
}));
exports.default = todosRouter;
