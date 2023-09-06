
//Write a JavaScript program to count the number of arrays inside a given array.

function solve(arr){
  let res = arr.filter(n=>Array.isArray(n)).length;  //Array.isArray() static method determines whether the passed value is an Array.
  // let res = arr.filter(n => n.length).length;


  console.log(`Number of arrays inside the said array: ${res}`);
}
solve([2,8,[6],3,3,5,3,4,[5,4]]);
solve([2,8,[6,3,3],[4],5,[3,4,[5,4]]]);