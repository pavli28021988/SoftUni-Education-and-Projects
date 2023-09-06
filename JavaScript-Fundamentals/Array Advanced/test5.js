//Write a simple JavaScript program to join all elements of the following array into a string.


function solve(input){
  console.log(input.toString());
  console.log(input.join());
  console.log(input.join('+'));
}
solve( ["Red", "Green", "White", "Black"])