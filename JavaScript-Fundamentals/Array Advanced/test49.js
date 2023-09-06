//Write a JavaScript program that takes an array of numbers and returns the third smallest number.

function solve(input){

    /*let sorted = input.sort((a,b) => a-b)
    console.log(sorted[2]);*/

    //solution 2//

    return input.sort((a,b)=> b-a)[input.length-3]

   
   

}
console.log(solve([2,3,5,7,1]));
solve([2,3,5,7,1]);
solve([2,3,0,5,7,8,-2,-4]);