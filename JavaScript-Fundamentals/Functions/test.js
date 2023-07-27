/*function solve(arr){

    console.log(`${arr[0]} ${arr[1]}`);

}
solve(['John', 'Smith'])*/

/*function solve(num,power){
    let res = 1;
   for (let i = 0; i < power; i++){

       res *= num

   }
   console.log(res);

}
solve(2,8);*/

/*function solve(firstName,lastName){

    return `${firstName} ${lastName}`

}
console.log(solve('John', 'Smith'));*/


//---------------------------//

// check if ARRAY INDEX is VALID!!!! //

/*function solve(index,arr){
    if (Number.isInteger(index)   && index >= 0  && index < arr.length){
        return true;
    }else{
        return false;
    }
}*/


 /*function solve (string, num){


    let res = '';

    for ( let i = 0; i < num; i++){
        res += string
    }
    return res ;

}
console.log(solve("abc", 3)
);*/


/*function solve(n){


    let res = n => n + 1;

    console.log(res(n));

}

solve(5);*/


/*function solve(n){

    let res = function (n) {
        return n + 1 ;
    }
    
   

}*/


/*function solve(a,b){


    let sum = (a,b) => a + b;

    console.log(sum(a,b));

}

solve(5,6);*/


/*function solve(num){
    let increment = (x,b) => {
        b += 1; // b + 1 => 6 

        return x + b;
    }

    let res = increment(num,num);
    return res;
}

console.log(solve(3));*/


function solve(){

    let num = 123;

    let reversed = num.toString().split('').reverse().join(' ');
    console.log(reversed);

}
solve();









