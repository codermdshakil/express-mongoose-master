
import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
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
usersRouter.post('/create-user', async (req: Request, res: Response) => {

  const {name, age, email, address} = req.body;

  const db = await client.db("users");
  const collection = await db.collection("user");
  collection.insertOne({name, age, email, address});

  console.log(`${name} added Successfully!`);
  res.json({name, age, email, address})

});


// get a single user
usersRouter.get('/:id', async (req: Request, res: Response) => {

  const id = req.params.id;

  const db = await client.db("users");
  const collection = await db.collection("user");

  const data = await collection.findOne({_id: new ObjectId(id)});

  res.json(data)
  
});

// delete a single user
usersRouter.delete('/:id', async (req: Request, res: Response) => {

  const id = req.params.id;

  const db = await client.db("users");
  const collection = await db.collection("user");

  const data = await collection.deleteOne({_id: new ObjectId(id)});

  res.json(data)
  
});



export default usersRouter;
