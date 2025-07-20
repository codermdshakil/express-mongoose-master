import express, { Application, Request, Response } from "express";
import fs, { readFileSync } from "fs";
import path from "path";
import Todo from "./interfaces/todo";

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

app.get("/todos/:Id", (req: Request, res: Response) => {

  // console.log("Params - ", req.params);
  // console.log("Quries - ", req.query);

  // const {title, body} = req.query;
  // console.log(title);
  // console.log(body);

  // get id 
  const id = parseInt(req.params.Id);

  // get all todos
  const data = readFileSync(filePath, { encoding: "utf-8" });
  const todos = JSON.parse(data);

  // using id find todo from todos
  const findedItem = todos.find((item : Todo) => item.id === id );

  res.send(JSON.stringify(findedItem));

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
