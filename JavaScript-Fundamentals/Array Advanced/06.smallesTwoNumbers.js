function solve(arr){
   let sorted = arr.sort((a,b) => a-b)
   .slice(0,2)
   .join(' ');

   console.log(sorted);
   
}
solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);