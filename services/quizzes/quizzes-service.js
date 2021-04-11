const quizzes = require("./quizzes.json");

const findAllQuizzes = () => quizzes;
const findQuizById = (quizId) =>
    quizzes.find((quiz) => {
        return (quiz._id === quizId)
    });

module.exports = {
    findAllQuizzes,
    findQuizById
};