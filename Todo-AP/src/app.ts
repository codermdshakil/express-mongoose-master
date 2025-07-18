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

app.put('/todos/update-todo/:id',(req: Request, res: Response) =>{


  // get id to find todo
  const id = req.params.id;

  // requested data 
  const todo = req.body;

  const alltodos = fs.readFileSync(filePath, {encoding:"utf-8"});
  const todos = JSON.parse(alltodos);

  const findedItem = todos.find((item : Todo )=> item.id === parseInt(id));
  
  console.log(findedItem);
  findedItem.title = todo.title;
  findedItem.body = todo.body;

  fs.writeFile(filePath, JSON.stringify(todos), {encoding:"utf-8"} , (err) =>{
    if(err){
      console.log("Error Occured!");
    }
    console.log(`Successfully ${id} Updated!`);
  })


  res.send(todos)

})

app.get("/health", (req: Request, res: Response) => {
  res.send("OK!");
});

export default app;
