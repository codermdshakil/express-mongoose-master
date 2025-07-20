import express, { Request, Response } from 'express';
import usersRouter from './app/users.route';

const app = express();
app.use(express.json());
app.use("/users", usersRouter);



app.get('/', (req : Request, res: Response) => {
  res.send("Hello world")
});


export default app;






