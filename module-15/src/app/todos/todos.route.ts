import express, { Application, Request, Response } from "express";

const app : Application = express();

const todosRouter = express.Router();

 

todosRouter.get("/", (req :Request, res:Response) => {
  res.send("Hello world todos router")
});

todosRouter.get("/health", (req :Request, res:Response) => {
  res.send("OK todos router")
});
 


export default todosRouter;

