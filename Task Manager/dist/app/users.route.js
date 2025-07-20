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
const mongoDB_1 = require("../config/mongoDB");
const usersRouter = express_1.default.Router();
// get all users
usersRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongoDB_1.client.db("users");
    const collection = yield db.collection("user");
    const cursor = collection.find({});
    const data = yield cursor.toArray();
    res.json(data);
}));
// create a new user
usersRouter.post("/create-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, email, address } = req.body;
    const db = yield mongoDB_1.client.db("users");
    const collection = yield db.collection("user");
    collection.insertOne({ name, age, email, address });
    console.log(`${name} added Successfully!`);
    res.json({ name, age, email, address });
}));
// get a single user
usersRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongoDB_1.client.db("users");
    const collection = yield db.collection("user");
    const data = yield collection.findOne({ _id: new mongodb_1.ObjectId(id) });
    res.json(data);
}));
// delete a single user
usersRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongoDB_1.client.db("users");
    const collection = yield db.collection("user");
    const data = yield collection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
    res.json(data);
}));
// update a user
usersRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { name, age, email, address } = req.body;
    const db = yield mongoDB_1.client.db("users");
    const collection = yield db.collection("user");
    const filter = { _id: new mongodb_1.ObjectId(id) };
    const data = yield collection.updateOne(filter, { $set: { name, age, email, address } }, { upsert: true });
    res.json(data);
}));
exports.default = usersRouter;
