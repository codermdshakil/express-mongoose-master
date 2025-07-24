import express, { Application, Request, Response } from "express";
import notesRouter from "./app/controllers/note.controllers";
import userRoutes from "./app/controllers/user.controllers";

const app: Application = express();
app.use(express.json());


app.use('/note', notesRouter);
app.use('/user', userRoutes);



app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});



export default app;
