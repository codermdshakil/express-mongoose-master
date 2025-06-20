"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_route_1 = __importDefault(require("./app/todos/todos.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware to parse the request body as JSON
app.use("/todos", todos_route_1.default);
app.get("/", (req, res, next) => {
    console.log("I am custom middleware");
    next();
}, (req, res, next) => {
    // handle custom error 
    try {
        // console.log(something);
        res.send("Welcome to todos App");
    }
    catch (error) {
        // it globally handle error
        next(error);
    }
});
// global error handler
app.get("/error", (req, res, next) => {
    try {
        // console.log(something);
        res.send("Welcome to todos App");
    }
    catch (error) {
        // it globally handle error
        next(error);
    }
});
app.get("/janina", (req, res) => {
    // console.log(something);
    res.send("janina");
});
// 404 page if route not match
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found!" });
});
// global error handler customize
app.use((error, req, res, next) => {
    if (error) {
        console.log("Error", error);
        res.status(400).json({ message: "Something want wrong from global error handler!" });
    }
});
exports.default = app;
