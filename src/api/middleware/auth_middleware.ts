import { NextFunction, Request, Response } from "express";
import HttpException from "./http_exception";

// You'll need to implement this yourself. I suggest using something like Auth0 - https://auth0.com/blog/node-js-and-typescript-tutorial-secure-an-express-api/
export const checkJwt = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log("Not implemented yet");
  return next();
};
