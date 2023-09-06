function solve(arr){

    let k = arr.shift();
    //console.log(k);
    let first = arr.slice(0,k);
    //console.log(first);
    let second = arr.slice(arr.length - k,arr.length);//arr.slice(-k)
    //console.log(second);

    console.log(first.join(' '));
    console.log(second.join(' '));

}
solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);