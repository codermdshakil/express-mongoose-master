import express, { Application, Request, Response } from "express";

const app : Application = express();

const todosRouter = express.Router();

todosRouter.get("/", (req :Request , res :Response) => {
  res.send("Todos home route")
});

export default todosRouter;


