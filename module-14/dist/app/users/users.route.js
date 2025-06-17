"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// create app
const app = (0, express_1.default)();
// create router
const usersRouter = express_1.default.Router();
usersRouter.get('/', (req, res) => {
    res.send("Users Root Home page");
});
exports.default = usersRouter;
