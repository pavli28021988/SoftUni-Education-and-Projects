function solve(arr){

    let res = arr
    .filter((num,i) => i % 2 === 1)
    .map(i => i*2)
    .reverse();

    console.log(res.join(' '));

}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);

/*
( numbers) => numbers.filter((num,i) => i % 2 ===1)
.map( x=> x*2)
.reverse()
.join(' ');

*/