//GLOBAL VARIABLES
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

//CONTROLLER
const newArticleController = require('./controller/newArticle.controller');
const detailsController = require('./controller/details.controller');
const articlesController = require('./controller/articles.controller');
const addArticleController = require('./controller/addArticle.controller');

//CREATE SERVER && HANDLE CONTROLLERS
app.use(express.static('src/css'));
app.use(express.static('src/js'));
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', articlesController);
app.get('/details/:id', detailsController);
app.get('/new', newArticleController);
app.post('/add-article', addArticleController);
app.listen(port, () => console.log(`App is running on ${port}`));