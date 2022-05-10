import { getDatabase } from "./db";

export function getAllNamespaces(): Iterable<string> {
  const iter = getDatabase()
    .prepare(
      `
        SELECT DISTINCT namespace
          FROM logger_log;
      `
    )
    .iterate();

  return map(iter, (row) => row["namespace"]);
}
