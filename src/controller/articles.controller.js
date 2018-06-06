const mustache = require('mustache');
const articlesTemplate = require('../view/articles.template');
const fakeData = require('../init');
const fetch = require('node-fetch');

//RENDER ALL ARTICLES
let articlesController = (request,response) => {

    //RENDER
    let output = mustache.render(articlesTemplate, {fakeData});
    return response.send(output);
};

module.exports = articlesController;
