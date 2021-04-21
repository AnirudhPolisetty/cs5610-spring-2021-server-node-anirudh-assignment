const quizAttemptDao = require("../daos/quizattempts-dao");

module.exports = (app) => {
    const createAttempt = (req, res) => {
        const quizId = req.params["quizId"];
        const attempt = req.body;
        console.log(attempt)
        quizAttemptDao.createAttempt(quizId, attempt)
            .then(attempt => res.send(attempt));
    }

    const findAttemptsForQuiz = (req, res) => {
        const quizId = req.params["quizId"];
        quizAttemptDao.findAttemptsForQuiz(quizId)
            .then(attempts => res.send(attempts));
    }

    app.post("/api/quizzes/:quizId/attempts", createAttempt);
    app.get("/api/quizzes/:quizId/attempts", findAttemptsForQuiz);
}