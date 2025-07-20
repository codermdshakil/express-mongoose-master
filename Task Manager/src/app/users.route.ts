
import express, { Request, Response } from 'express';
import { client } from '../config/mongoDB';


const usersRouter = express.Router();


// get all users
usersRouter.get('/', async (req: Request, res: Response) => {

  const db = await client.db("users");
  const collection = await db.collection("user");

  const cursor =  collection.find({});
  const data = await cursor.toArray();

  res.json(data);

});


// create a new user
usersRouter.get('/create-user', async (req: Request, res: Response) => {

  const {name, age, email, address} = req.body;

  const db = await client.db("users");
  const collection = await db.collection("user");
  collection.insertOne({name, age, email, address});

  console.log(`${name} added Successfully!`);
  res.json({name, age, email, address})

});


export default usersRouter;
