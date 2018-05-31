//FORM VALIDATION CLIENT SIDE

document.querySelector('.btn').addEventListener('click',(e) => {
    e.preventDefault();
    //ERROR CHECKSUM
    let errorSum = 0;

    //GET CONTENT DATA
    let articleText = document.getElementById('articletext').value;
    let articleTitle = document.getElementById('title').value;
    let articleTeaser = document.getElementById('teaser').value;
    let articleAuthor = document.getElementById('author').value;

    //TITLE NEEDS TO BE BETWEEN 3 && 11 WORDS
    errorSum += validateRange(articleTitle, 'title', 3, 11);

    //TEASER GOTTA BE BETWEEN 50 && 250 CHARACTERS
    errorSum += validateRange(articleTeaser, 'teaser', 50, 250);

    //ARTICLE NEEDS TO BE AT LEAST 30 WORDS
    errorSum += validateRange(articleText, 'text', 30, -1);

    //AUTHOR CANNOT BE UNNAMED
    errorSum += validateRange(articleAuthor, 'author', 0, -1);

    //DATE CAN"T BE IN THE PAST
    //--DATE IS SET AUTOMATICALLY-- || --NO USER INPUT--//

    //SUBMIT IF NO ERROR WAS FOUND
    if (errorSum === 0) {
        let form = document.querySelector('form');
        form.submit();
    }
});

function validateRange(item, type, min, max) {
    let value;
    let error;

    //SET VALIDATION TYPE
    switch (type) {
        case 'title':
            value = item.split(' ').length;
            error = 'Word count';
            break;
        case 'teaser':
            value = item.length;
            error = 'Characters';
            break;
        case 'text':
            value = item.split(' ').length;
            error = 'Word count';
            break;
        case 'author':
            value = item.length;
            error = 'Author';
            break;
    }
    //DISPLAY ERROR
    if (value <= min && min === 0) {
        document.querySelector(`.${type}-error`).textContent = `${error} needs to be set!`;
        return 1;
    }
    if (value <= min && min !== -1) {
        document.querySelector(`.${type}-error`).textContent = `${error} needs to be higher than ${min}!`;
        return 1;
    }
    if (value >= max && max !== -1) {
        document.querySelector(`.${type}-error`).textContent = `${error} needs to be less than ${max}!`;
        return 1;
    }
    //CLEAR ERROR IF PASS
    document.querySelector(`.${type}-error`).textContent = '';
    return 0;
}


//LEFTOVER LOGIC FOR ERROR CLEAR
/*if (min !== -1 && max !== -1) {
        if (value < max && value > min){
            document.querySelector(`.${type}-error`).textContent = '';
            return 0;
        }
    }
    if (min !== -1 && max !== -1) {
        if (value < max && value > min){
            document.querySelector(`.${type}-error`).textContent = '';
            return 0;
        }
    }
    if(min === -1 && value < max){
        document.querySelector(`.${type}-error`).textContent = '';
        return 0;
    }
    if(max === -1 && value > min){
        document.querySelector(`.${type}-error`).textContent = '';
        return 0;
    }
    if (min === -1 && max === -1) {
        document.querySelector(`.${type}-error`).textContent = '';
        return 0;
    }*/