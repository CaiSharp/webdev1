const mustache = require('mustache');
const fetch = require('node-fetch');
const entriesTemplate = require('../view/entries.template');
let data;

//RENDER ALL CATEGORIES
let singleCategoryController = (request,response) => {
    let categoryName = request.params.name;
    fetch(`http://localhost:8000/categories_API/${categoryName}`, {
        method: 'GET',
        mode: 'cors'
    })
        .then(res => res.json())
        .then(res => {
            data = res;

            //RENDER
            let output = mustache.render(entriesTemplate, {data});
            return response.send(output);
        });
};

module.exports = singleCategoryController;
