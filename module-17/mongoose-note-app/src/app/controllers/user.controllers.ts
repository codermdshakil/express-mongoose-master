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


// get all user
userRoutes.get("/", async (req: Request, res: Response) => {
  const id = req.params.id;

  const allUser = await User.find();

  res.status(201).json({
    message: "Successfully get Users",
    user: allUser,
  });
});


// update a single user
userRoutes.put("/update-user/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const body = req.body;

  const updatedUser = await User.findByIdAndUpdate(id, body, {new:true})

  res.status(201).json({
    message: "Successfully Updated User",
    user: updatedUser,
  });
});

// delete a single user
userRoutes.delete("/delete-user/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const deletedUser = await User.findByIdAndDelete(id);

  res.status(201).json({
    message: "Successfully Deleted User",
    user: deletedUser,
  });
});

export default userRoutes;
