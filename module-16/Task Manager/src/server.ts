import app from "./app";
import { client } from "./config/mongoDB";

let server;
const PORT = 5000;

const bootstrap = async () => {

  await client.connect();
  console.log("MongoDB database is connected!");

  server = app.listen(PORT, () => {
    console.log(`Server is runing on - ${PORT}`);
  });

};

bootstrap();
