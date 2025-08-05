import { model, Schema } from "mongoose";
import { IBorrowBook } from "../interface/borrow_book.interface";

const borrowBookSchema = new Schema<IBorrowBook>(
  {
    book: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const BorrowBook = model("BorrowBook", borrowBookSchema);
