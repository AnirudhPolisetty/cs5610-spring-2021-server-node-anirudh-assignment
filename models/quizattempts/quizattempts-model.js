const mongoose = require("mongoose");
const quizAttemptSchema = require("./quizattempts-schema");

const quizAttemptModel = mongoose
    .model("QuizAttemptModel", quizAttemptSchema);

module.exports = quizAttemptModel;