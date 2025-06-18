import app from "./app";
const { MongoClient, ServerApiVersion } = require("mongodb");

let server;
const port = 5000;

const uri =
  "mongodb+srv://mongodb:mongodb@cluster0.qo2wzoe.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const bootstrap = async () => {
  await client.connect();
  console.log("successfully connected to MongoDB!");

  // get Database
  const db = await client.db("todosDB");

  // get collection
  const collection = await db.collection("todos").insertOne({
    title: "MongoDB",
    des: "This is mongodb",
  });

  console.log(collection);

  server = app.listen(port, () => {
    console.log("Server is listening on port ", port);
  });
};

bootstrap();
