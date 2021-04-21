//const questions = require("./questions.json");
const questionsModel = require("../../models/questions/questions-model");
const questionsDao = require("../../daos/questions-dao");

const findAllQuestions = () => {
    return questionsDao.findAllQuestions()
}

const findQuestionById = (questionId) => {
    return questionsDao.findQuestionById(questionId)
}

const findQuestionsForQuiz = (quizId) => {
    return questionsDao.findQuestionsForQuiz(quizId)
}

module.exports = {
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById
};
