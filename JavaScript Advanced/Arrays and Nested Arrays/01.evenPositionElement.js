function solve(input){

    /*for(let el of input){
        if(el % 2  !== 0){
            console.log(el);
        }
    }*/


    /*for(let i = 0; i < input.length;i++){
        if(input[i] % 2 !== 0){
            console.log(input[i]);
        }
    }*/

    let res = '';

    for(let i = 0; i < input.length;i+=2){
        res += input[i];

        res += ' ';//res += input[i] + ' '  ;
        
    }

    console.log(res.trim());

}
solve(['20', '30', '40',

'50', '60']);

console.log('---------------');

solve(['5', '10']);
