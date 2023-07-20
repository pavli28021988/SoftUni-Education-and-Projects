function solve(num1,num2,num3){

    let sum = num1 + num2 + num3;
    //console.log(sum);


    if ( sum % 1 === 0){
        console.log(`${sum} - ${'Integer'}`);
    }else{
        console.log(`${sum} - ${'Float'}`);
    }

}
solve(9,100,1.1);
solve(100,200,303);


/*solution 2*/
/*function solve(num1,num2,num3){

    let sum = num1 + num2 + num3;

    sum % 1 === 0 ? sum += ' - Integer' : sum += ' -Float'
    console.log(sum)

}
solve(9,100,1.1);
solve(100,200,303);*/

/* solution 3*/
/* function solve(num1,num2,num3){

    let sum = num1 + num2 + num3;
    let res = sum.toString();
    let isFloat = true;


    for(let i = 0; i < res.length;i++){
        if(res[i] === '.'){
            isFloat = false;
        }
    }

    console.log(`${res} - ${isFloat ? 'Float' : 'Integer'}`)

}
solve*/
/*--------------------*/
/*solution 4*/

/*function solve(num1,num2,num3){

    let sum = num1 + num2+ num3;
    console.log(`${sum} - ${parseInt(sum) === sum ? 'Integer' : 'Float'}`)

}
solve(100,65.5,200)*/