import express, { NextFunction, Request, Response } from 'express';
import usersRouter from './app/users.route';

const app = express();
app.use(express.json());
app.use("/users", usersRouter);



app.get('/', (req : Request, res: Response) => {
  res.send("Hello world")
});


app.get('/health', (req : Request, res: Response) => {
  res.send("OK!")
});



app.get('/error', (req : Request, res: Response, next: NextFunction) => {
  try{
    console.log("somthings");
    res.send("Error er duniya");
  }
  catch(error){
    next(error)
  }
})

// 404 route handle

app.use((req, res, next) => {
  res.status(404).json("Route not found!")
})

// Custom global error handler
app.use((error:any, req: Request, res: Response, next : NextFunction) => {

  if(error){
    console.log(error);
    res.status(400).json({message:"Error occured from global error handler", error})
  }

})


export default app;






