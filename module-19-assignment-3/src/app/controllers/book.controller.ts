import express, { Request, Response } from "express";
import { SortOrder } from "mongoose";
import z from "zod";
import { Book } from "../models/book.model";
import { BorrowBook } from "../models/borrow-book.model";

// book router
const bookRouter = express.Router();

// book zod validation
const CreateBookZodSchema = z.object({
  title: z.string(),
  author: z.string(),
  genre: z.string(),
  isbn: z.string(),
  description: z.string().optional(),
  copies: z.number(),
  available: z.boolean(),
});

//1. create a book
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
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

// 2. get all books
bookRouter.get("/books", async (req: Request, res: Response) => {
  //get query values
  const { filter, sortBy, sort, limit } = req.query;

  // filter condition
  const condition = filter ? { genre: filter } : {};

  // flag
  const flagOrder: SortOrder =
    sort === "asc" || sort === "ASC" || sort === "1" ? 1 : -1;

  // sort condition based on flag and filer condition
  const sortCondition: { [key: string]: SortOrder } = {
    [sortBy as string]: flagOrder,
  };

  // LimitNumber condition
  const limitNumber = limit ? parseInt(limit as string) : 10;

  try {
    const data = await Book.find(condition)
      .sort(sortCondition)
      .limit(limitNumber);

    // responses
    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: data,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

// 3. get book by id
bookRouter.get("/books/:bookId", async (req: Request, res: Response) => {
  const bookId = req.params.bookId;

  try {
    const book = await Book.findById(bookId);

    // response
    res.json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

// 4. update book by its id
bookRouter.patch("/books/:bookId", async (req: Request, res: Response) => {
  // get book id
  const bookId = req.params.bookId;

  try {
    // update book with new data
    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, {
      new: true,
    });

    // response
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

// 4. delete book by its id
bookRouter.delete("/books/:bookId", async (req: Request, res: Response) => {
  // get book id
  const bookId = req.params.bookId;

  try {
    // update book with new data
    const deleteBook = await Book.findByIdAndDelete(bookId);

    // response
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

// Borrow book section here
bookRouter.post("/borrow", async (req: Request, res: Response) => {

  const { book: bookId, quantity, dueDate } = req.body;

  const findedBook = await Book.findById(bookId);
  console.log(findedBook);

  if (!findedBook)
    return res.status(404).json({ success: false, message: "Book not found" });

  if (findedBook.copies < quantity) {
    return res
      .status(400)
      .json({ success: false, message: "Not enough copies available!!" });
  }

  findedBook.copies -= quantity;

  if (findedBook.copies === 0) {
    findedBook.available = false;
  }

  await findedBook.save();
  
  const borrow = await BorrowBook.create({ book: bookId, quantity, dueDate , });

  return res.status(201).json({
    success: true,
    message: "Book borrowed successfully",
    data: borrow,
  });
  
});

export default bookRouter;
