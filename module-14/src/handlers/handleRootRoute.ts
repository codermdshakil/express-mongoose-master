import { Request, Response } from "express";

const handleRootRoute = (req:Request, res:Response) => {
  res.send("Today I learning Express JS")
}

export default handleRootRoute;
