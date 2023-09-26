//------------------REDUCE()---------------------//

//takes 4 arguments:
//-accumulator
//-current value
//-current index
//-source array
//=> reducer function's returned value is assigned to the accumulator
//=> accumulator's value -the final,single resulting value


/*
let sum = [0,1,2,3].reduce((acc,curr)=>{

    return acc + curr;

},0)

console.log(sum)//6

*/

/*
const numbersArr = [30,50,40,10,70];

const average = 
numbersArr.reduce((total,number,index,array) =>{
    total += number;
    if(index === array.length-1){
        return total / array.length;
    }else{
        return total;
    }
});
console.log(average)//40;

*/ 

//------------------------nested arrays in JS-------------------------------//

/*
let arr = [
    [4,6,3,0],
    [2,1,-2],
    [-5,17],
    [7,3,9,12]
];
=> arr[2][0] => //-5
*/ 

/*

//nested array loop in javascript-------------------------------------------------------//
let chunked = [[1,2,3], [4,5,6], [7,8,9]];

for(let i = 0; i < chunked.length; i++) {
  
   for(let j = 0; j < chunked[i].length; j++) {
     
      console.log(chunked[i][j]);
   }
}

*/ 


//-----------------looping through a Nested Array---------------------
/*


let arr = [[4,5,6],[6,5,4],[5,5,5]];


arr.forEach(printRow);
function printRow(row){
    console.log(row);
    row.forEach(printNumber)
}

function printNumber(num){
    console.log(num)
};
//---------------------------------------//

let matrix = [[1,2,3,4],[7,8,9],[8,10,12,15]];


matrix.forEach(row=>{
    let result = '';
    row.forEach(col=>result += col + ' ');


    console.log(result);
    console.log();
})

*/ 



