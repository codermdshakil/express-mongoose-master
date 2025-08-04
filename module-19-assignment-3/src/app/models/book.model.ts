import { model, Schema } from "mongoose";
import { IBook, UserStaticMethod } from "../interface/book.interface";

const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      uppercase: true,
      enum: [
        "FICTION",
        "NON-FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    copies: {
      type: Number,
      required: true,
       min: [0, "Copies must be a positive number"], 
      validate: {
        validator: function (value: number) {
          return value >= 0;
        },
        message: "Copies must be a positive number",
      },
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// using static method make available false if copies === 0
bookSchema.static(
  "makeAvailableFalse",
  async function makeAvailableFalse(book: IBook) { 
    book.available =false;
  }
);



export const Book = model<IBook, UserStaticMethod>("Book", bookSchema);

 