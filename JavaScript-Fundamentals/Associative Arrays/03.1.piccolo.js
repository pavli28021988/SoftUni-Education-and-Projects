function solve(arr){


    let parking = new Set();

    for(let el of arr){
        let tokens = el.split(', ');
        let command = tokens[0];
        let numberOfCar = tokens[1];

        switch(command){
            case "IN": parking.add(numberOfCar)  ;break;
            case "OUT": parking.delete(numberOfCar)  ;break;
        }
    }

    if(parking.size === 0){
        console.log('Parking is empty');
    }

    let sorted = Array.from(parking).sort();// == Array.from(parking.value()).sort();
    console.log(sorted.join('\n'));

}
solve(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU']);
solve(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA']);