import { Request, Response } from "express";
import fs from 'fs';

const handleTodosRoute =  (req : Request, res:Response) => {

  const filePath = "./db/todo.json";
  const data = fs.readFileSync(filePath, {encoding:"utf8"});
  res.send(data);

}


export default handleTodosRoute;