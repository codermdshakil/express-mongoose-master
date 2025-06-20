import express, { Application, Request, Response } from "express";
import { client } from "../../config/mongodb";

const app: Application = express();


const todosRouter = express.Router();


// home route
todosRouter.get("/",  async (req: Request, res: Response) => {

  const db = await client.db("todosDB");
  const collection = await db.collection('todos');

  const cursor = collection.find({});
  const todos = await cursor.toArray();


  res.json(todos);


});

// create todo route
todosRouter.post("/create-todo", async (req: Request, res: Response) => {


  const {title, description, priority, isComplete} = req.body;

  // title - string
  // description - string
  // priority - "High", "Medium", "Low"
  // isComplete - true, false 


  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  // create a new todo
  await collection.insertOne({
    title:title,
    description:description,
    priority: priority,
    isComplete: isComplete
  });


  const cursor = collection.find({});
  const todos = await cursor.toArray();

  res.json(todos)

});

export default todosRouter; 
