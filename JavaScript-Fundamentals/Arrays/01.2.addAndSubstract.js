function solve(arr){


    let arrSum = 0;
    let newArrSum = 0;

    for (let i = 0 ; i < arr.length; i++){
        arrSum += arr[i];


        if (arr[i] % 2 === 0){

            arr[i] += i;

        }else{
            arr[i] -= i;
        }

        newArrSum += arr[i]
    }

    console.log(arr);
    console.log(arrSum);

    console.log(newArrSum);

}
solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);
