const questions = [
  "What planet is known as the 'Red Planet'?",
  "Who painted the Mona Lisa?"
];

const choicesArray = [
  ["Earth", "Mars", "Jupiter", "Saturn"],
  ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"]
];

const correctAnswers = [
  "Mars",
  "Leonardo da Vinci"
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    const questionElement = document.getElementById("question");
    questionElement.innerHTML = questions[currentQuestionIndex];

    for (let i = 0; i < choicesArray[currentQuestionIndex].length; i++) {
      const btn = document.getElementById("choice" + (i + 1));
      btn.innerHTML = choicesArray[currentQuestionIndex][i];
      btn.value = choicesArray[currentQuestionIndex][i];
      btn.disabled = false;
    }

    document.getElementById("result").innerHTML = "";

  } else {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your final score: " + score + " / " + questions.length;

    document.getElementById("question").innerHTML = "";
    document.getElementById("choices").innerHTML = "";
  }
}

function checkAnswer(button) {
  if (button.value === correctAnswers[currentQuestionIndex]) {
    score += 1;
  }

  currentQuestionIndex += 1;

  displayQuestion();
}

displayQuestion();

