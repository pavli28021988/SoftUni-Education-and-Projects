function solve(nums,criteria){

    let counter = 0;
    let el = criteria[2];


    let arr = nums.slice(0,criteria[0]);
    //console.log(arr);
    arr = arr.slice(criteria[1],arr.length)
    //console.log(arr);

    for (let i = 0; i < arr.length;i++){
        if (arr[i] === el) {
            counter++
        }
    }
    console.log(`Number ${el} occurs ${counter} times.`);

}
solve([5, 2, 3, 4, 1, 6],

    [5, 2, 3]);
solve([7, 1, 5, 8, 2, 7],

    [3, 1, 5]);