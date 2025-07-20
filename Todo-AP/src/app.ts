import express, { Application, Request, Response } from "express";
import path from "path";
import todosRouter from "./routes/todos.route";

const app: Application = express();
app.use(express.json());

// todos router
app.use('/todos', todosRouter);

const filePath = path.join(__dirname, "../db/data.json");

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Todos App");
});

 

 


app.get("/health", (req: Request, res: Response) => {
  res.send("OK!");
});

export default app;
