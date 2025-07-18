import app from "./app";

let server;
const PORT = 5000;


const bootstap = async () => {
  server = app.listen(PORT, () => {
    console.log(`Server is runing on port - ${PORT}`);
  })
}

bootstap();
