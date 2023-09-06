//Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.

function solve(number) {
  /*for(let n of arr){
        if ((n == 2) && (n % 2 !== 0) ){
           return true
        }else{
          return false
        }
    }*/

  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(solve([2, 3, 5, 7]));
console.log(solve([2, 3, 5, 7, 8]));

//--solution 2//
/*function test(arr_nums) 
{
   for (n of arr_nums)
   {
    if (n == 1 | n > 2 & n % 2 == 0) 
      return false;
  }
  return true;
}*/
