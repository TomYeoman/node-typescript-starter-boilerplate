// Express
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";

import logger from "@logger/logger";

import * as db from "@model/db";

// Routes
import { userRouter } from "./api/routes/users_route";

// Check we've instantiated service with correct env vars
import { validateEnv } from "./utils/config_validator";
import { errorHandler } from "./api/middleware/error_middleware";
import requestLogger from "./api/middleware/log_requests";

validateEnv();

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

// Handle exceptions
process.on("exit", () => {
  db.closeDatabase();
});
process.on("SIGHUP", () => process.exit(128 + 1));
process.on("SIGINT", () => process.exit(128 + 2));
process.on("SIGTERM", () => process.exit(128 + 15));

process.on("uncaughtException", (err) => {
  logger.error(err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  logger.error(err);
  process.exit(1);
});

// Start service
(() => {
  db.openDatabase();
  db.prepareDatabase();

  // App Configuration
  app.use(helmet()); // Security
  app.use(cors()); // Cross-Origin Resource Sharing
  app.use(express.json()); // Parse JSON body
  app.use(requestLogger); // Log HTTP req/res

  // Routes
  app.use("/api/user/", userRouter);
  app.use(errorHandler);

  // Fallback if no route matches
  app.use((req: Request, res: Response) => {
    res.status(404).send("Sorry can't find that!");
  });

  // Server Activation
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
})();
