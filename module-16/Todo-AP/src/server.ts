import app from "./app";
import client from "./config/mongodb";

let server;
const PORT = 5000;


const bootstap = async () => {

  await client.connect();
  console.log("MongoDB Database is Connected!!");

  const db = await client.db("products");
  const collection = await db.collection("product").insertOne({
    name:"Iphone",
    color:"White",
    price:"150k"
  });
  

  server = app.listen(PORT, () => {
    console.log(`Server is runing on port - ${PORT}`);
  })
}

bootstap();
