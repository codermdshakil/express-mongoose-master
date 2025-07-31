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
  try {
    // validate data using zod
    const validatedBook = await CreateBookZodSchema.parseAsync(req.body);

    // save data to mongoDB
    const data = await Book.create(validatedBook);

    // response
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: data,
    });

  } catch (error:any) {

    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
    
  }
});

export default bookRouter;
