
import express, { Request, Response } from 'express';
import { User } from '../models/user.models';

const userRouter = express.Router();

userRouter.get("/", (req:Request, res:Response) => {
  res.send("Hello user")
});


userRouter.post('/create-user', async (req : Request, res:Response) => {

  // get data
  const body = req.body;

  // post to mongodb
  const user = await User.create(body);

  res.status(201).json({
    message:`Successfully ${body.firstName} user Created!`,
    user:user
  })


})


export default userRouter;
