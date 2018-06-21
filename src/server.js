//GLOBAL VARIABLES
const express = require('express');
const bodyParser = require('body-parser');
const expressSanitized = require('express-sanitize-escape');
const cors = require('cors');
const app = express();
const port = 8000;

//CONTROLLER
const categoriesController = require('./controller/categories.controller');
const categoriesAPIController = require('./controller/categoriesAPI.controller');
const entriesAPIController = require('./controller/entriesAPI.controller');
const entriesController = require('./controller/entries.controller');
const singleCategoryController = require('./controller/singleCategory.controller');
const singleCategoryAPIController = require('./controller/singleCategoryAPI.controller');

//CREATE SERVER && HANDLE CONTROLLERS
app.use(express.static('src/css'));
app.use(express.static('src/js'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//SANITIZE
app.use(expressSanitized.middleware());
expressSanitized.sanitizeParams(app, ['id','name']);

//ROUTES
app.get('/', categoriesController);
app.get('/categories', categoriesController);
app.get('/categories_API', categoriesAPIController);
app.get('/entries', entriesController);
app.get('/entries_API', entriesAPIController);
app.get('/categories/:name', singleCategoryController);
app.get('/categories_API/:name', singleCategoryAPIController);

app.listen(port || process.env.PORT, () => console.log(`App is running on ${port}`));
