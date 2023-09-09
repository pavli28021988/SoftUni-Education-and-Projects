function solve(input){
//area = PI * r * r=>  Math.PI * r * r

if (typeof input !== 'number'){
    console.log(`We can not calculate the circle area, because we receive a ${typeof input}`);
}else{
    let area = Math.PI * input * input;
    console.log(area.toFixed(2));
}
}
solve(5);
console.log('---------------------');
solve('name');

//------------------------------Solution 2------------------------------//

/*

function solve(radius){
    let inputType = typeof(radius);

    if(inputType === 'number'){
        let area = math.pow(radius,2) * Math.PI;
        console.log(area.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${inputType}``)
    }
}
*/ 

// typeOf NaN //number
// typeOf null //object