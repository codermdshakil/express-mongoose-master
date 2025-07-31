import express, { Request, Response } from "express";
import z from "zod";
import { Book } from "../models/book.model";

const bookRouter = express.Router();

const CreateBookZodSchema = z.object({
  title: z.string(),
  author: z.string(),
  genre: z.string(),
  isbn: z.string(),
  description: z.string().optional(),
  copies: z.number(),
  available: z.boolean(),
});

// create a book
bookRouter.post("/books", async (req: Request, res: Response) => {
  console.log(req.body);

  const validatedBook = await CreateBookZodSchema.parseAsync(req.body);

  console.log(validatedBook, "from zod");

  const data = await Book.create(validatedBook);

  res.status(201).json({
    success: true,
    message: "Book created successfully",
    data: data,
  });
});

export default bookRouter;
