import logger from "@logger/logger";
/**
 * Required External Modules and Interfaces
 */
import express, { NextFunction, Request, Response } from "express";
import { checkJwt } from "../middleware/auth_middleware";
import HttpException from "../middleware/http_exception";
import { getUser } from "../model/users_model";

/**
 * Router Definition
 */
export const userRouter = express.Router();

/**
 * Controller Definitions
 */
userRouter.get(
  "/validate",
  checkJwt,
  async (req: Request, res: Response, next: NextFunction) => {
    const fakeToken = "FAKE_USER_ID";

    console.log(`Fetching user using a fake JWT validated token: ${fakeToken}`);

    const user = await getUser("FAKE_USER_ID");

    if (user.isErr()) {
      logger.error(user.error);
    } else {
      logger.info(user);
    }

    // console.log(user);
    return res.status(200).send({
      user,
    });
  }
);
