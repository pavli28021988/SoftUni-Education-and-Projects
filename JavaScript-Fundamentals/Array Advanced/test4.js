// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

function solve(arr,n){

    if (n == null){
        return arr.slice(-1).join(' ');
    }else if(n > 0){
        return arr.slice(-n)
    }

}

console.log(solve([7, 9, 0, -2]));
console.log(solve([7, 9, 0, -2],3));
console.log(solve([7, 9, 0, -2],6));

// solution 2//

/* 

function solve(arr,n){
    if (arr == null){
        return void 0;
    }else if(n == 0){
        return arr[arr.length - 1];
    }else{
        return arr.slice(Math.max(arr.length - n,0));//without math.max=> empty array
    }
}

*/



