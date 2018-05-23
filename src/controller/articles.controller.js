const mustache = require('mustache');
const articlesTemplate = require('../view/articles.template');
const fakeData = require('../init');

//RENDER ALL ARTICLES
let articlesController = (request,response) => {

    let output = mustache.render(articlesTemplate, {fakeData});

    return response.send(output);
};

module.exports = articlesController;