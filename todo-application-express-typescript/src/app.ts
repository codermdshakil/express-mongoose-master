
import express, { Application, Request, Response } from "express";
import todosRouter from "./app/todos/todos.route";
 

const app : Application = express();

app.use(express.json());    // middleware to parse the request body as JSON
 
app.use("/todos", todosRouter);


app.get("/", (req : Request, res:Response) => {
  res.send("Hello world")
})


export default app;
