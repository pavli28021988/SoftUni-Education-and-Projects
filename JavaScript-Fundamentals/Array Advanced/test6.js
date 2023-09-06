// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.



/*function solve(num){


    let str = num.toString();

    let result = [];

    for (let i = 0; i < str.length;i++){
        if(str[i] % 2 === 0){
            result.push('-',str[i]);
        }else{
            result.push(str[i])
        }
    }

    console.log(result.join(' '));

    

    

    
    
}
solve('025468');//- 0 - 2 5 - 4 - 6 - 8*/


function solve(num){

    let str = num.toString();

    let result = [str[0]];//if it is without str[0]=> result - 2 5 4 - 6 - 8 but we want res => 0 - 2 5 4 - 6 - 8

    for (let i = 1; i < str.length;i++){
        if((str[i-1] % 2 === 0) && (str[i] % 2 ===0)){//if it is without (str[i-1] % 2 === 0) => result 0 - 2 5 - 4 - 6 - 8
            result.push('-',str[i]);
        }else{
            result.push(str[i]);
        }
    }

    console.log(result.join(' '));

}
solve('025468')