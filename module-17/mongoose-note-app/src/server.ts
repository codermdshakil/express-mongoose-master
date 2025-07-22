import mongoose from "mongoose";
import app from "./app";

import { Server } from "http";

let server: Server;

const PORT = 5000;

const main = async () => {
  try {

    await mongoose.connect(
      "mongodb+srv://mongodb:mongodb@cluster0.qo2wzoe.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("MongoDB Connected Successfully!!");

    server = app.listen(PORT, () => {
      console.log(`Application server is running on port - ${PORT}`);
    });

  } catch (error) {

    console.log(error);
    
  }

};

main();
