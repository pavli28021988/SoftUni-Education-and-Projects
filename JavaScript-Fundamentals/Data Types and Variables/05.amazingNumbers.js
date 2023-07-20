function solve(num){



    let sum =0;
    num = num.toString();

    for (let i =0;i < num.length; i++){
        //console.log(i);
        sum += Number(num[i]);
    }

    if(sum.toString().includes('9')){
        console.log(`${num} Amazing? True`);
    }else{
        console.log(`${num} Amazing? False`);
    }
}
solve(1233);
solve(999);

/* solution 2*/


/* function solve(num){


    let sum = 0;
    num = num.toString();

    for(let i = 0; i < num.length;i++){
        sum = sum + Number(num[i]);
    }

    let result = sum.toString().includes(9);

    console.log( result ? `${num} Amazing? True` : `${num} Amazing? False`)

    

  

}
solve(10)*/
/*-------------------*/

/*solution 3*/
/* function solve(num){

    let num = num.toString();
    let result = 0;
    for (let i = 0; i < num.length,i++){
        result += Number(num[i]);
    }

    let result = result.toString();
    let isAmazing = false;

    for(let i = 0; i < result.length.i++){
        if(Number(res[i]) === 9){
            isAmazing = true;
            break;
        }
    }
    let amazing = isAmazing? 'True' : 'False';
    console.log(`${num} Amazing? ${amazing}`);

}
solve(12239);*/

