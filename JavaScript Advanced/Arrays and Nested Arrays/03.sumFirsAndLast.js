function solve(input){

    //sum 1-st and last element


    let first = Number(input.shift());
    let last = Number(input[input.length-1]);

    //console.log(last);
    //console.log(first);

    console.log(first + last);

}

/*
return Number(arr.pop()) + Number(arr.shift()));
*/
solve(['20', '30', '40']);
console.log('---------------------------');
solve(['5', '10']);