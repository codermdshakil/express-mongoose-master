import app from "./app";

let server;


const port = 3000

const bootstrap = async () => {
  server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

bootstrap();
