import Database from "better-sqlite3";
import type { Database as IDatabase } from "better-sqlite3";
import path from "path";
import fs from "fs";
import assert from "assert";

let db: IDatabase;

export function openDatabase(): void {
  const dataFilename = path.join("./src/data", "data.db");
  db = new Database(dataFilename);
}

export async function prepareDatabase(): Promise<IDatabase> {
  const migration = fs.readFileSync("./src/data/migrate-schema.sql", "utf8");
  db.exec(migration);

  assert(db, "Database is not opened");
  return db;
}

export function getDatabase() {
  assert(db, "Database is not opened");
  return db;
}

export function closeDatabase() {
  if (db) {
    db.exec(`
      PRAGMA analysis_limit=400;
      PRAGMA optimize;
    `);
    db.close();
  }
}
