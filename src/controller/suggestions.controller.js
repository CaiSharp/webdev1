const fakeData = require('../init');

//RENDER ALL ARTICLES
let suggestionsController = (request,response) => {

    let suggestions = createSuggestions(fakeData);
    return response.json(JSON.stringify(suggestions));
};

function createSuggestions(arrData) {
    let suggestions = [];
    let removePoint = [];

    //SPLIT TITLE INTO WORDS
    arrData.forEach( el => {
        let titleSplit = el.title.split(' ');
        titleSplit = titleSplit.filter(el => el.length>=3);
        suggestions = [...suggestions,...titleSplit];
    });

    //FILTER OUT POINTS
    suggestions.forEach(el=>{
        if(el.endsWith('.')){
            removePoint.push(el.slice(0,-1));
        }else{
            removePoint.push(el)
        }
    });
    suggestions = removePoint;
    return suggestions;
}

module.exports = suggestionsController;