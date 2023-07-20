function solve(num) {
  for (let i = 1; i <= num; i++) {
    let currentNum = i; //we copy the value of i in new variable because we will change it

    let sumOfDigits = 0;

    while (currentNum > 0) {
      //we rotate this loop until we reach 0, i.e. we have cycled through all the digits of the number

      sumOfDigits += currentNum % 10; //we add to sumOgDigits the value of the last digit => example 345--we take 5

      currentNum = Math.trunc(currentNum / 10); //remove the last digit of the number => example 345 will be 34
    }

    let isSpecialNumber =
      sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11;
    console.log(isSpecialNumber ? `${i} -> True` : `${i} -> False`);
  }
}
solve(15);
solve(20);

/* solution 2*/
/*
let sum = 0;
    let answer = '';//answer is type of String

    for(let i = 1;i<=num;i++){
       // console.log(i);


       
       
        sum = i % 10 + parseInt(i / 10);// i% 10 =>>>we add to sum the value of the last digit=> example 345 we take 5-------------i / 10 =>>>>we remove the last digit -for example 345 -we remove 5


       answer = sum === 5 || sum === 7 || sum === 11;

       console.log(answer ? `${i} -> True` : `${i} -> False`);
    }

    

    
  



}
solve(15);
solve(20);*/
