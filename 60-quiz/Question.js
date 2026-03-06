class Question {
  constructor(id, question, options, correctAnswer) {
    this.id = id;
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }

  isCorrectAnswer(answer) {
    return this.correctAnswer === answer;
  }
}

module.exports = Question;