import express, { Request, Response } from "express";
import z from "zod";
import { User } from "../models/users.model";

const userRoutes = express.Router();

// create a user zod schema

const CreateUserZodSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  email: z.string(),
  phone: z.string(),
  password: z.string(),
  role: z.string().optional(), // make this field optional
  address: z.object({
    city: z.string(),
    street: z.string(),
    zip: z.number()
  })
});

// post a User
userRoutes.post("/create-user", async (req: Request, res: Response) => {
  
  try {

    // const zodbody = await CreateUserZodSchema.parseAsync(req.body);

    const body = await CreateUserZodSchema.parseAsync(req.body);

    console.log(body, "Zod body");

    const user1 = await User.create(body);

    res.status(201).json({
      message: "Successfully Created",
      user: user1,
    });

  } catch (error: any) {

    console.log(error);

    res.status(400).json({
      success:false,
      message: error.message,
      error,
    });

  }
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

  const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });

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
