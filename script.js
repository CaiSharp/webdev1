let input = [];

process.argv.forEach(function (val,index) {
    if(index>1){
        input.push(val);
    }
});

//console.log(input);

(function controller(input){

    //1.Convert Input into 1 String
    let inputString = joinInputToString(input);
    console.log(inputString);

    //2.Remove commas
    inputString = inputString.replace(/,/g, '');
    //console.log(inputString);

    //3.Search for operators
    const operatorIndex = inputString.search(/[x+/-]/);
    //console.log(inputString.search(/[x+/-]/));

    //4.slice into operator/arguments and parse float
    const arg1 = parseFloat(inputString.slice(0,operatorIndex));
    const arg2 = parseFloat(inputString.slice(operatorIndex+1));
    const op = inputString.charAt(operatorIndex);
    /*
    console.log(arg1);
    console.log(arg2);
    console.log(op);
    */

    //5.execute basic math function (switch)
    switch (op) {
        case '+':
            console.log(addition(arg1,arg2));
            break;

        case '-':
            console.log(subtraction(arg1,arg2));
            break;

        case 'x':
            console.log(multiply(arg1,arg2));
            break;

        case '/':
            console.log(divide(arg1,arg2));
            break;

        default:
            console.log('invalid operator');
    }

}(input));


function joinInputToString(array){
    return array.join();
}

function addition(x,y){
    return x+y;
}

function subtraction(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}




