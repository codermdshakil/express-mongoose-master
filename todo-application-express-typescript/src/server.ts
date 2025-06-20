import app from "./app";
import { client } from "./config/mongodb";

let server;
const port = 5000;


const bootstrap = async () => {
  await client.connect();
  console.log("successfully connected to MongoDB!");

  // get Database
  // const db = await client.db("todosDB");

  // // get collection
  // const collection = await db.collection("todos").insertOne({
  //   title: "MongoDB",
  //   des: "This is mongodb",
  // });


  server = app.listen(port, () => {
    console.log("Server is listening on port ", port);
  });
};

bootstrap();
 
