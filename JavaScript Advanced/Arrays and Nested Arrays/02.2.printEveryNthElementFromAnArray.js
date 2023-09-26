function solve(arr,n){
    let res = [];
    for(let i = 0; i < arr.length;i+=n){
        res.push((arr[i]));
    }

    console.log(res);

}




solve(['5',

'20',

'31',

'4',

'20'],

2);
solve(['dsa', 'asd', 'test', 'tset'], 2);
solve(['1', '2', '3', '4', '5'], 6);

/*
function solve(arr,step){
    return arr.filter((el,i) =>{
        if(i%step === 0){
            return el
        }
    })
}

*/