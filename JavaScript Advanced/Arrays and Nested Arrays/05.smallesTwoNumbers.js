function solve(arr){

    let sorted = arr.sort((a,b) => a-b);
    //console.log(sorted);

    let res = sorted.splice(0,2);
    console.log(res.join(' '));

}
solve([30, 15, 50, 5]);
console.log('--------------------');
solve([3, 0, 10, 4, 7, 3]);