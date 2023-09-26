function solve(arr){
    let res = [];
    //let biggestOne = arr[0];

    let biggestOne = arr.shift();
    res.push(biggestOne);


    for(let el of arr){
        if(el >= biggestOne){
            res.push(el);
            biggestOne = el;
        }
    }

    console.log(res);

}
solve([1,3,8,4,10, 12, 3, 2, 24]);
console.log('----------------------------');
solve([1, 2, 3, 4]);
console.log('----------------------------');
solve([20, 3, 2, 15,6, 1]);
//------------solution with reduce()--------------------------------//

/*
function solve(arr){
    let res = [];
    let biggestOne= arr[0];

    res.reduce((acc,currentElement)=>{
        if(biggestOne <= currentElement){
            acc.push(currentElement);
            biggestOne = currentOne
        }
        return acc
    },[]);

    return res
}

*/ 



















//----------------------------------------------------------------------------------------------------------//
//In this example, the greatest value in the array is -1, which is located at index 2.//

/*

function indexOfMax(arr) {
    return arr.reduce((maxIndex, elem, i, arr) => 
        elem > arr[maxIndex] ? i : maxIndex, 0);
} 
let arr = [-2, -5, -1, -8, -3];
console.log(indexOfMax(arr));
*/ 
