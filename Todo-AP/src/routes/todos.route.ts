import express, { Request, Response } from 'express';
import { readFileSync } from 'fs';
import Todo from '../interfaces/todo';

const todosRouter = express.Router();


const filePath = "C:/Projects/codes/next-level/milestone-3-express-mongoose/Todo-AP/db/data.json";

// get all todos
todosRouter.get('/', (req : Request , res : Response) => {
  const data = readFileSync(filePath, { encoding: "utf-8" });
  res.json(data);
});


// get a single todo
todosRouter.get('/:Id', (req : Request , res : Response) => {

 const id = parseInt(req.params.Id);

  // get all todos
  const data = readFileSync(filePath, { encoding: "utf-8" });
  const todos = JSON.parse(data);

  // using id find todo from todos
  const findedItem = todos.find((item : Todo) => item.id === id );

  res.send(JSON.stringify(findedItem));
});


todosRouter.get('/health', (req : Request , res : Response) => {
  res.send("Todos is OK")
})

export default todosRouter;
