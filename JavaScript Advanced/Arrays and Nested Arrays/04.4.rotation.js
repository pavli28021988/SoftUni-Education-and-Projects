/*function solve(arr)
{
    let rotations = +arr[arr.length - 1];
    arr.pop();
    for(let i = 1; i <= rotations; i++)
    {
        let current = arr.pop();

        arr.unshift(current);
    }
    console.log(arr.join(' '));
}*/


function solve(arr,rotations){

    while (rotations > 0){

        let movedElement = arr.shift();
        arr.push(movedElement);


        rotations--
    }

    console.log(arr.join(' '));

}

solve(['1',

'2',

'3',

'4'],

2);