//GLOBAL VARIABLES
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 8000;

//CONTROLLER
const newArticleController = require('./controller/newArticle.controller');
const detailsController = require('./controller/details.controller');
const articlesController = require('./controller/articles.controller');
const addArticleController = require('./controller/addArticle.controller');
const filterArticlesController = require('./controller/filterArticles.controller');
const suggestionsController = require('./controller/suggestions.controller');
const SPA_listController = require('./controller/spa.list.controller');
const SPA_newController = require('./controller/spa.new.controller');

//CREATE SERVER && HANDLE CONTROLLERS
app.use(express.static('src/css'));
app.use(express.static('src/js'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//ROUTES
app.get('/', articlesController);
app.get('/get-articles', suggestionsController);
app.get('/details/:id', detailsController);
app.get('/new', newArticleController);
app.get('/spa_list', SPA_listController);
app.post('/spa_new', SPA_newController);
app.post('/add-article', addArticleController);
app.post('/filter', filterArticlesController);

app.listen(port || process.env.PORT, () => console.log(`App is running on ${port}`));

/*
//DATABASE
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mytodo"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    let sql = "SELECT * FROM users";

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});*/
