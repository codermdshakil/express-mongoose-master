import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';

const app : Application = express();

app.get('/', (req:Request, res:Response) => {
  res.send("Hello world")
});


// Steps
// ---------
// Schema
// Model
// User


// User Schema or Structure
const userSchema = new mongoose.Schema({
  name:String,
  age:Number,
  isHired:Boolean
});

// User Model
const User = mongoose.model("User", userSchema);


// User
const shakil = new User({name:"Shakil Ahmed", age:20, isHired:false});
const noyon = new User({name:"Noyon Rahman", age:22, isHired:true});
const nadim = new User({name:"Nadim", age:21, isHired:true});



 

export default app;
