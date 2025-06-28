import express, { Application } from "express";
import todosRouter from "./app/todos/todos.route";

const app : Application = express();

app.use(express.json());

app.use("/todos", todosRouter);


app.get('/', (req, res) => {
  res.send("Hello world");
})

app.get("/health", (req, res) => {
  res.send("OK");
});


export default app;

