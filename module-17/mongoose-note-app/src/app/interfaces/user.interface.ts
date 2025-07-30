
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

export interface UserInstanceMethods{
  hashPassword(password:string):string
}




