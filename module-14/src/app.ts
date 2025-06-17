import express, { Application } from "express";
import todosRouter from "./app/todos/todos.route";

const app: Application = express();

app.use(express.json());


// give permission that specific route to use todosRouter
app.use('/todos', todosRouter);



 
app.get('/', (req, res) => {
  res.send("Root Home Page")
})



export default app;

/**
 *
 * Basic file structure:
 *
 * Server.ts -> Handle server like starting, closing, error handleding only related to server
 * app.js -> handle routing, middleware , route related error
 * app folder -> app business logic handling like Create, Read, Update, Delete, Database related works
 *
 *
 */
