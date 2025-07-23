import express, { Application, Request, Response } from "express";
import notesRouter from "./app/controllers/note.routes";

const app: Application = express();
app.use(express.json());


app.use('/note', notesRouter);


app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});



export default app;
