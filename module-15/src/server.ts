import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;
const PORT = 5000;

async function main() {
  try {

    // connect database 

    await mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0.qo2wzoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("Connected mongoDB using Mongoose!");
    server = app.listen(PORT, () => {
      console.log(`✅ Server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("Error Occured ", err);
  }
}

main();
