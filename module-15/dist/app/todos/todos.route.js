"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const todosRouter = express_1.default.Router();
todosRouter.get("/", (req, res) => {
    res.send("Hello world todos router");
});
todosRouter.get("/health", (req, res) => {
    res.send("OK todos router");
});
exports.default = todosRouter;
