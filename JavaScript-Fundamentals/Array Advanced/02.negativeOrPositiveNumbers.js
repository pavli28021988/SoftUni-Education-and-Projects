function solve(arr){

    let res = [];


    for (let el of arr){
        if ( el < 0){
            res.unshift(el);
        }else{
            res.push(el);
        }
    }

    console.log(res.join('\n'));

}
solve(['7', '-2', '8', '9']);
solve(['3', '-2', '0', '-1']);


//----solution 2----

/* 

function solve(arr){

    res = [];

    for (let i = 0; i < arr.length;i++){
        if (arr[i] < 0){
            res.unshift(arr[i]);
        }else{
            res.push(arr[i]);
        }
    }

    console.log(res.join('\n'))

}
solve(['7','12','-10','0'])


*/
