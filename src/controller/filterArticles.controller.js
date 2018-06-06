const mustache = require('mustache');
const articlesTemplate = require('../view/articles.template');
const allArticles = require('../init');

//FILTER ARTICLES
let filterArticlesController = (request,response) => {

    //GET INPUT
    let input = request.body.filter;

    //COMPARE INPUT WITH ARTICLE TITLES
    let fakeData = filterArticles(allArticles,input);

    //RENDER FILTERED ARTICLES
    let output = mustache.render(articlesTemplate, {fakeData});
    return response.send(output);
};

function filterArticles(arrArticles,input){
    if(input.length !== 0){
        return arrArticles.filter((el)=>el.title.includes(input));
    }
    return allArticles;
}

module.exports = filterArticlesController;