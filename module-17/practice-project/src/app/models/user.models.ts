import { model, Schema } from "mongoose";
import { Iuser } from "../interfaces/user.interface";

const userSchema = new Schema<Iuser>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    passion: {
      type: String,
      enum: ["Playing", "Writing", "Traveling"],
      default: "Traveling",
    },
    hobby: {
      type: String,
      default: "Programming",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = model<Iuser>("User", userSchema);
