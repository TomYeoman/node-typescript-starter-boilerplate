CREATE TABLE IF NOT EXISTS users (
  user_stub TEXT,
  account_name TEXT,
  ingame_username TEXT,
  level INTEGER,
  total_kills INTEGER,
  total_rounds INTEGER,
  highest_killstreak INTEGER,
  highest_round INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS server (
  highest_round INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);