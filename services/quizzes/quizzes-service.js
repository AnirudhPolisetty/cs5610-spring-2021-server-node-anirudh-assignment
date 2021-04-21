//const quizzes = require("./quizzes.json");
const quizzesModel = require("../../models/quizzes/quizzes-model");
const quizzesDao = require("../../daos/quizzes-dao");

const findAllQuizzes = () => {
    //return quizzes;
    return quizzesDao.findAllQuizzes();
}

const findQuizById = (quizId) => {
    return quizzesDao.findQuizById(quizId)
        //.populate("questions")
        //.exec();
}
    //quizzes.find((quiz) => {
      //  return (quiz._id === quizId)
    //});

module.exports = {
    findAllQuizzes,
    findQuizById
};
