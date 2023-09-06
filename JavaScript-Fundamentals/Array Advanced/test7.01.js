function solve(arr){

    let res = arr.sort((a,b) => a-b);
    console.log(res.join(' '));

}
solve([ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]);