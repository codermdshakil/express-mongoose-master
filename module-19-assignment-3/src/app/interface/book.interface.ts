import { Model } from "mongoose";

export interface IBook{
  title:string,
  author:string,
  genre:"FICTION" | "NON-FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY",
  isbn:string,
  description?:string,
  copies:number,
  available:boolean
};


// Custom User Static Methods

export interface UserStaticMethods  extends Model<IBook>{
  checkAvailableCopies(copies:number):number;
}