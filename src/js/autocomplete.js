//AUTOCOMPLETE FOR INPUT FILTER FIELD

//VARIABLES
let data;
let suggestions;

document.getElementById('filter').addEventListener('input', e => {
    let input = document.getElementById('filter').value;
    console.log(input);
    //GET ARTICLES
    getJSON('/get-articles');
    //CREATE SUGGESTIONS && FILTER FOR MATCHING INPUT
    suggestions = createSuggestions(JSON.parse(data));
    suggestions = filterSuggestions(suggestions,input);
    //DISPLAY SUGGESTIONS
    displaySuggestions(suggestions);
});

function getJSON(url){
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            data = myJson;
        });
}

function createSuggestions(arrData) {
    let suggestions = [];

    arrData.forEach( el => {
        let titleSplit = el.title.split(' ');
        titleSplit = titleSplit.filter(el => el.length>=3);
        suggestions = [...suggestions,...titleSplit];
    });
    return suggestions;
}

function filterSuggestions(arrData, input) {
    return arrData.filter((el)=>el.includes(input));
}

function displaySuggestions (array) {
    const element = document.querySelector('#suggestions');
    if (array.length > 0) {
        element.innerHTML = `
      <ul>
        <li><span class="sugg-span" onclick="searchIt(this)">${typeof array[0] == 'undefined' ? '' : array[0] }</span></li>
        <li><span class="sugg-span" onclick="searchIt(this)">${typeof array[1] == 'undefined' ? '' : array[1] }</span></li>
        <li><span class="sugg-span" onclick="searchIt(this)">${typeof array[2] == 'undefined' ? '' : array[2] }</span></li>
        <li><span class="sugg-span" onclick="searchIt(this)">${typeof array[3] == 'undefined' ? '' : array[3] }</span></li>
        <li><span class="sugg-span" onclick="searchIt(this)">${typeof array[4] == 'undefined' ? '' : array[4] }</span></li>
      </ul>
    `;
    } else {
        element.innerHTML = '';
    }
}

function searchIt (input) {
    let searchTerm = input.textContent;
    document.getElementById('filter').value = searchTerm;
    document.querySelector('form').submit();
}
