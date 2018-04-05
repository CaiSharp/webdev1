let input = [];

process.argv.forEach(function (val,index) {
    if(index>1){
        input = [];
        input.push(val);
        console.log(input);
    }
});

function joinInputToString(){
    input.join();
}

