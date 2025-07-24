import express, { Application } from 'express';
import userRouter from './app/controllers/usersRoutes';


const app : Application = express();
app.use(express.json());
app.use("/users", userRouter)



app.get('/', (req, res) => {
  res.send("Hello world");
})

export default app;

