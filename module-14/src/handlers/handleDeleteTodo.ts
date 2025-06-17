import { Request, Response } from "express";

import fs from "fs";
import Todo from "../interfaces/todo.interface";


const handleDeleteTodo = (req: Request, res: Response) => {

  const id = parseInt(req.params.id);

   // get all todo
  const filePath = "./db/todo.json";
  const todos = fs.readFileSync(filePath, {encoding:"utf8"});
  
  // parsed todos
  const parsedTodos = JSON.parse(todos);

  // filter todo
  const filteredTodos = parsedTodos.filter((todo:Todo) => todo.id != id);

  // insert data without deleted todo
 fs.writeFile(filePath, JSON.stringify(filteredTodos), {encoding:"utf8"}, (err) =>{
    if(err){
      console.log("Error Occured", err.message);
    }
    else{
      res.status(200).send(`${id} todo deleted successfully!`)
    }
  })
}


export default handleDeleteTodo;
