import { Request, Response, NextFunction } from "express";
import pinoHttp from "pino-http";

const log = pinoHttp();

export default async function logger(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  log(req, res);
  return next();
}
