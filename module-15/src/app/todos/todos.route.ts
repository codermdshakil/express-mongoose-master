
import express, { Request, Response } from "express";

const todosRouter = express.Router();

todosRouter.get("/", (req :Request, res:Response) =>{
  res.send("Todos Home")
});

todosRouter.get("/health", (req :Request, res:Response) =>{
  res.send("Todos health")
});

export default todosRouter;

