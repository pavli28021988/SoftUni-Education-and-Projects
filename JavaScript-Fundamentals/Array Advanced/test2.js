//Write a JavaScript function to clone an array.

/*function solve(arr){

    let res = arr.slice();
    console.log(res);

}
solve([1, 2, 4, 0]);
solve([1, 2, [4, 0]]);*/


function solve(arr){

    return arr.slice(0);

}
console.log(solve([1, 2, 4, 0]));
console.log(solve([1, 2, [4, 0]]));

/* 
 let res = [...arr]
 console.log(res);

*/

/* 
   let res = arr => arr.slice(0);
   console.log(res);
*/