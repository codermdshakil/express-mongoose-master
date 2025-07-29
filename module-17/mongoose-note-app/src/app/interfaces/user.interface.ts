export interface IUser {
  firstName: string;
  lastName: string;
  age:number,
  email: string;
  phone:string,
  password: string;
  role: "USER" | "ADMIN" | "SUPERADMIN",
  address:{
    city:string,
    street:string,
    zip:number
  }
}




