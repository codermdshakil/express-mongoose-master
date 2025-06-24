import express, { Application, Request, Response } from "express";
import todosRouter from "./todos/todos.route";

const app : Application = express();

app.use(express.json());
app.use("/todos", todosRouter);


app.get("/", (req :Request, res:Response) => {
  res.send("Hello world")
});

app.get("/health", (req :Request, res:Response) => {
  res.send("OK")
});

app.listen(5000, () =>{
  console.log("Server is running on port",5000);
});
