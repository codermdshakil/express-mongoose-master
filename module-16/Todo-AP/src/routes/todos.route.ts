import express, { Request, Response } from 'express';
import fs, { readFileSync } from 'fs';
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


// create a new todo
todosRouter.post("/create-todo", (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);

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




todosRouter.get('/health', (req : Request , res : Response) => {
  res.send("Todos is OK")
})

export default todosRouter;
