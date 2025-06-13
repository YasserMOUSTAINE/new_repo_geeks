const express = require("express");
const router = express.Router();
const triviaQuestions = require("../data/questions");

let currentQuestionIndex = 0;
let score = 0;

// GET /quiz → start the quiz
router.get("/", (req, res) => {
  currentQuestionIndex = 0;
  score = 0;
  res.json({
    message: "Quiz started!",
    question: triviaQuestions[currentQuestionIndex].question,
  });
});

// POST /quiz → submit answer and get next question
router.post("/", (req, res) => {
  const userAnswer = req.body.answer;

  if (!userAnswer) {
    return res.status(400).json({ error: "Please provide an answer." });
  }

  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  let feedback = "";
  if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    feedback = "Correct!";
  } else {
    feedback = `Incorrect. The correct answer was: ${correctAnswer}`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({
      feedback,
      nextQuestion: triviaQuestions[currentQuestionIndex].question,
    });
  } else {
    res.json({
      feedback,
      message: "Quiz finished. Go to /quiz/score to see your result.",
    });
  }
});

// GET /quiz/score → final score
router.get("/score", (req, res) => {
  res.json({
    message: "Quiz complete!",
    score: `${score} out of ${triviaQuestions.length}`,
  });
});

module.exports = router;
