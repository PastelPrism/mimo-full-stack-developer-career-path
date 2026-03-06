const express = require("express");
const Quiz = require("./Quiz");

const router = express.Router();
const quiz = new Quiz();

router.get("/question", (req, res) => {
  const q = quiz.getRandomQuestion();

  res.json({
    id: q.id,
    question: q.question,
    options: q.options
  });
});

module.exports = router;