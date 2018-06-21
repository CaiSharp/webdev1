//GLOBAL VARIABLES
const mustache = require('mustache');
const fetch = require('node-fetch');
const entriesTemplate = require('../view/entries.template');
let data;

//RENDER ALL ENTRIES
let entriesController = (request,response) => {
    fetch('http://localhost:8000/entries_API', {
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

module.exports = entriesController;
