function solve(numOne, numTwo, operator) {


    let res = 0;

    switch(operator){
        case 'multiply': res = (numOne,numTwo) => numOne * numTwo    ;break;
        case 'divide': res = (numOne,numTwo) => numOne / numTwo     ;break;
        case 'add':  res = (numOne,numTwo) => numOne + numTwo    ;break;
        case 'subtract':   res = (numOne,numTwo) => numOne - numTwo   ;break;
    }

    console.log(res(numOne,numTwo));
}
solve(5, 5,"multiply");
solve(40,8,"divide");
solve(12,19,"add");
solve(50, 13,"subtract");
