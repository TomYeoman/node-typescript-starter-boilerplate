import { getDatabase } from "./db";
import { ok, err, Result } from "neverthrow";
import logger from "@logger/logger";
import getErrorMessage from "@utils/get_error_message";

type UserRecord = {
  user_stub: string;
  created_at: string;
};

export function getUser(userSub: string): Result<UserRecord, Error> {
  logger.info("Trying to get user for stub " + userSub);

  try {
    const user = getDatabase()
      .prepare("SELECT * FROM users WHERE user_stub = ?")
      .get(userSub);

    logger.info(user);

    if (user) {
      logger.info("Returning existing user");

      const res: UserRecord = user as UserRecord;
      return ok(res);
    } else {
      logger.info("Creating new user");
      getDatabase()
        .prepare("INSERT INTO users (user_stub) VALUES (?)")
        .run(userSub);

      const user: unknown = getDatabase()
        .prepare("SELECT * FROM users WHERE user_stub = ?")
        .get(userSub);

      logger.info(user);
      if (user) {
        return ok(user as UserRecord);
      } else {
        return err(new Error("User not found"));
      }
    }
  } catch (e) {
    return err(new Error(getErrorMessage(e)));
  }
}
