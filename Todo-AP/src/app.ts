import express, { Application, Request, Response } from "express";
import { readFileSync } from "fs";
import path from "path";

const app: Application = express();
app.use(express.json());

const filePath = path.join(__dirname, "../db/data.json");

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Todos App");
});

// get all todos
app.get("/todos", (req: Request, res: Response) => {
  const data = readFileSync(filePath, { encoding: "utf-8" });
  // res.send(JSON.stringify(data))
  res.json(data);
});

// create a new todo
app.post("/todos/create-todo", (req: Request, res: Response) => {
  const data = req.body;

  const todos = readFileSync(filePath, { encoding: "utf-8" });
  
  console.log(data);

  res.send("Post a todo!");
});

app.get("/health", (req: Request, res: Response) => {
  res.send("OK!");
});

export default app;
