import { model, Schema } from "mongoose";
import validator from "validator";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "firstName at least 3 character"],
      maxlength: [20, "firstName maximum character 20"],
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "LastName at least 3 character"],
      maxlength: [20, "LastName maximum character 20"],
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 60,
    },
    email: {
      type: String,
      unique: [true, "Email already exist"],
      lowercase: true,
      required: true,
      trim: true,

      // validate: {
      //   validator: function (v) {
      //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      //   },

      //   message: `{VALUE} is not valid Email!`,
      // },

      // validate using package validator
      validate: [validator.isEmail, "Email {VALUE} is not valid Email!"],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^(?:\+88|88)?01[3-9]\d{8}$/.test(v);
        },
        message: "{VALUE} is Not valid Phone Number",
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      default: "USER",
      enum: {
        values: ["USER", "ADMIN", "SUPERADMIN"],
        message: "Enum is not valid. Got {VALUE}",
      },
    },
    address: {
      city: {
        type: String,
        required: true,
        trim: true,
      },
      street: {
        type: String,
        required: true,
        trim: true,
      },
      zip: {
        type: Number,
        required: true,
        trim: true,
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = model<IUser>("User", userSchema);
