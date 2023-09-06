//Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, the third is the second biggest one, and the fourth is the second smallest one, and so on.



function solve(input){


    let array = input.map(Number).sort((a,b) => a-b);

    //console.log(array);

    let arrayCopy = array.slice(0);
    //console.log(arrayCopy);
    let result = [];

    for (let i =0; i < array.length;i++){
        result.push(arrayCopy[arrayCopy.length - 1]);

        if(result.length === array.length){
            break;
        }

        result.push(arrayCopy[0]);

        if(result.length === array.length){
            break;
        }

        arrayCopy.shift();
        arrayCopy.pop();

    }

    console.log(result.join(' '));
    
    
    

}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
solve([34, 2, 32, 45, 690, 6, 32,

    7, 19, 47]);