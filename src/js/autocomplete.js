//AUTOCOMPLETE FOR INPUT FILTER FIELD

//GLOBAL VARIABLES
let data;
let suggestions;

//GET ARTICLES
fetch('/get-articles')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        data = myJson;
        //ADD EVENTLISTENER
        document.getElementById('filter').addEventListener('input', () => {
            //GET INPUT
            let input = document.getElementById('filter').value;
            //CREATE SUGGESTIONS && FILTER FOR MATCHING INPUT
            suggestions = JSON.parse(data);
            suggestions = filterSuggestions(suggestions,input);
            //DISPLAY SUGGESTIONS
            displaySuggestions(suggestions);
        });
    })
;

function filterSuggestions(arr, input) {
    return arr.filter((el)=>el.toLowerCase().includes(input.toLowerCase()));
}

function displaySuggestions (arr) {
    const element = document.querySelector('.suggestions--list');
    let listSuggestion = '';

    if (arr.length > 0) {
        for (let i = 0; i < 5; i++) {
            listSuggestion = listSuggestion.concat(`<li><span class="sugg-span" onclick="filter(this)">${typeof arr[i] == 'undefined' ? '' : arr[i] }</span></li>`);
        }
        element.innerHTML = (listSuggestion);
    } else {
        element.innerHTML = '';
    }
}

function filter (input) {
    document.getElementById('filter').value = input.textContent;
    document.querySelector('form').submit();
}
