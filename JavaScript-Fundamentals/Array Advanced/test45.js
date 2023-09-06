
// Write a JavaScript program to find all the unique values in a set of numbers.
function solve(arr){

    //let res = [];

    let res = Array.from(new Set(arr));
    console.log(res);


}
solve([1, 2, 2, 3, 4, 4, 5]);
solve([1, 2, 3, 4, 5]);
solve([1, -2, -2, 3, 4, -5, -6, -5]);

/*
//-------------solution 2---- with FOREACH()--------------
let unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
//---------------with indexof()--------
let unique = [];
    for (i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
*/ 