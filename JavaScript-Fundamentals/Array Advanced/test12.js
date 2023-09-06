
//Write a JavaScript program to compute the sum and product of an array of integers.

function solve(arr){

    let sum = 0;
    let product = 1;

    for(let i = 0; i < arr.length;i++){//i +=1
        sum += arr[i];
        product *=arr[i];
    }

    console.log(`Sum: ${sum} and Product: ${product}`);

}
solve([1,2,3,4,5,6]);