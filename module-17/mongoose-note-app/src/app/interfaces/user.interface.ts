export interface IUser {
  fistName: string;
  lastName: string;
  age:number,
  email: string;
  phone:string,
  password: string;
  role: "USER" | "ADMIN" | "SUPERADMIN";
}




