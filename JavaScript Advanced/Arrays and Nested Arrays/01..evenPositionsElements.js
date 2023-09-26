function solve(input){

    let res = [];


    for(let i = 0; i < input.length;i++){
        if(i % 2 == 0 ){
            res.push(input[i]);
        }
    }

    console.log(res.join(' '));

}
solve(['20', '30', '40',

'50', '60'])