import assert from "assert";
import dotenv from "dotenv";

dotenv.config();

export const APP_SECRET = process.env.APP_SECRET;
export const PORT = process.env.PORT;

export enum NodeEnv {
  Test,
  Development,
  Production,
}

export const NODE_ENV = (): NodeEnv => {
  assert(process.env.NODE_ENV, "NODE_ENV is not set");
  switch (process.env.NODE_ENV) {
    case "test":
      return NodeEnv.Test;
    case "development":
      return NodeEnv.Development;
    case "production":
      return NodeEnv.Production;
  }

  return NodeEnv.Test;
};

export const validateEnv = (): void => {
  if (!APP_SECRET) {
    throw new Error(
      ".env is missing the definition of an APP_SECRET environmental variable, make sure you've created .env file with this variable"
    );
  }

  if (!PORT) {
    throw new Error(
      ".env is missing the definition of an PORT environmental variable, make sure you've created .env file with this variable"
    );
  }
};
