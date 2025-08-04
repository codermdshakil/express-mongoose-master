import express, { Request, Response } from "express";
import { SortOrder } from "mongoose";
import z from "zod";
import { Book } from "../models/book.model";

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
  const { book, quantity, dueDate } = req.body;

  console.log(req.body);

  // find book using book
  const findedBook = await Book.findById(book);
  console.log(findedBook, 'findedBook');

  // check book copies are equal and greater then quantity
  if (!findedBook) {
    res.status(404).json({
      message: "Book Not Found",
    });
  }

  if (findedBook) {

    if(findedBook.copies >= quantity){

      // reduce copies from total quantity
      findedBook.copies -= quantity;

      // save book 
      findedBook.save();


      

    }
    else{
      res.status(400).json({
        message:"Not Enough Copies!!"
      })
    }

    if (findedBook.copies === 0) {
      await Book.makeAvailableFalse(findedBook);

      // save book 
      findedBook.save();
    }

    

  }

  // 1. id
  // 2. using id find Book
  // 3.

  res.send("Hello world");
});

export default bookRouter;

// if(findedBook.copies === 0 ){
//   findedBook.available = false; // do it using static
// }
