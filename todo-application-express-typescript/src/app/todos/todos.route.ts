import express, { Application, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { client } from "../../config/mongodb";

const app: Application = express();

const todosRouter = express.Router();

// home route

// get all todos
todosRouter.get("/", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const cursor = collection.find({});
  const todos = await cursor.toArray();

  res.json(todos);
});

// create todo route
todosRouter.post("/create-todo", async (req: Request, res: Response) => {
  const { title, description, priority, isComplete } = req.body;

  // title - string
  // description - string
  // priority - "High", "Medium", "Low"
  // isComplete - true, false

  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  // create a new todo
  await collection.insertOne({
    title: title,
    description: description,
    priority: priority,
    isComplete: isComplete,
  });

  const cursor = collection.find({});
  const todos = await cursor.toArray();

  res.json(todos);
});

// get single todo
todosRouter.get("/:id", async (req: Request, res: Response) => {
  // get single todo id from param
  const id = req.params.id;

  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  // get single todo using id
  const singleTodo = await collection.findOne({ _id: new ObjectId(id) });

  // send response single todo
  res.json(singleTodo);
});

todosRouter.patch("/update-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const { title, description } = req.body;

  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  
  const updatedData = {
    title,
    description 
  }

  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedData }
  );

  if(result.modifiedCount > 0){
    res.status(201).send(`${title} todo updated successfully!`)
  }

})
export default todosRouter;
