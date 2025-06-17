import express, { Application, Request, Response } from "express";
import fs from "fs";

const app: Application = express();

app.use(express.json());


app.get("/", (req: Request, res: Response) => {
  res.send("Today I Learning Express JS with TypeScript !");
});

app.get("/todos/:id/:id2/:id3", (req: Request, res: Response) => {

  console.log(req.params);
  console.log(req.query); //

  const filePath = "./db/todo.json";
  const data = fs.readFileSync(filePath, { encoding: "utf8" });
  // res.send(data);
  res.send("Todos!")

});

app.post("/todos/create-todo", (req: Request, res: Response) => {
  // 1: get request data
  const reqData = req.body;
  try{
    
  // 2. get all data
  const filePath = "./db/todo.json";

  const allStrTodos = fs.readFileSync(filePath, { encoding: "utf8" });
  const parsedTodos = JSON.parse(allStrTodos);

  // 3 push reqData in all todos
  parsedTodos.push(reqData);

  // update with all new todos 
  fs.writeFileSync(filePath, JSON.stringify(parsedTodos, null, 2), 'utf8');

  }
  catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Failed to write to file' });
  }

  res.send("Post a new Todo!");

});

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
