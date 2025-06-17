
import express from "express";
import handleCreateTodo from "../../handlers/handleCreateTodo";
import handleTodosRoute from "../../handlers/handleGetTodos";

const todosRouter = express.Router();


todosRouter.get('/', handleTodosRoute);

todosRouter.post('/create-todo', handleCreateTodo );


export default todosRouter;
