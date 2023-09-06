function solve(arr){

    let sum = 0;
    for(let el of arr){
        if(typeof el  === 'number'){
            sum += el
        }
    }
    console.log(sum);

}
solve([2, "11", 3, "a2", false, 5, 7, 1]);
solve([2, 3, 0, 5, 7, 8, true, false]);