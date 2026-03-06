const express = require("express");
const Quiz = require("./Quiz");

const router = express.Router();
const quiz = new Quiz();

router.get("/question", (req, res) => {
  const question = quiz.getRandomQuestion();
  res.json({
    id: question.id,
    question: question.question,
    options: question.options,
  });
});

router.post("/submit-answer", (req, res) => {
  const { questionId, answer } = req.body;

  const isCorrect = quiz.checkAnswer(questionId, answer);

  res.json({
    correct: isCorrect,
  });
});

module.exports = router;