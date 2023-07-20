/*function solve(num){

    for (let i = 97; i < 97 + num; i++){

        let firstLetter = String.fromCharCode(i);

        for (let j = 97; j < 97 + num; j++){

            let secondLetter = String.fromCharCode(j);

            for (let k = 97; k < 97 + num; k++){

                let thirdLetter = String.fromCharCode(k);


                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);

            }
        }
    }

    

}
solve('3');
solve('2');*/


/*solution 2*/


function solve(num){

    for (let i = 0; i < num ; i++){

        let firstLetter = String.fromCharCode(i + 97);

        for (let j = 0; j < num; j++){

            let secondLetter = String.fromCharCode(j + 97);

            for (let k = 0; k < num; k++){

                let thirdLetter = String.fromCharCode( + 97);


                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);

            }
        }
    }

    

}
solve('3');
solve('2');

