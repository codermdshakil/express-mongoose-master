
import express, { Application, NextFunction, Request, Response } from "express";
import todosRouter from "./app/todos/todos.route";
 

const app : Application = express();

app.use(express.json());    // middleware to parse the request body as JSON
 
app.use("/todos", todosRouter);


app.get("/", (req : Request, res:Response, next: NextFunction) => {

  console.log("I am custom middleware");
  next();

}, (req : Request, res:Response, next: NextFunction) => {

  // handle custom error 
  try {
    // console.log(something);
    res.send("Welcome to todos App")

  } catch (error) {
    console.log(error);
    res.status(500).json({message:"someting want wrong!"})
  }
})


export default app;
