import bcrypt from "bcryptjs";
import { model, Schema } from "mongoose";
import validator from "validator";
import {
  IAddress,
  IUser,
  UserInstanceMethods,
  UserStaticMethods,
} from "../interfaces/user.interface";
import { Note } from "./notes.model";

const addressSchema = new Schema<IAddress>(
  {
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
  {
    _id: false,
  }
);

// IUser, Model, UserInstance
const userSchema = new Schema<IUser, UserStaticMethods, UserInstanceMethods>(
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
      type: addressSchema,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// User Custom Intance method
userSchema.method(
  "hashPassword",
  async function hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);
    const updatedPassword = await bcrypt.hash(password, salt);

    return updatedPassword;
  }
);

// Custom Static method

userSchema.static(
  "hashPassword",
  async function hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);
    const updatedPassword = await bcrypt.hash(password, salt);
    return updatedPassword;
  }
);

// pre save hook
// using pre save hook hash password
userSchema.pre("save", async function () {
  const salt = bcrypt.genSaltSync(10);
  const updatedPassword = await bcrypt.hash(this.password, salt);
  this.password = updatedPassword;
});

// if user is deleted then userId referencing all notes delete
userSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    console.log(doc, 'from doc');
    await Note.deleteMany({ userId: doc._id });
  }
});

// post save hook
userSchema.post("save", function () {
  console.log(`${this.email} Email user created!!`);
});

export const User = model<IUser, UserStaticMethods>("User", userSchema);
