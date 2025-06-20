
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

    // it globally handle error
    next(error)
  }
});

// global error handler
app.get("/error",(req : Request, res:Response, next: NextFunction) => {


     try {
    // console.log(something);
    res.send("Welcome to todos App")

  } catch (error) {
    
    // it globally handle error
    next(error)
  }
 
});

app.get("/janina", (req:Request, res:Response) => {
  // console.log(something);
  res.send("janina")
})

// 404 page if route not match

app.use((req : Request, res:Response, next: NextFunction) =>{
  res.status(404).json({message:"Route not found!"})
})

// global error handler customize
app.use((error:any, req:Request, res:Response, next:NextFunction)=>{

  if(error){
    console.log("Error", error);
    res.status(400).json({message:"Something want wrong from global error handler!"})
  }

})



export default app;
