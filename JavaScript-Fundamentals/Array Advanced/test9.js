//Swap the case of each character of a string, upper case to lower 

function solve(input){

    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];

    for(let i = 0; i < input.length;i++){
        if (upper.indexOf(input[i]) !== -1){

            result.push(input[i].toLowerCase());

        }else if(lower.indexOf(input[i]) !== -1){
            result.push(input[i].toUpperCase());
        }
    }

    console.log(result.join(' '));

}
solve( 'The Quick Brown Fox');