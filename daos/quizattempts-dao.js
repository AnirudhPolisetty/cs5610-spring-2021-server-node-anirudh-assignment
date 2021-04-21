const quizAttemptsModel = require("../models/quizattempts/quizattempts-model");

const scoreQuiz = (questions) => {
    let correctQuestionCount = 0
    questions.forEach(question => {
        if (question.correct === question.answer) correctQuestionCount++;
    });
    return 100 * (correctQuestionCount / questions.length);
}

const findAttemptsForQuiz = (quizId) => {
    return quizAttemptsModel.find({quiz: quizId})
        .populate("quiz", "title _id")
}

const createAttempt = (quizId, attempt) => {
    return quizAttemptsModel.create({quiz: quizId, answers: attempt, score: scoreQuiz(attempt)})
}

module.exports = {
    findAttemptsForQuiz,
    createAttempt
}