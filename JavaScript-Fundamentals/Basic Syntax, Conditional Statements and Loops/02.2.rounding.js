function solve(number,precision){


    if (precision > 15){
        precision = 15
    }


    let roundedNumber = number.toFixed(precision);
    console.log(parseFloat(roundedNumber));

    /*console.log(parseFloat(number.toFixed(precision)))*/
}
solve(3.1415926,2);
solve(10.5,3);
solve(5.5656899999956288456612233,20);