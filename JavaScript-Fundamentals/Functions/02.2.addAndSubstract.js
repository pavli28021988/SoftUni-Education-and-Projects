function solve(num1,num2,num3){
      let sumRes = sum(num1,num2)

      let subtractSum = subtract(sumRes,num3)
    function sum(num1,num2){
        return num1 + num2;
    }

    function subtract(sumRes,num3){
        return sumRes - num3

    }

    console.log(subtractSum);

}
solve(23,

    6,
    
    10);
solve(1,

    17,
    
    30);
solve(42,58, 100);

/*----Arrow method -----------


function solve(num1,num2,num3){
   

    let sum = (num1,num2) => { // let sum = (num1,num2) => num1 + num2;

        return num1 + num2;

    };

    let subtract = (sumRes,num3) => { // let subtract = (sumRes,num3) => sumRes - num3

        return sumRes - num3;

    };

    let sumRes = sum(num1,num2);
   let finalSum = (sumRes,num3);


   console.log(finalSum)


}
solve()




*/



