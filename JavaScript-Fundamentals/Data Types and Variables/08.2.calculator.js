function solve(number1,operator,number2){


    let res =0;


    switch (operator){
        case '+': res = number1 + number2  ;break;
        case '-' : res = number1 - number2   ;break;
        case '/' : res= number1 / number2   ;break;
        case '*' : res = number1 * number2   ;break;
    }

    console.log(res.toFixed(2));

}
solve(5,'+',10);
solve(25.5,'-',3);