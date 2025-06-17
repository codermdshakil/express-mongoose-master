import { Request, Response } from "express";
import fs from 'fs';
import Todo from "../interfaces/todo.interface";



const handleUpdateTodo = (req :Request, res:Response) => {

  // get update todo id
  const id = parseInt(req.params.id);

  // get updated data
  const {title, description} = req.body;

  // get all todo
  const filePath = "./db/todo.json";
  const todos = fs.readFileSync(filePath, {encoding:"utf8"});
  
  // parsed todos
  const parsedTodos = JSON.parse(todos);

  // find single todo
  const findedTodo = parsedTodos.find((todo:Todo) => todo.id === id);
  
  // update todo with new title and description
  if(findedTodo){
    findedTodo.title = title;
    findedTodo.description = description;
  }

 

  fs.writeFile(filePath, JSON.stringify(parsedTodos), {encoding:"utf8"}, (err) =>{
    if(err){
      console.log("Error Occured", err.message);
    }
    else{
      res.status(200).send(`${id} todo updated successfully!`)
    }
  })

}

export default handleUpdateTodo;
