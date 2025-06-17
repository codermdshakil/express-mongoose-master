
import express, { Application } from "express";
import handleRootRoute from "../../handlers/handleRootRoute";

const app :Application = express();

app.use(express.json());

const todosRouter = express.Router();

// root route show all todos
todosRouter.get('/', handleRootRoute);


