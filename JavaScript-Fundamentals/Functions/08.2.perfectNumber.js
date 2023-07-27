/*function solve(num){


    let temp = 0;


    for(let i = 1 ; i < num / 2; i++){
        if(num % i === 0){
            temp += i;
        }
    }

    if (temp === num && temp !== 0){
        console.log("We have a perfect number!");
    }else{
        console.log("It's not so perfect.");
    }

}
//solve(6);
solve(28);
//solve(1236498);*/

function is_perfect(number) {
  let temp = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }

  if (temp === number && temp !== 0) {
    console.log("It is a perfect number.");
  } else {
    console.log("It is not a perfect number.");
  }
}
is_perfect(28);
is_perfect(1236498);


/* //-------------solution 2----------------



function solve(num){

    let sum = 1;

    for (let i = 2; i < num ; i++){
        if ( num % i === 0){
            sum += i
        }
    }

    if (sum ==== num){     // let res = (sum === num) ? 'We have a perfect number!'   : 'It's not so perfect.'
        console.log('We have a perfect number!')
    }else{
        console.log('It's not so perfect.')
    }

}
solve(6)
*/
