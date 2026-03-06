const Question = require("./Question");
const db = require("./database");

class Quiz {

  getRandomQuestion() {
    const row = db.prepare(`
      SELECT * FROM questions
      ORDER BY RANDOM()
      LIMIT 1
    `).get();

    if (!row) {
      return null;
    }

    const options = JSON.parse(row.options);

    return new Question(row.id, row.question, options, row.correctAnswer);
  }

  checkAnswer(questionId, answer) {
    const row = db.prepare(`
      SELECT * FROM questions
      WHERE id = ?
    `).get(questionId);

    if (!row) {
      return null;
    }

    return answer === row.correctAnswer;
  }
}

module.exports = Quiz;