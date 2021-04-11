const express = require("express");
 const app = express();

// configure CORS
app.use(function (req, res, next) {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Headers',
     'Content-Type, X-Requested-With, Origin');
 res.header('Access-Control-Allow-Methods',
     'GET, POST, PUT, PATCH, DELETE, OPTIONS');
 next();
});

app.listen(3001);

require("./controllers/quizzes-controller")(app);
require("./controllers/questions-controller")(app);