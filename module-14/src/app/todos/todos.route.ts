
import express from "express";
import handleCreateTodo from "../../handlers/handleCreateTodo";
import handleTodosRoute from "../../handlers/handleGetTodos";
import handleUpdateTodo from "../../handlers/handleUpdateTodo";


const todosRouter = express.Router();


// get all todos
todosRouter.get('/', handleTodosRoute);

// create a new todo
todosRouter.post('/create-todo', handleCreateTodo);

// update a todo
todosRouter.patch("/:id", handleUpdateTodo)


export default todosRouter;
