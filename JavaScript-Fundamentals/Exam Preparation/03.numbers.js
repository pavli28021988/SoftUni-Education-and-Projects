
//-----solution 1------//

/* function solve(input){

    let arrOfStrings = input.split(' ');
    //console.log(arrOfStrings);

    let arrOfNumbers = [];
    let sum = 0;
    for(let el of arrOfStrings){
        let currentNumber = Number(el);
        arrOfNumbers.push(currentNumber);
        sum+=currentNumber
    }
    //console.log(sum);

    let avg = sum / arrOfNumbers.length;

    let greaterThanAvg = [];
    for(let el of arrOfNumbers){
        if(el > avg){
            greaterThanAvg.push(el)
        }
    }
    //console.log(greaterThanAvg);

    let sorted = greaterThanAvg.sort((a,b) => b-a);
    //console.log(sorted);
    if (sorted.length > 0){
        console.log((sorted.slice(0,5)).join(' '));

    }else{
        console.log('No');
    }

}
solve('10 20 30 40 50');
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
solve('1');
solve('-1 -2 -3 -4 -5 -6');*/

//----solution 2-------//

function solve(input){

    let arrOfNumber = input.split(' ').map(Number);

    let sum = 0;
    //console.log(arrOfNumber);

    for ( let el of arrOfNumber){
        sum+= el
    }
    let avg = sum / arrOfNumber.length;
    arrOfNumber = arrOfNumber
    .filter(el => el > avg)
    .sort((a,b) => b-a)
    .slice(0,5);
    //console.log(arrOfNumber);

    if (arrOfNumber.length > 0){
        console.log(arrOfNumber.join(' '));
    }else{
        console.log("No");
    }
    // return arrOfNumber.length > 0 ? arrOfNumber.join(' ') : 'No' ;


}
solve('10 20 30 40 50');
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
solve('1');
solve('-1 -2 -3 -4 -5 -6');

