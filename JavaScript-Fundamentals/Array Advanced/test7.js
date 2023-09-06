/*function solve(arr){

    let res = arr.filter((x,y) => arr.indexOf(x) === y);
    console.log(res);

}
solve([1,2,3,4,5,5,6]);
solve([2,5,5,6,6,7,7,7]);*/


/*function solve(arr){

    let res = [...new Set(arr)];
    
    console.log(res);

   
    

}
solve([1,2,3,4,4,4,4,])*/


function solve(arr){

    let res = [];

    arr.forEach(x => {
        if(!res.includes(x)){
            res.push(x)
        }
    }) ;

    console.log(res);

}
solve([8,8,9,9,2,5,6,8,9,9])