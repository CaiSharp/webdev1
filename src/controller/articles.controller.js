const mustache = require('mustache');
const articlesTemplate = require('../view/articles.template');
const fakeData = require('../init');
const fetch = require('node-fetch');

//RENDER ALL ARTICLES
let articlesController = (request,response) => {

    //CREATE SUGGESTIONS IN JSON
    let suggestions;
    suggestions = JSON.stringify(createSuggestions(fakeData));
    module.exports.suggestions = suggestions;

    getJSON('http://localhost:8000/get-articles');

    //RENDER
    let output = mustache.render(articlesTemplate, {fakeData});
    return response.send(output);
};

function createSuggestions(arrData) {
    let suggestions = [];

    arrData.forEach( el => {
        let titleSplit = el.title.split(' ');
        titleSplit = titleSplit.filter(el => el.length>=3);
        suggestions = [...suggestions,...titleSplit];
    });
    return suggestions;
}

function getJSON(url){
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            //console.log(myJson);
        });
}

module.exports = articlesController;
