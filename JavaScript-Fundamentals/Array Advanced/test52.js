/*function solve(arr){

    if (arr.includes(8)){
        console.log(arr.indexOf(8));
    }else{
        console.log([]);
    }
    

}*/


function solve(arr){
    return arr
    .map((el,i) =>{
        if(isNaN(el)){
            return i;
        }else{
            return false;
        }
    })
    .filter((el) =>{
        return el;
    })
}
let res = [2, NaN, 8, 16, 32]
console.log(solve([2, NaN, 8, 16, 32]));
console.log(`Original array: ${res}`);
console.log(`Find all indexes of NaN of the said array: ${solve([2, NaN, 8, 16, 32])}`);

solve([2, 4, NaN, 16, 32, NaN]);
solve([2, 4, 16, 32]);