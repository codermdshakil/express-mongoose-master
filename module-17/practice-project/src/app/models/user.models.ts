import { model, Schema } from "mongoose";
import { Iuser } from "../interfaces/user.interface";

const userSchema = new Schema<Iuser>({
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  passion:{
    type:String,
    enum:['Playing', 'Writing', 'Traveling'],
    default:"Traveling"
  },
  hobby:{
    type:String,
    default:"Programming"
  }
});

export const User = model<Iuser>("User", userSchema);

