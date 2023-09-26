function solve(arr){
  let sorted = arr.sort((a,b) => a-b);
  let half = Math.floor(arr.length / 2);
  let res = sorted.slice(half);
  console.log(res);
}
solve([4, 7, 2, 5]);
console.log('---------------');
solve([3, 19, 14, 7, 2, 19, 6]);