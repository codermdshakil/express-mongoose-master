"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handleRootRoute_1 = __importDefault(require("../../handlers/handleRootRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const todosRouter = express_1.default.Router();
// root route show all todos
todosRouter.get('/', handleRootRoute_1.default);
