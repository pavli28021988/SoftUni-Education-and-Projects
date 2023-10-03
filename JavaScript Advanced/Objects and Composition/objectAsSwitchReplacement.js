/*

//switch-----//

let count = 5;
switch(command){
    case 'increment':
        count++;
        break;
    case 'decrement':
            count--;
            break;
    case 'reset' :
        count = 0;
        break;  
}

//object------------------//
let count = 5;

const parser = {
    increment(){count++;},
    decrement(){count--;},
    reset(){count = 0;}
}

parser[command]();

*/


function solve(commands){

    let count = 0;


    const parser = {
        increment(){count++;},
        decrement(){count--;},
        reset(){count=0;}
    }

    for(let command of commands){
        parser[command]();
    }

    console.log(count);

}
    



solve(['increment','decrement','reset','increment']);