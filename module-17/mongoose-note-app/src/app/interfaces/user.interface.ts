import { Model } from "mongoose";

export interface IAddress {
  city:string,
  street:string,
  zip:number
};



export interface IUser {
  firstName: string;
  lastName: string;
  age:number,
  email: string;
  phone:string,
  password: string;
  role: "USER" | "ADMIN" | "SUPERADMIN",
  address: IAddress ;// here linked address interface
  hashPassword(password: string): string;
}


// Custom User Instance Methods
export interface UserInstanceMethods{
  hashPassword(password:string):string
}

// Custom User Static Methods

export interface UserStaticMethods  extends Model<IUser>{
  hashPassword(password:string):string;
}




