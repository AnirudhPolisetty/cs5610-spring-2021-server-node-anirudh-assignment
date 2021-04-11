const questionsService = require('../services/quesstions/questions-service');

module.exports = (app) => {
    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params["qid"];
        const questions = questionsService.findQuestionsForQuiz(quizId);
        res.send(questions);
    }

    const findAllQuestions = (req, res) => {
        const questions = questionsService.findAllQuestions();
        res.send(questions);
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
}