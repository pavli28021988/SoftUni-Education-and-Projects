function solve(arr,rotations){

    while (rotations > 0){

        let movedElement = arr.shift();
        arr.push(movedElement);


        rotations--
    }

    console.log(arr.join(' '));

}
solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);


//solution 2
/*  

function solve(arr,rotations){


    for ( let i =1 ; i <=rotations;i++){
        let movedElement = arr.shift();
        arr.push(movedElement/.join(' '));
    }


    console.log(arr);

}
solve([51, 47, 32, 61, 21], 2)



*/