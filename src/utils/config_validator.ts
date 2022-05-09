import dotenv from "dotenv";

dotenv.config();

export const APP_SECRET = process.env.APP_SECRET;
export const PORT = process.env.PORT;

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
