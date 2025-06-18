
import express, { Application, Request, Response } from "express";
import todosRouter from "./app/todos.route";

const app : Application = express();

app.use("/todos", todosRouter);


app.get("/", (req : Request, res:Response) => {
  res.send("Hello world")
})


export default app;

