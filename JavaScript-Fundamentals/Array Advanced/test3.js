//Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.


function solve(arr,n){

    if ( n == null){
        return arr[0];
    }else if(n < 0){
        return [];
    }else if(n > 0){
        return arr.slice(0,n);
    }else if(arr === null){
        return void 0;
    }
   
        
   
    

}

console.log(solve([7, 9, 0, -2]));
console.log(solve([],3));
console.log(solve([7, 9, 0, -2],3));
console.log(solve([7, 9, 0, -2],6));
console.log(solve([7, 9, 0, -2],-3));




