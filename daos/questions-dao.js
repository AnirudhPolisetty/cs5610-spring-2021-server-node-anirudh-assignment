const questionsModel = require("../models/questions/questions-model");
const quizzesModel = require("../models/quizzes/quizzes-model");

const findAllQuestions = () => {
    return questionsModel.find()
}

const findQuestionById = (qid) => {
    return questionsModel.findById(qid)
}

/*
const findQuestionsForQuiz = (qid) => {
    return questionsModel.find({'quizId': qid});
    // this populate doesn't work for some reason when I switched to the remote db
    // return quizzesModel.findById(qid)
    //   .populate({'path': 'questions'})
    //   .then(quiz => quiz.questions);
}
*/

const findQuestionsForQuiz = (quizId) => {
    return quizzesModel.findById(quizId)
        .populate("questions")
        .then(quiz => quiz.questions);
}

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
};
