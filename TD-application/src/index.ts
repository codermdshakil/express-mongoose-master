import express, { Request, Response } from "express";

const app = express();

// use middleware
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/health", (req: Request, res: Response) => {
  res.send("Health is OK!");
});

app.listen(5000, () => {
  console.log("Server is listening on port - 5000");
});
