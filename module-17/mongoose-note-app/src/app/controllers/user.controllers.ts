import express, { Request, Response } from "express";
import { User } from "../models/users.model";

const userRoutes = express.Router();

// post a User
userRoutes.post("/create-user", async (req: Request, res: Response) => {
  const body = req.body;

  const user1 = await User.create(body);

  res.status(201).json({
    message: "Successfully Created",
    user: user1,
  });
});

// get a single user
userRoutes.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const findedUser = await User.findById(id);

  res.status(201).json({
    message: "Successfully get User",
    user: findedUser,
  });
});

export default userRoutes;
