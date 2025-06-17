import { Request, Response } from "express";
import fs from "fs";



const handleCreateTodo =  (req : Request , res:Response) =>{

  const reqData = req.body;

  const filePath = "./db/todo.json";
  const allStrTodos = fs.readFileSync(filePath, {encoding:"utf8"});

  const parsedTodos = JSON.parse(allStrTodos);


  parsedTodos.push(reqData);

  fs.writeFile(filePath, JSON.stringify(parsedTodos),{encoding:"utf8"}, (err) =>{
    if(err){
      console.log("Error Occured", err.message);
    }
    else{
      res.send(`${reqData.title} named todo added successfully!!`);
    }
  })

  
  // res.send("Create a new post!")
}

export default handleCreateTodo;
