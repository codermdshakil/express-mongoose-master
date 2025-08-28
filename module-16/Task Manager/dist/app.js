"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_route_1 = __importDefault(require("./app/users.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", users_route_1.default);
app.get('/', (req, res) => {
    res.send("Hello world");
});
app.get('/health', (req, res) => {
    res.send("OK!");
});
app.get('/error', (req, res, next) => {
    try {
        console.log("somthings");
        res.send("Error er duniya");
    }
    catch (error) {
        next(error);
    }
});
// 404 route handle
app.use((req, res, next) => {
    res.status(404).json("Route not found!");
});
// Custom global error handler
app.use((error, req, res, next) => {
    if (error) {
        console.log(error);
        res.status(400).json({ message: "Error occured from global error handler", error });
    }
});
exports.default = app;
