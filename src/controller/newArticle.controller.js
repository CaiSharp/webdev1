const Mustache = require('mustache');
const newTemplate = require('../view/new.template');

//RENDER CREATE NEW ARTICLE TEMPLATE
let newArticleController = (request,response) => {

    let output = Mustache.render(newTemplate);

    return response.send(output);
};

module.exports = newArticleController;