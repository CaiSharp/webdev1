//GLOBAL VARIABLES
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
let fakeData = require('./init');
let jsonData = JSON.stringify(fakeData);

//CONTROLLER
const newArticleController = require('./controller/newArticle.controller');
const detailsController = require('./controller/details.controller');
const articlesController = require('./controller/articles.controller');
const addArticleController = require('./controller/addArticle.controller');
const filterArticlesController = require('./controller/filterArticles.controller');

//CREATE SERVER && HANDLE CONTROLLERS
app.use(express.static('src/css'));
app.use(express.static('src/js'));
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', articlesController);
app.get('/get-articles', function (req, res) {
    res.json(jsonData);
});
app.get('/details/:id', detailsController);
app.get('/new', newArticleController);
app.post('/add-article', addArticleController);
app.post('/filter', filterArticlesController);
app.listen(port, () => console.log(`App is running on ${port}`));