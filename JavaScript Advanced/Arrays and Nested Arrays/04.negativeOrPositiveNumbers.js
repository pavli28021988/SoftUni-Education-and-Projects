function solve(input){

    let newArr = [];

    for(let el of input){
        if(el < 0){

            newArr.unshift(el)

        }else{

            newArr.push(el)

        }

    }

    for(let el of newArr){

        console.log(el);

    }
    

}
solve([7, -2, 8, 9]);
console.log('------------------');
solve([3, -2, 0, -1]);