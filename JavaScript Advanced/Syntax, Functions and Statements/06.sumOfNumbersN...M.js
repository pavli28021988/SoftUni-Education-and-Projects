function solve(num1,num2){

    let n = Number(num1);
    let m = Number(num2);
    let sum = 0 ;  

    for(let i = n ; i <= m;i++){

        sum += i
        //console.log(i);

    }
    console.log(sum);

}
solve('1', '5');
console.log('----------------');
solve('-8', '20');


//-----------------------//

/*

function solve(num1,num2){

    let n = Number(num1);
    let m = Number(num2);
   

    for(let i = n ; i <= m;i++){

        sum += i
       

    }
    return sum;

}
console.log(solve('1', '5'));
console.log('----------------');
solve('-8', '20');

*/