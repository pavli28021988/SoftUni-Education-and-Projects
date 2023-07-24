function solve(arr,num){

    let foundedPairArr = [];
    let foundedPair = '';
   


    for (let i = 0; i < arr.length;i++){
        for(let j = i + 1; j <arr.length;j++){

            if (arr[i] + arr[j] === num)  {
                foundedPair = `${arr[i]} ${arr[j]}`;

                foundedPairArr.push(foundedPair)
            }

        }
    }

    console.log(foundedPairArr.join('\n'));

}
solve([1, 7, 6, 2, 19, 23],

    8);

    console.log('---------------------------');
solve([14, 20, 60, 13, 7, 19, 8],

    27);
    console.log('---------------------------');
solve([1, 2, 3, 4, 5, 6],

    6);