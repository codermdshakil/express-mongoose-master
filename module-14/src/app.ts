import express, { Application, Request, Response } from "express";
import fs from "fs";

const app: Application = express();

app.use(express.json());



app.get("/", (req: Request, res: Response) => {
  console.log({ req, res });
  res.send("Today I Learning Express JS with TypeScript !");
});

app.get("/todos", (req: Request, res: Response) => {

  const filePath = "./db/todo.json";
  const data = fs.readFileSync(filePath, {encoding:"utf8"});
  res.send(data);

});

app.post("/todos/create-todo", (req: Request, res: Response) => {
  res.send("Get all todos!");
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
