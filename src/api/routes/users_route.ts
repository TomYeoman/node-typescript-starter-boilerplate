/**
 * Required External Modules and Interfaces
 */
import express, { NextFunction, Request, Response } from "express";
import { checkJwt } from "../middleware/auth_middleware";
import HttpException from "../middleware/http_exception";

/**
 * Router Definition
 */
export const userRouter = express.Router();

/**
 * Controller Definitions
 */
userRouter.get(
  "/route",
  checkJwt,
  async (request: Request, response: Response, next: NextFunction) => {
    console.log(
      "Sending fake user, you should get the real user from the DB if we had confirmed the JWT was valid"
    );
    const userAuthenticated = true;

    if (userAuthenticated) {
      return response.status(200).send({
        message: "You are logged in",
        user: {
          name: "John Doe",
          email: "..@gmail.com",
        },
      });
    } else {
      next(new HttpException(401, "You are not logged in"));
    }
  }
);
