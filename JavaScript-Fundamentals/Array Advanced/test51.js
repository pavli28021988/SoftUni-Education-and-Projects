//Write a JavaScript program to check if an array is a factor chain or not.

function solve(arr){

    for(let i =0; i < arr.length;i++){
        if(arr[i+1] % arr[i] != 0){
            return false
        }else{
            return true
        }
    }

}
console.log(solve([2, 4, 8, 16, 32]));

solve([2, 4, 16, 32, 64]);
solve([2, 4, 16, 32, 68]);
