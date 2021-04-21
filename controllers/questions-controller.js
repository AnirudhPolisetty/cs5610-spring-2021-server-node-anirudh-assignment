const questionsService = require("../services/questions/questions-service");

module.exports = (app) => {

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.quizId;
        questionsService.findQuestionsForQuiz(quizId)
            .then(questions => res.json(questions));
    }

    const findAllQuestions = (req, res) => {
        questionsService.findAllQuestions()
            .then((questions) => {
                res.json(questions)
            })
    }

    const findQuestionById = (req, res) => {
        const questionId = req.params.questionId
        questionsService.findQuestionById(questionId)
            .then(questions => res.json(questions))
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);
    app.get("/api/questions/:questionId", findQuestionById);
}