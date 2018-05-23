const Mustache = require('mustache');
const detailsTemplate = require('../view/details.template');
const fakeData = require('../init');

//RENDER ARTICLE DETAILS
let detailsController = (request,response) => {

    let reqId = request.params.id;
    let article;

    //CHECK && MATCH ID
    for (let i in fakeData){
        if(parseInt(fakeData[i].id) === parseInt(reqId)){
            article = fakeData[i];
        }
    }

    //RENDER
    let model = {
        title: article.title,
        articletext: article.articletext,
        published: `${article.published.getDate()}.${article.published.getMonth()}.${article.published.getFullYear()}`,
        author: article.author,
        image: article.image,
    };
    let output = Mustache.render(detailsTemplate, model);

    return response.send(output);
};

module.exports = detailsController;