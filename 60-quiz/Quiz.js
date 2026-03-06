const Question = require("./Question");

const questionsData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "Rome", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
];

class Quiz {
  constructor() {
    this.questions = [];
    for (let i = 0; i < questionsData.length; i++) {
      const q = questionsData[i];
      this.questions.push(
        new Question(q.id, q.question, q.options, q.correctAnswer)
      );
    }
  }

  getRandomQuestion() {
    const index = Math.floor(Math.random() * this.questions.length);
    return this.questions[index];
  }
}

module.exports = Quiz;