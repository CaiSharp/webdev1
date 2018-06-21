const mustache = require('mustache');
const fetch = require('node-fetch');
const categoriesTemplate = require('../view/categories.template');
let data;

//RENDER ALL CATEGORIES
let categoriesController = (request,response) => {
    fetch('http://localhost:8000/categories_API', {
        method: 'GET',
        mode: 'cors'
    })
        .then(res => res.json())
        .then(res => {
            data = res;

            //RENDER
            let output = mustache.render(categoriesTemplate, {data});
            return response.send(output);
        });
};

module.exports = categoriesController;
