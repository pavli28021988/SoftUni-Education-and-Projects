function solve(arr1,arr2){

    for (let i = 0; i < arr1.length; i++){

        arr1[i] = Number(arr1[i])

    }


    for (let i = 0; i < arr2.length; i++){
        arr2[i] = Number(arr2[i])
    }

    let isEqual = true;
    let sum = 0;

    for(let i = 0; i <arr1.length; i++){
        


        if (arr1[i] === arr2[i]){
            for (let el of arr1){
                sum += el;
            }

            console.log(`Arrays are identical. Sum: ${sum}`);
            isEqual = true;
            break;
        }

        if (arr1[i] !== arr2[i]) {

            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;

        }
    }


    

}
solve(['10','20','30'],

['10','20','30']);

solve(['1','2','3','4','5'],

['1','2','4','4','5']);
solve(['1'], ['10']);