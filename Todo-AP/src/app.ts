import express, { Application, Request, Response } from "express";
import fs, { readFileSync } from "fs";
import path from "path";
import todosRouter from "./routes/todos.route";

const app: Application = express();
app.use(express.json());

// todos router
app.use('/todos', todosRouter);

const filePath = path.join(__dirname, "../db/data.json");

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Todos App");
});

 

 

// create a new todo
app.post("/todos/create-todo", (req: Request, res: Response) => {
  const data = req.body;

  // get all todo
  const todo = readFileSync(filePath, { encoding: "utf-8" });
  const todos = JSON.parse(todo);

  // add new todo
  todos.push(data);

  fs.appendFile(filePath, JSON.stringify(todos), (err) => {
    if (err) throw err;
    res.send(`Successfully ${data.title} named todo created!`);
  });
});

app.get("/health", (req: Request, res: Response) => {
  res.send("OK!");
});

export default app;
