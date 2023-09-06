function solve(arr){

    let sum = 0;

    for (let i =0; i < arr.length;i++){
        let res = Math.pow(i,2);
        sum += res
    }

    console.log(sum);

}
solve([0,1,2,3,4]);

/* 
function sum_sq(array) {
  var sum = 0, 
      i = array.length;
  while (i--) 
   sum += Math.pow(array[i], 2);
  return sum;
}
 

*/