/*function solve(num1,num2,num3){

    if(num1 < num2 && num2 > num3){
        console.log(`The largest number is ${num2}`);
    }else if( num3 > num2 && num3 > num1){
        console.log(`The largest number is ${num3}`);
    }else{
        console.log(`The largest number is ${num1}`);
    }

}
solve(5, -3, 16);
console.log('------------------------');
solve(-3, -5, -22.5)*/




//--------------------------------------solution 2--------------------------------//

/*
function solve(num1,num2,num3){
    let result;
    if(num1 > num2 && num1 > num3){
        result = num1;
    }else if(num2 > num1 && num2 > num3){
        result = num2;
    }else if(num3 > num1 && num3 > num2){
        result = num3;
    }

    console.log(`The largest number is ${result}`)
}


*/ 


function solve(...nums){

    console.log(Math.max(...nums));

}
solve(5, -3, 16);
console.log('------------------');
solve(-3, -5, -22.5);