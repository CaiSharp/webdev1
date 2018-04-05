let input = [];

process.argv.forEach(function (val,index) {
    if(index>1){
        input.push(val);
    }
});

//console.log(input);

function joinInputToString(array){
    return array.join();
}

console.log(joinInputToString(input));
