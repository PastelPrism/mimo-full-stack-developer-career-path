const Database = require("better-sqlite3");

const db = new Database("/tmp/quiz.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    options TEXT NOT NULL,
    correctAnswer TEXT NOT NULL
  );
`);

db.exec(`
  INSERT INTO questions (question, options, correctAnswer)
  VALUES (
    'What is the capital of France?',
    '["Paris", "Rome", "Berlin", "Madrid"]',
    'Paris'
  );

  INSERT INTO questions (question, options, correctAnswer)
  VALUES (
    'What is 2 + 2?',
    '["3", "4", "5", "6"]',
    '4'
  );
`);

module.exports = db;
