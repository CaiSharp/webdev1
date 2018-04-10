//GLOBAL VARIABLES
let input = [];

//USER INPUT
process.argv.forEach(function (val,index) {
    if(index>1){
        input.push(val);
    }
});

(function controller(input){

    //1.Convert Input into 1 String
    let inputString = joinInputToString(input);

    //2.Remove commas
    inputString = inputString.replace(/,/g, '');

    //3.Search for operators
    const operatorIndex = inputString.search(/[x+/-]/);

    //4.slice into operator/arguments and parse float
    const arg1 = parseFloat(inputString.slice(0,operatorIndex));
    const arg2 = parseFloat(inputString.slice(operatorIndex+1));
    const op = inputString.charAt(operatorIndex);

    //5.execute basic math function (switch)
    if(isNaN(arg1)==false&&isNaN(arg2)==false){
        switch (op) {
            case '+':
                console.log(`${arg1} ${op} ${arg2} = ${addition(arg1,arg2)}`);
                break;

            case '-':
                console.log(`${arg1} ${op} ${arg2} = ${subtraction(arg1,arg2)}`);
                break;

            case 'x':
                console.log(`${arg1} ${op} ${arg2} = ${multiply(arg1,arg2)}`);
                break;

            case '/':
                if(arg2!==0){
                    console.log(`${arg1} ${op} ${arg2} = ${divide(arg1,arg2)}`);
                }
                console.log("Can't divide by zero");
                break;

            default:
                console.log('invalid operator');
        }
    }

    //Error for arguments
    if(isNaN(arg1)){
        console.log('Argument 1 is not a valid number')
    }
    if(isNaN(arg2)){
        console.log('Argument 2 is not a valid number')
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




